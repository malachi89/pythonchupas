import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { translateError } from '../utils/errorTranslator';
import type { RunResult } from '../types';

interface PyodideContextType {
  ready: boolean;
  loading: boolean;
  loadError: string | null;
  runCode: (code: string, mockInputs?: string[]) => Promise<RunResult>;
  runWithTest: (userCode: string, testCode: string) => Promise<RunResult>;
}

const PyodideContext = createContext<PyodideContextType>({
  ready: false,
  loading: true,
  loadError: null,
  runCode: async () => ({ output: '', error: 'Pyodide no está listo.' }),
  runWithTest: async () => ({ output: '', error: 'Pyodide no está listo.' }),
});

declare global {
  interface Window {
    loadPyodide: (config: { indexURL: string }) => Promise<unknown>;
  }
}

export function PyodideProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pyodideRef = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadPyodide() {
      try {
        if (!window.loadPyodide) {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.27.0/full/pyodide.js';
          document.head.appendChild(script);
          await new Promise<void>((resolve, reject) => {
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('No se pudo cargar Pyodide'));
          });
        }

        const pyodide = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.0/full/',
        });

        // Override input() to avoid browser prompt
        await pyodide.runPythonAsync(`
import builtins, sys

def _no_input(prompt=""):
    return ""
builtins.input = _no_input
`);

        if (!cancelled) {
          pyodideRef.current = pyodide;
          setReady(true);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setLoadError(err instanceof Error ? err.message : 'Error desconocido al cargar Python');
          setLoading(false);
        }
      }
    }

    loadPyodide();
    return () => { cancelled = true; };
  }, []);

  const runCode = useCallback(async (code: string, mockInputs?: string[]): Promise<RunResult> => {
    const pyodide = pyodideRef.current;
    if (!pyodide) return { output: '', error: 'Pyodide no está listo todavía.' };

    let errorMsg: string | undefined;

    try {
      const setup = `
import sys, io as _io
_sys_stdout = sys.stdout
_sys_stderr = sys.stderr
sys.stdout = _io.StringIO()
sys.stderr = _io.StringIO()
`;
      if (mockInputs && mockInputs.length > 0) {
        const inputsJson = JSON.stringify(mockInputs);
        await pyodide.runPythonAsync(setup + `
import builtins
_mock_inputs = ${inputsJson}
_mock_idx = [0]
def _mock_input(prompt=""):
    val = _mock_inputs[_mock_idx[0]] if _mock_idx[0] < len(_mock_inputs) else ""
    _mock_idx[0] += 1
    if prompt:
        print(prompt, end="")
    print(val)
    return val
builtins.input = _mock_input
`);
      } else {
        await pyodide.runPythonAsync(setup + `
import builtins
def _no_input(prompt=""): return ""
builtins.input = _no_input
`);
      }

      await pyodide.runPythonAsync(code);
    } catch (err) {
      errorMsg = translateError((err as Error).message || String(err));
    }

    const getOutput = await pyodide.runPythonAsync(`
_out = sys.stdout.getvalue()
_err = sys.stderr.getvalue()
sys.stdout = _sys_stdout
sys.stderr = _sys_stderr
_out + _err
`);
    return { output: (getOutput as string || '').trimEnd(), error: errorMsg };
  }, []);

  const runWithTest = useCallback(async (userCode: string, testCode: string): Promise<RunResult> => {
    const pyodide = pyodideRef.current;
    if (!pyodide) return { output: '', error: 'Pyodide no está listo.' };

    let errorMsg: string | undefined;
    let passed = false;

    const setup = `
import sys, io as _io
_sys_stdout = sys.stdout
_sys_stderr = sys.stderr
sys.stdout = _io.StringIO()
sys.stderr = _io.StringIO()
import builtins
def _no_input(prompt=""): return ""
builtins.input = _no_input
`;

    const fullCode = setup + '\n' + userCode + '\n\n' + testCode;

    try {
      await pyodide.runPythonAsync(fullCode);
      passed = true;
    } catch (err) {
      const raw = (err as Error).message || String(err);
      if (raw.includes('AssertionError')) {
        const match = raw.match(/AssertionError:\s*(.+)/);
        errorMsg = match ? match[1].trim() : 'El código no pasó la validación.';
      } else {
        errorMsg = translateError(raw);
      }
    }

    const getOutput = await pyodide.runPythonAsync(`
_out = sys.stdout.getvalue()
_err = sys.stderr.getvalue()
sys.stdout = _sys_stdout
sys.stderr = _sys_stderr
_out + _err
`);
    return { output: (getOutput as string || '').trimEnd(), error: errorMsg, passed };
  }, []);

  return (
    <PyodideContext.Provider value={{ ready, loading, loadError, runCode, runWithTest }}>
      {children}
    </PyodideContext.Provider>
  );
}

export function usePyodide() {
  return useContext(PyodideContext);
}

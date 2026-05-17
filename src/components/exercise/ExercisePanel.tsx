import React, { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';
import type { EjercicioBanco } from '../../types';
import { PythonEditor } from '../editor/PythonEditor';
import { OutputPanel } from '../editor/OutputPanel';
import { FeedbackPanel } from '../editor/FeedbackPanel';
import { usePyodide } from '../../context/PyodideContext';

interface ExercisePanelProps {
  ejercicio: EjercicioBanco;
  onCompletado?: (primerIntento: boolean) => void;
}

export function ExercisePanel({ ejercicio, onCompletado }: ExercisePanelProps) {
  const [codigo, setCodigo] = useState(ejercicio.starter);
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState<{ correcto: boolean; mensaje: string } | null>(null);
  const [intentos, setIntentos] = useState(0);
  const { runCode, runWithTest, ready } = usePyodide();

  function reset() {
    setCodigo(ejercicio.starter);
    setOutput('');
    setError(undefined);
    setResultado(null);
    setIntentos(0);
  }

  async function evaluar() {
    if (!ready) return;
    setLoading(true);
    setResultado(null);
    setOutput('');
    setError(undefined);

    const mockInputs = ejercicio.validate.type === 'python_test' ? ejercicio.validate.mockInputs : undefined;

    try {
      if (ejercicio.validate.type === 'python_test') {
        const res = await runWithTest(codigo, ejercicio.validate.test);
        setOutput(res.output);
        setError(res.error);
        if (res.passed) {
          setResultado({ correcto: true, mensaje: '¡Correcto! Tu código pasó la validación.' });
          onCompletado?.(intentos === 0);
        } else if (res.error) {
          setResultado({ correcto: false, mensaje: res.error });
        }
      } else {
        const res = await runCode(codigo, mockInputs);
        setOutput(res.output);
        setError(res.error);

        if (res.error) {
          setResultado({ correcto: false, mensaje: res.error });
        } else {
          const valido = validarSalida(res.output);
          if (valido) {
            setResultado({ correcto: true, mensaje: '¡Correcto! Tu salida coincide con lo esperado.' });
            onCompletado?.(intentos === 0);
          } else {
            setResultado({ correcto: false, mensaje: 'La salida no coincide con lo esperado.' });
          }
        }
      }
    } catch {
      setError('Error al ejecutar el código');
    }

    setLoading(false);
    setIntentos(p => p + 1);
  }

  function validarSalida(output: string): boolean {
    const v = ejercicio.validate;
    switch (v.type) {
      case 'output':
        return output === v.expected;
      case 'contains':
        return v.strings.every(s => output.includes(s));
      case 'regex': {
        try {
          const flags = v.flags || '';
          const re = new RegExp(v.pattern, flags);
          return re.test(output);
        } catch {
          return false;
        }
      }
      default:
        return false;
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-2">
          <h3 className="font-semibold text-gray-900 dark:text-white">{ejercicio.titulo}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{ejercicio.descripcion}</p>
        </div>
      </div>

      <PythonEditor value={codigo} onChange={setCodigo} onExecute={evaluar} />

      <div className="flex items-center gap-2">
        <button
          onClick={evaluar}
          disabled={loading || !ready}
          className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg text-sm font-medium transition-colors"
        >
          {loading ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Play size={14} />}
          Ejecutar
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-sm transition-colors"
        >
          <RotateCcw size={14} />
          Reiniciar
        </button>
      </div>

      <OutputPanel output={output} error={error} loading={loading} />

      <FeedbackPanel
        correcto={resultado?.correcto ?? null}
        mensaje={resultado?.mensaje ?? ''}
        pistas={ejercicio.pistas}
        solucion={ejercicio.starter !== codigo ? codigo : undefined}
        intentos={intentos}
      />
    </div>
  );
}

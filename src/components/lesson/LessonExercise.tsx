import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle, XCircle, Lightbulb, ChevronDown, ChevronUp, Eye } from 'lucide-react';
import type { EjercicioLeccion } from '../../types';
import { PythonEditor } from '../editor/PythonEditor';
import { OutputPanel } from '../editor/OutputPanel';
import { usePyodide } from '../../context/PyodideContext';

interface LessonExerciseProps {
  ejercicio: EjercicioLeccion;
  onCompletado?: (primerIntento: boolean, sinPistas: boolean) => void;
}

export function LessonExercise({ ejercicio, onCompletado }: LessonExerciseProps) {
  const [codigo, setCodigo] = useState(ejercicio.starter);
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState<{ correcto: boolean; mensaje: string } | null>(null);
  const [intentos, setIntentos] = useState(0);
  const [pistaVisible, setPistaVisible] = useState(false);
  const [solucionVisible, setSolucionVisible] = useState(false);
  const { runCode, runWithTest, ready } = usePyodide();

  function reset() {
    setCodigo(ejercicio.starter);
    setOutput('');
    setError(undefined);
    setResultado(null);
    setIntentos(0);
    setPistaVisible(false);
    setSolucionVisible(false);
  }

  async function evaluar() {
    if (!ready) return;
    setLoading(true);
    setResultado(null);

    try {
      if (ejercicio.validate.type === 'python_test') {
        const res = await runWithTest(codigo, ejercicio.validate.test);
        setOutput(res.output);
        setError(res.error);
        if (res.passed) {
          setResultado({ correcto: true, mensaje: '¡Correcto!' });
          onCompletado?.(intentos === 0, !pistaVisible);
        } else if (res.error) {
          setResultado({ correcto: false, mensaje: res.error });
        }
      } else {
        const res = await runCode(codigo, undefined);
        setOutput(res.output);
        setError(res.error);
        if (res.error) {
          setResultado({ correcto: false, mensaje: res.error });
        } else {
          const valido = validarSalida(res.output);
          if (valido) {
            setResultado({ correcto: true, mensaje: '¡Correcto!' });
            onCompletado?.(intentos === 0, !pistaVisible);
          } else {
            setResultado({ correcto: false, mensaje: 'La salida no coincide.' });
          }
        }
      }
    } catch {
      setError('Error al ejecutar');
    }

    setLoading(false);
    setIntentos(p => p + 1);
  }

  function validarSalida(output: string): boolean {
    const v = ejercicio.validate;
    switch (v.type) {
      case 'output': return output === v.expected;
      case 'contains': return v.strings.every(s => output.includes(s));
      case 'regex': {
        try { return new RegExp(v.pattern, v.flags).test(output); } catch { return false; }
      }
      default: return false;
    }
  }

  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <h4 className="font-medium text-sm text-gray-900 dark:text-white">{ejercicio.titulo}</h4>
        <p className="text-xs text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{ejercicio.descripcion}</p>
      </div>

      <PythonEditor value={codigo} onChange={setCodigo} onExecute={evaluar} />

      <div className="flex items-center gap-2">
        <button
          onClick={evaluar}
          disabled={loading || !ready}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg text-xs font-medium transition-colors"
        >
          {loading ? <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Play size={12} />}
          Ejecutar
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-2 py-1.5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-xs transition-colors"
        >
          <RotateCcw size={12} />
          Reiniciar
        </button>
      </div>

      <OutputPanel output={output} error={error} loading={loading} />

      {resultado && (
        <div className={`flex items-start gap-2 p-3 rounded-lg ${
          resultado.correcto
            ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
            : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
        }`}>
          {resultado.correcto
            ? <CheckCircle size={16} className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
            : <XCircle size={16} className="text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
          }
          <div className="flex-1">
            <p className={`text-xs ${resultado.correcto ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
              {resultado.mensaje}
            </p>

            {!resultado.correcto && (
              <div className="mt-2 space-y-2">
                {ejercicio.pistas.length > 0 && (
                  <div>
                    <button
                      onClick={() => setPistaVisible(p => !p)}
                      className="flex items-center gap-1 text-xs text-yellow-700 dark:text-yellow-300 hover:text-yellow-800"
                    >
                      <Lightbulb size={12} />
                      {pistaVisible ? 'Ocultar pista' : 'Mostrar pista'}
                      {pistaVisible ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                    </button>
                    {pistaVisible && (
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 font-mono">{ejercicio.pistas[0]}</p>
                    )}
                  </div>
                )}

                {intentos >= 2 && (
                  <div>
                    <button
                      onClick={() => setSolucionVisible(p => !p)}
                      className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-800"
                    >
                      <Eye size={12} />
                      {solucionVisible ? 'Ocultar solución' : 'Ver solución'}
                    </button>
                    {solucionVisible && (
                      <PythonEditor value={ejercicio.solucionOficial} readOnly minHeight="auto" />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

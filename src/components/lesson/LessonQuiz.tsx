import React, { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import type { PreguntaQuiz } from '../../types';

interface LessonQuizProps {
  preguntas: PreguntaQuiz[];
  onCompletado?: (puntuacion: number) => void;
}

export function LessonQuiz({ preguntas, onCompletado }: LessonQuizProps) {
  const [respuestas, setRespuestas] = useState<Record<string, number | null>>({});
  const [enviado, setEnviado] = useState(false);

  function seleccionar(preguntaId: string, idx: number) {
    if (enviado) return;
    setRespuestas(p => ({ ...p, [preguntaId]: idx }));
  }

  function enviar() {
    if (enviado) return;
    setEnviado(true);
    const correctas = preguntas.filter(q => respuestas[q.id] === q.correcta).length;
    const puntuacion = Math.round((correctas / preguntas.length) * 100);
    onCompletado?.(puntuacion);
  }

  const todasRespondidas = preguntas.every(q => respuestas[q.id] !== undefined);

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900 dark:text-white">Cuestionario</h3>

      {preguntas.map((q, qi) => {
        const seleccionada = respuestas[q.id];
        const esCorrecta = enviado && seleccionada === q.correcta;
        const esIncorrecta = enviado && seleccionada !== undefined && seleccionada !== q.correcta;

        return (
          <div key={q.id} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              {qi + 1}. {q.pregunta}
            </p>

            <div className="space-y-2">
              {q.opciones.map((opcion, oi) => {
                const seleccion = seleccionada === oi;
                const correcta = q.correcta === oi;

                let clase = 'border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800';
                if (enviado) {
                  if (correcta) clase = 'border-green-400 dark:border-green-600 bg-green-50 dark:bg-green-900/20';
                  else if (seleccion && !correcta) clase = 'border-red-400 dark:border-red-600 bg-red-50 dark:bg-red-900/20';
                  else clase = 'border-gray-200 dark:border-gray-700 opacity-60';
                } else if (seleccion) {
                  clase = 'border-blue-400 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20';
                }

                return (
                  <button
                    key={oi}
                    onClick={() => seleccionar(q.id, oi)}
                    disabled={enviado}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border text-left text-sm transition-colors ${clase}`}
                  >
                    <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs flex-shrink-0 ${
                      enviado && correcta
                        ? 'border-green-500 text-green-500'
                        : enviado && seleccion && !correcta
                        ? 'border-red-500 text-red-500'
                        : seleccion
                        ? 'border-blue-500 text-blue-500'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}>
                      {enviado && correcta ? '✓' : enviado && seleccion && !correcta ? '✗' : ''}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{opcion}</span>
                  </button>
                );
              })}
            </div>

            {enviado && (
              <div className="mt-3 flex items-start gap-2 text-xs">
                {esCorrecta ? (
                  <>
                    <CheckCircle size={12} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-green-700 dark:text-green-300">{q.explicacion}</span>
                  </>
                ) : esIncorrecta ? (
                  <>
                    <XCircle size={12} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-red-700 dark:text-red-300">{q.explicacion}</span>
                  </>
                ) : null}
              </div>
            )}
          </div>
        );
      })}

      {!enviado && (
        <button
          onClick={enviar}
          disabled={!todasRespondidas}
          className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg text-sm font-medium transition-colors"
        >
          Enviar respuestas
          <ArrowRight size={14} />
        </button>
      )}

      {enviado && (
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-center">
          <p className="text-lg font-bold text-blue-800 dark:text-blue-200">
            {preguntas.filter(q => respuestas[q.id] === q.correcta).length} / {preguntas.length} correctas
          </p>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Lightbulb, AlertTriangle, Info, BookOpen, CheckCircle } from 'lucide-react';
import type { SeccionContenido } from '../../types';
import { PythonEditor } from '../editor/PythonEditor';

interface LessonContentProps {
  secciones: SeccionContenido[];
  onTerminar?: () => void;
}

export function LessonContent({ secciones, onTerminar }: LessonContentProps) {
  const [slide, setSlide] = useState(0);
  const [visible, setVisible] = useState(true);

  const total = secciones.length;
  const esUltimo = slide === total - 1;

  const irA = useCallback((idx: number) => {
    if (idx < 0 || idx >= total) return;
    setVisible(false);
    setTimeout(() => {
      setSlide(idx);
      setVisible(true);
    }, 150);
  }, [total]);

  const siguiente = useCallback(() => irA(slide + 1), [irA, slide]);
  const anterior = useCallback(() => irA(slide - 1), [irA, slide]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') siguiente();
      if (e.key === 'ArrowLeft') anterior();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [siguiente, anterior]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 flex-shrink-0 pb-4">
        <div className="flex-1 flex gap-1">
          {secciones.map((_, i) => (
            <button
              key={i}
              onClick={() => irA(i)}
              className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                i < slide ? 'bg-blue-500' : i === slide ? 'bg-blue-400' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
        <span className="text-xs tabular-nums text-gray-500 dark:text-gray-400">{slide + 1} / {total}</span>
      </div>

      <div
        className="min-h-[220px] max-h-[55vh] overflow-y-auto transition-opacity duration-150"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {renderSeccion(secciones[slide])}
      </div>

      <div className="flex-shrink-0 flex items-center justify-between pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={anterior}
          disabled={slide === 0}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 disabled:opacity-30 transition-colors"
        >
          <ChevronLeft size={14} />
          Anterior
        </button>

        {esUltimo ? (
          <button
            onClick={onTerminar}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Continuar
            <ChevronRight size={14} />
          </button>
        ) : (
          <button
            onClick={siguiente}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            Siguiente
            <ChevronRight size={14} />
          </button>
        )}
      </div>
    </div>
  );
}

function renderSeccion(seccion: SeccionContenido) {
  switch (seccion.tipo) {
    case 'introduccion':
      return (
        <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800">
          <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">{renderTexto(seccion.texto)}</p>
        </div>
      );

    case 'explicacion':
      return (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <BookOpen size={12} className="text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white text-base">{seccion.titulo}</h3>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">{renderTexto(seccion.texto)}</p>
        </div>
      );

    case 'analogia':
      return (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
          <span className="text-2xl flex-shrink-0">{seccion.icono}</span>
          <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{seccion.texto}</p>
        </div>
      );

    case 'ejemplo':
      return (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <CheckCircle size={12} className="text-green-600 dark:text-green-400" />
            </div>
            <h4 className="font-semibold text-sm text-gray-900 dark:text-white">{seccion.titulo}</h4>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">{seccion.descripcion}</p>
          <PythonEditor value={seccion.codigo} readOnly minHeight="auto" />
        </div>
      );

    case 'tabla-visual':
      return (
        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-gray-900 dark:text-white">{seccion.titulo}</h4>
          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  {seccion.cabeceras.map((c, j) => (
                    <th key={j} className="px-3 py-2 text-left font-medium text-gray-700 dark:text-gray-300 text-xs">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {seccion.filas.map((fila, j) => (
                  <tr key={j} className={`border-t border-gray-100 dark:border-gray-800 ${j % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}`}>
                    {fila.map((celda, k) => (
                      <td key={k} className="px-3 py-2 text-gray-600 dark:text-gray-400 text-xs">{String(celda)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case 'error-comun':
      return (
        <div className="rounded-lg overflow-hidden border border-red-200 dark:border-red-800">
          <div className="flex items-center gap-2 px-3 py-2 bg-red-50 dark:bg-red-900/20">
            <AlertTriangle size={14} className="text-red-500" />
            <span className="font-medium text-sm text-red-700 dark:text-red-300">{seccion.titulo}</span>
          </div>
          <div className="p-3 space-y-2">
            <p className="text-xs text-red-600 dark:text-red-400 font-medium">Codigo incorrecto:</p>
            <PythonEditor value={seccion.codigoMal} readOnly minHeight="auto" />
            <p className="text-xs text-gray-600 dark:text-gray-400">{seccion.problema}</p>
            <p className="text-xs text-green-600 dark:text-green-400 font-medium">Codigo correcto:</p>
            <PythonEditor value={seccion.codigoBien} readOnly minHeight="auto" />
            <p className="text-xs text-gray-600 dark:text-gray-400">{seccion.solucion}</p>
          </div>
        </div>
      );

    case 'resumen':
      return (
        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <CheckCircle size={12} className="text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="font-semibold text-sm text-gray-900 dark:text-white">Resumen</span>
          </div>
          <ul className="space-y-2">
            {seccion.puntos.map((p, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircle size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{renderTexto(p)}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'nota':
      return (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <Info size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{seccion.texto}</p>
        </div>
      );

    case 'advertencia':
      return (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
          <AlertTriangle size={16} className="text-yellow-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-yellow-800 dark:text-yellow-200">{seccion.texto}</p>
        </div>
      );

    case 'codigo':
      return (
        <div className="space-y-1">
          {seccion.lenguaje && (
            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">{seccion.lenguaje}</span>
          )}
          <PythonEditor value={seccion.codigo} readOnly minHeight="auto" />
        </div>
      );

    case 'separador':
      return <div className="border-t border-gray-200 dark:border-gray-700 my-2" />;

    default:
      return null;
  }
}

function renderTexto(texto: string): React.ReactNode {
  const parts = texto.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-blue-600 dark:text-blue-400 text-xs font-mono">{part.slice(1, -1)}</code>;
    }
    const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((bp, j) => {
      if (bp.startsWith('**') && bp.endsWith('**')) {
        return <strong key={`${i}-${j}`} className="font-semibold">{bp.slice(2, -2)}</strong>;
      }
      return bp;
    });
  });
}

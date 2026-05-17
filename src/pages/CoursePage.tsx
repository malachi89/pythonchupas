import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, Circle, Lock, BookOpen } from 'lucide-react';
import type { Nivel } from '../types';
import { curriculum } from '../content/curriculum';
import { useProgress } from '../hooks/useProgress';
import { ProgressBar } from '../components/ui/ProgressBar';

const NIVEL_META: Record<string, { emoji: string; color: string; bg: string; border: string }> = {
  'muy-novato': { emoji: '🐣', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800' },
  'novato': { emoji: '🐍', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800' },
  'intermedio': { emoji: '💻', color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800' },
  'avanzado': { emoji: '🔥', color: 'text-red-600 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800' },
};

export function CoursePage() {
  const { nivel } = useParams<{ nivel: string }>();
  const nivelCurso = curriculum.find(n => n.id === nivel);
  const { progress, getPorcentajeNivel, estaDesbloqueado } = useProgress();

  if (!nivelCurso || !nivel) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">Nivel no encontrado.</p>
        <Link to="/" className="text-blue-600 hover:underline text-sm mt-2 inline-block">Volver al inicio</Link>
      </div>
    );
  }

  const meta = NIVEL_META[nivel] || NIVEL_META['muy-novato'];
  const desbloqueado = estaDesbloqueado(nivel as Nivel);
  const leccionIds = nivelCurso.modulos.flatMap(m => m.lecciones.map(l => l.id));
  const total = leccionIds.length;

  if (!desbloqueado && nivel !== 'muy-novato') {
    const prev = { 'novato': 'muy-novato', 'intermedio': 'novato', 'avanzado': 'intermedio' }[nivel];
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <Lock size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Nivel bloqueado</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Completa el nivel anterior para desbloquear este nivel.
        </p>
        {prev && <Link to={`/curso/${prev}`} className="text-blue-600 hover:underline text-sm">Ir al nivel {prev}</Link>}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link to="/" className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
        <ArrowLeft size={14} />
        Volver
      </Link>

      <div className={`flex items-center gap-4 p-4 rounded-xl ${meta.bg} ${meta.border} border`}>
        <span className="text-3xl">{meta.emoji}</span>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">{nivelCurso.titulo}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">{nivelCurso.descripcion}</p>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900 dark:text-white">{getPorcentajeNivel(nivel as Nivel, total, leccionIds)}%</div>
          <ProgressBar value={getPorcentajeNivel(nivel as Nivel, total, leccionIds)} colorClass={meta.color.replace('text-', 'bg-')} className="w-24 mt-1" />
        </div>
      </div>

      <div className="space-y-4">
        {nivelCurso.modulos.map(modulo => (
          <div key={modulo.id} className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800">
              <h2 className="font-semibold text-gray-900 dark:text-white">{modulo.titulo}</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{modulo.descripcion}</p>
            </div>

            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {modulo.lecciones.map(leccion => {
                const completada = progress.lecciones[leccion.id]?.completada;
                return (
                  <Link
                    key={leccion.id}
                    to={`/leccion/${nivel}/${modulo.id}/${leccion.id}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    {completada
                      ? <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      : <Circle size={16} className="text-gray-300 dark:text-gray-600 flex-shrink-0" />
                    }
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium text-gray-900 dark:text-white truncate block">{leccion.titulo}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{leccion.duracionMinutos} min</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <BookOpen size={12} />
                      {leccion.ejercicios.length} ejercicios
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

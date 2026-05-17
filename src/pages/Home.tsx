import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Dumbbell, LayoutDashboard, Zap, Code2, Trophy } from 'lucide-react';
import { curriculum } from '../content/curriculum';
import { useProgress } from '../hooks/useProgress';
import { getNivelEstudiante } from '../utils/gamification';
import { ProgressBar } from '../components/ui/ProgressBar';
import { XpBar } from '../components/progress/XpBar';
import { StreakBadge } from '../components/progress/StreakBadge';

const NIVEL_ESTILOS: Record<string, { color: string; bg: string; border: string; hover: string }> = {
  'muy-novato': { color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800', hover: 'hover:bg-blue-100 dark:hover:bg-blue-900/40' },
  'novato': { color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800', hover: 'hover:bg-green-100 dark:hover:bg-green-900/40' },
  'intermedio': { color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800', hover: 'hover:bg-orange-100 dark:hover:bg-orange-900/40' },
  'avanzado': { color: 'text-red-600 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800', hover: 'hover:bg-red-100 dark:hover:bg-red-900/40' },
};

export function Home() {
  const { progress, getPorcentajeNivel, estaDesbloqueado } = useProgress();
  const nivelEst = getNivelEstudiante(progress.xpTotal);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">PythonChupas</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Aprende Python desde cero, a tu ritmo</p>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <XpBar xpTotal={progress.xpTotal} />
          <StreakBadge racha={progress.racha} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Link
          to="/curso/muy-novato"
          className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all"
        >
          <BookOpen size={20} />
          <div>
            <div className="font-semibold text-sm">Ir al curso</div>
            <div className="text-xs text-blue-100">Lecciones paso a paso</div>
          </div>
          <ArrowRight size={16} className="ml-auto" />
        </Link>

        <Link
          to="/ejercicios"
          className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 transition-all"
        >
          <Dumbbell size={20} />
          <div>
            <div className="font-semibold text-sm">Banco de ejercicios</div>
            <div className="text-xs text-orange-100">400 problemas</div>
          </div>
          <ArrowRight size={16} className="ml-auto" />
        </Link>

        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all"
        >
          <LayoutDashboard size={20} />
          <div>
            <div className="font-semibold text-sm">Mi progreso</div>
            <div className="text-xs text-purple-100">Estadísticas</div>
          </div>
          <ArrowRight size={16} className="ml-auto" />
        </Link>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Zap size={16} className="text-yellow-500" />
          <h2 className="font-semibold text-gray-900 dark:text-white">Tu nivel: {nivelEst.titulo}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {curriculum.map(nivel => {
            const desbloqueado = estaDesbloqueado(nivel.id);
            const leccionIds = nivel.modulos.flatMap(m => m.lecciones.map(l => l.id));
            const totalLecciones = leccionIds.length;
            const pct = getPorcentajeNivel(nivel.id, totalLecciones, leccionIds);
            const estilos = NIVEL_ESTILOS[nivel.id] || NIVEL_ESTILOS['muy-novato'];

            return (
              <Link
                key={nivel.id}
                to={`/curso/${nivel.id}`}
                className={`p-4 rounded-xl border ${estilos.border} ${desbloqueado ? estilos.bg + ' ' + estilos.hover : 'opacity-60 bg-gray-50 dark:bg-gray-900'} transition-colors`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{nivel.emoji}</span>
                    <span className={`font-semibold text-sm ${estilos.color}`}>{nivel.titulo}</span>
                  </div>
                  {!desbloqueado && (
                    <span className="text-xs text-gray-400">🔒 Bloqueado</span>
                  )}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">{nivel.descripcion}</p>
                <div className="flex items-center gap-2">
                  <ProgressBar value={desbloqueado ? pct : 0} colorClass={estilos.color.replace('text-', 'bg-')} className="flex-1" />
                  <span className={`text-xs font-medium ${estilos.color}`}>{desbloqueado ? `${pct}%` : '—'}</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {nivel.modulos.length} módulos · {totalLecciones} lecciones
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-800">
        <div className="flex items-center gap-2 mb-2">
          <Trophy size={16} className="text-yellow-500" />
          <h2 className="font-semibold text-yellow-800 dark:text-yellow-200 text-sm">Gamificación PythonChupas</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="text-center p-2 rounded-lg bg-white dark:bg-gray-900">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{progress.xpTotal}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">XP total</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-white dark:bg-gray-900">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{progress.estadisticas.leccionesCompletadas}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Lecciones</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-white dark:bg-gray-900">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{progress.estadisticas.ejerciciosResueltos}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Ejercicios</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-white dark:bg-gray-900">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{progress.insignias.length}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Insignias</div>
          </div>
        </div>
      </div>
    </div>
  );
}

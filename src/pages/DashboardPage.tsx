import React from 'react';
import { LayoutDashboard, TrendingUp, Flame, Award, Target, Brain, BookOpen, Zap, Medal } from 'lucide-react';
import { curriculum } from '../content/curriculum';
import { useProgress } from '../hooks/useProgress';
import { getNivelEstudiante } from '../utils/gamification';
import { INSIGNIAS } from '../content/insignias';
import { XpBar } from '../components/progress/XpBar';
import { StreakBadge } from '../components/progress/StreakBadge';
import { ProgressBar } from '../components/ui/ProgressBar';

export function DashboardPage() {
  const { progress, getPorcentajeNivel } = useProgress();
  const nivelEst = getNivelEstudiante(progress.xpTotal);
  const xpSiguiente = nivelEst.xpSiguiente;

  const NIVEL_COLORES: Record<string, string> = {
    'muy-novato': 'bg-blue-500',
    'novato': 'bg-green-500',
    'intermedio': 'bg-orange-500',
    'avanzado': 'bg-red-500',
  };

  const insigniasDesbloqueadas = INSIGNIAS.filter(i => progress.insignias.includes(i.id));
  const insigniasBloqueadas = INSIGNIAS.filter(i => !progress.insignias.includes(i.id));

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
          <LayoutDashboard size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Mi Progreso</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Estadísticas y logros en PythonChupas</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={16} />
            <span className="text-xs font-medium opacity-80">XP Total</span>
          </div>
          <div className="text-2xl font-bold">{progress.xpTotal}</div>
          <div className="text-xs opacity-80 mt-1">Siguiente: {xpSiguiente} XP</div>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={16} />
            <span className="text-xs font-medium opacity-80">Nivel</span>
          </div>
          <div className="text-2xl font-bold">{nivelEst.titulo}</div>
          <div className="text-xs opacity-80 mt-1">{nivelEst.progreso}% al siguiente</div>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Flame size={16} />
            <span className="text-xs font-medium opacity-80">Racha</span>
          </div>
          <div className="text-2xl font-bold">{progress.racha} días</div>
          <div className="text-xs opacity-80 mt-1">Máxima motivación</div>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Medal size={16} />
            <span className="text-xs font-medium opacity-80">Insignias</span>
          </div>
          <div className="text-2xl font-bold">{progress.insignias.length}/{INSIGNIAS.length}</div>
          <div className="text-xs opacity-80 mt-1">Logros desbloqueados</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Target size={16} className="text-gray-500" />
            Progreso por nivel
          </h2>

          <div className="space-y-3">
            {curriculum.map(nivel => {
              const leccionIds = nivel.modulos.flatMap(m => m.lecciones.map(l => l.id));
              const total = leccionIds.length;
              const pct = getPorcentajeNivel(nivel.id, total, leccionIds);
              return (
                <div key={nivel.id} className="flex items-center gap-3">
                  <span className="text-lg flex-shrink-0">{nivel.emoji}</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{nivel.titulo}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{pct}%</span>
                    </div>
                    <ProgressBar value={pct} colorClass={NIVEL_COLORES[nivel.id] || 'bg-blue-500'} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <BookOpen size={16} className="text-gray-500" />
            Estadísticas
          </h2>

          <div className="space-y-3">
            {[
              { label: 'Lecciones completadas', value: progress.estadisticas.leccionesCompletadas, icono: <BookOpen size={14} />, color: 'text-blue-600 dark:text-blue-400' },
              { label: 'Ejercicios resueltos', value: progress.estadisticas.ejerciciosResueltos, icono: <Target size={14} />, color: 'text-green-600 dark:text-green-400' },
              { label: 'Al primer intento', value: progress.estadisticas.ejerciciosPrimerIntento, icono: <Zap size={14} />, color: 'text-yellow-600 dark:text-yellow-400' },
              { label: 'Sin pistas', value: progress.estadisticas.ejerciciosSinPistas, icono: <Brain size={14} />, color: 'text-purple-600 dark:text-purple-400' },
            ].map(stat => (
              <div key={stat.label} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center gap-2">
                  <span className={stat.color}>{stat.icono}</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{stat.label}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <Award size={16} className="text-gray-500" />
          Insignias
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {insigniasDesbloqueadas.map(insignia => (
            <div key={insignia.id} className="p-3 rounded-xl bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 border border-yellow-200 dark:border-yellow-800 text-center">
              <div className="text-2xl mb-1">{insignia.icono}</div>
              <div className="font-semibold text-xs text-gray-900 dark:text-white">{insignia.nombre}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{insignia.descripcion}</div>
            </div>
          ))}

          {insigniasBloqueadas.map(insignia => (
            <div key={insignia.id} className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center opacity-50">
              <div className="text-2xl mb-1 grayscale">🔒</div>
              <div className="font-semibold text-xs text-gray-500 dark:text-gray-400">{insignia.nombre}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{insignia.condicion}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

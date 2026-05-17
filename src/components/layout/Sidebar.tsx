import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, CheckCircle, Circle, Lock } from 'lucide-react';
import type { NivelCurso } from '../../types';
import { useProgress } from '../../hooks/useProgress';
import { ProgressBar } from '../ui/ProgressBar';

interface SidebarProps {
  curriculum: NivelCurso[];
  abierto: boolean;
}

const NIVEL_COLOR: Record<string, string> = {
  'muy-novato': 'text-blue-600 dark:text-blue-400',
  'novato': 'text-green-600 dark:text-green-400',
  'intermedio': 'text-orange-600 dark:text-orange-400',
  'avanzado': 'text-red-600 dark:text-red-400',
};

const NIVEL_BAR: Record<string, string> = {
  'muy-novato': 'bg-blue-500',
  'novato': 'bg-green-500',
  'intermedio': 'bg-orange-500',
  'avanzado': 'bg-red-500',
};

export function Sidebar({ curriculum, abierto }: SidebarProps) {
  const { progress, getPorcentajeNivel, estaDesbloqueado } = useProgress();
  const location = useLocation();
  const [expandedNivel, setExpandedNivel] = useState<string | null>('muy-novato');
  const [expandedModulo, setExpandedModulo] = useState<string | null>(null);

  if (!abierto) return null;

  return (
    <aside className="w-72 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-y-auto">
      <div className="p-3 space-y-1">
        {curriculum.map(nivel => {
          const desbloqueado = estaDesbloqueado(nivel.id);
          const leccionIds = nivel.modulos.flatMap(m => m.lecciones.map(l => l.id));
          const totalLecciones = leccionIds.length;
          const pct = getPorcentajeNivel(nivel.id, totalLecciones, leccionIds);
          const expandido = expandedNivel === nivel.id;

          return (
            <div key={nivel.id} className="rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
              <button
                onClick={() => setExpandedNivel(expandido ? null : nivel.id)}
                disabled={!desbloqueado}
                className={`w-full flex items-center gap-2 px-3 py-2.5 text-left transition-colors ${
                  desbloqueado
                    ? 'hover:bg-gray-50 dark:hover:bg-gray-900'
                    : 'opacity-50 cursor-not-allowed'
                }`}
              >
                <span className="text-lg">{nivel.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-sm font-semibold truncate ${NIVEL_COLOR[nivel.id]}`}>
                      {nivel.titulo}
                    </span>
                    {desbloqueado ? (
                      expandido ? <ChevronDown size={14} className="text-gray-400 flex-shrink-0" /> : <ChevronRight size={14} className="text-gray-400 flex-shrink-0" />
                    ) : (
                      <Lock size={14} className="text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                  <ProgressBar value={pct} colorClass={NIVEL_BAR[nivel.id]} className="mt-1" />
                </div>
              </button>

              {expandido && desbloqueado && (
                <div className="bg-gray-50 dark:bg-gray-900/50">
                  {nivel.modulos.map(modulo => {
                    const modExpandido = expandedModulo === modulo.id;
                    return (
                      <div key={modulo.id}>
                        <button
                          onClick={() => setExpandedModulo(modExpandido ? null : modulo.id)}
                          className="w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          {modExpandido ? <ChevronDown size={12} className="text-gray-400 flex-shrink-0" /> : <ChevronRight size={12} className="text-gray-400 flex-shrink-0" />}
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-400 truncate">{modulo.titulo}</span>
                        </button>

                        {modExpandido && (
                          <div className="pl-6 pr-2 pb-1">
                            {modulo.lecciones.map(leccion => {
                              const completada = progress.lecciones[leccion.id]?.completada;
                              const activa = location.pathname.includes(leccion.id);
                              return (
                                <Link
                                  key={leccion.id}
                                  to={`/leccion/${nivel.id}/${modulo.id}/${leccion.id}`}
                                  className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs transition-colors mb-0.5 ${
                                    activa
                                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                  }`}
                                >
                                  {completada
                                    ? <CheckCircle size={12} className="text-green-500 flex-shrink-0" />
                                    : <Circle size={12} className="text-gray-300 dark:text-gray-600 flex-shrink-0" />
                                  }
                                  <span className="truncate">{leccion.titulo}</span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

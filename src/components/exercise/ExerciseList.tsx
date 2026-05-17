import React, { useState, useMemo } from 'react';
import { Search, Filter, CheckCircle, Circle } from 'lucide-react';
import type { EjercicioBanco, Nivel } from '../../types';
import { ExercisePanel } from './ExercisePanel';
import { useProgress } from '../../hooks/useProgress';
import { ALL_EXERCISES_BANCO } from '../../content/curriculum';

const NIVELES: { id: Nivel; label: string; emoji: string }[] = [
  { id: 'muy-novato', label: 'Muy Novato', emoji: '🐣' },
  { id: 'novato', label: 'Novato', emoji: '🐍' },
  { id: 'intermedio', label: 'Intermedio', emoji: '💻' },
  { id: 'avanzado', label: 'Avanzado', emoji: '🔥' },
];

export function ExerciseList() {
  const [busqueda, setBusqueda] = useState('');
  const [filtroNivel, setFiltroNivel] = useState<Nivel | 'todos'>('todos');
  const [ejercicioActivo, setEjercicioActivo] = useState<string | null>(null);
  const { completarEjercicioBanco, progress } = useProgress();

  const filtrados = useMemo(() => {
    let items = ALL_EXERCISES_BANCO;
    if (filtroNivel !== 'todos') {
      items = items.filter(e => e.nivel === filtroNivel);
    }
    if (busqueda) {
      const q = busqueda.toLowerCase();
      items = items.filter(e =>
        e.titulo.toLowerCase().includes(q) ||
        e.descripcion.toLowerCase().includes(q)
      );
    }
    return items;
  }, [filtroNivel, busqueda]);

  const ejercicioSeleccionado = useMemo(
    () => filtrados.find(e => e.id === ejercicioActivo) ?? null,
    [filtrados, ejercicioActivo]
  );

  function handleCompletado(ejercicioId: string, nivel: Nivel, primerIntento: boolean) {
    const xpMap: Record<Nivel, number> = { 'muy-novato': 20, 'novato': 25, 'intermedio': 30, 'avanzado': 40 };
    completarEjercicioBanco(ejercicioId, nivel, xpMap[nivel], primerIntento);
  }

  return (
    <div className="flex gap-0 -mx-4" style={{ height: 'calc(100vh - 7rem)' }}>
      <div className="w-96 flex-shrink-0 flex flex-col border-r border-gray-200 dark:border-gray-700">
        <div className="p-3 space-y-2 border-b border-gray-200 dark:border-gray-700">
          <div className="relative">
            <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
              placeholder="Buscar ejercicios..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <Filter size={12} className="text-gray-400 flex-shrink-0" />
            <div className="flex flex-wrap gap-1">
              <button
                onClick={() => setFiltroNivel('todos')}
                className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                  filtroNivel === 'todos'
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                Todos
              </button>
              {NIVELES.map(n => (
                <button
                  key={n.id}
                  onClick={() => setFiltroNivel(n.id)}
                  className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                    filtroNivel === n.id
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {n.emoji} {n.label}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xs text-gray-500 dark:text-gray-400">
            {filtrados.length} de {ALL_EXERCISES_BANCO.length}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filtrados.map(ej => {
            const activo = ejercicioActivo === ej.id;
            const completado = progress.ejerciciosBanco[ej.id];

            return (
              <button
                key={ej.id}
                onClick={() => setEjercicioActivo(ej.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-left transition-colors border-b border-gray-100 dark:border-gray-800 ${
                  activo
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-l-2 border-l-blue-500'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800/50 border-l-2 border-l-transparent'
                }`}
              >
                {completado
                  ? <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                  : <Circle size={14} className="text-gray-300 dark:text-gray-600 flex-shrink-0" />
                }
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium text-gray-900 dark:text-white truncate block">
                    {ej.titulo}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{ej.id}</span>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 flex-shrink-0">
                  {NIVELES.find(n => n.id === ej.nivel)?.emoji}
                </span>
              </button>
            );
          })}

          {filtrados.length === 0 && (
            <div className="text-center py-8 text-sm text-gray-500 dark:text-gray-400">
              No se encontraron ejercicios.
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {ejercicioSeleccionado ? (
          <ExercisePanel
            key={ejercicioSeleccionado.id}
            ejercicio={ejercicioSeleccionado}
            onCompletado={primerIntento => handleCompletado(ejercicioSeleccionado.id, ejercicioSeleccionado.nivel, primerIntento)}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-500">
            <div className="text-center">
              <p className="text-lg font-medium mb-1">Selecciona un ejercicio</p>
              <p className="text-sm">Elige de la lista de la izquierda</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

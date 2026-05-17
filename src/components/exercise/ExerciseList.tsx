import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, Filter, CheckCircle, Circle } from 'lucide-react';
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
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
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

  function handleCompletado(ejercicioId: string, nivel: Nivel, primerIntento: boolean) {
    const xpMap: Record<Nivel, number> = { 'muy-novato': 20, 'novato': 25, 'intermedio': 30, 'avanzado': 40 };
    completarEjercicioBanco(ejercicioId, nivel, xpMap[nivel], primerIntento);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            placeholder="Buscar ejercicios..."
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={() => setMostrarFiltros(p => !p)}
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
        >
          <Filter size={14} />
          Filtrar por nivel
          {mostrarFiltros ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {mostrarFiltros && (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFiltroNivel('todos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
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
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  filtroNivel === n.id
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {n.emoji} {n.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="text-xs text-gray-500 dark:text-gray-400">
        {filtrados.length} de {ALL_EXERCISES_BANCO.length} ejercicios
        {filtroNivel !== 'todos' && ` (nivel ${NIVELES.find(n => n.id === filtroNivel)?.label})`}
      </div>

      <div className="space-y-3">
        {filtrados.map(ej => {
          const activo = ejercicioActivo === ej.id;
          const completado = progress.ejerciciosBanco[ej.id];

          return (
            <div key={ej.id} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <button
                onClick={() => setEjercicioActivo(activo ? null : ej.id)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                {completado
                  ? <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                  : <Circle size={16} className="text-gray-300 dark:text-gray-600 flex-shrink-0" />
                }
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium text-gray-900 dark:text-white truncate block">
                    {ej.titulo}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{ej.id}</span>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
                  {NIVELES.find(n => n.id === ej.nivel)?.emoji}
                </span>
              </button>

              {activo && (
                <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                  <ExercisePanel
                    ejercicio={ej}
                    onCompletado={primerIntento => handleCompletado(ej.id, ej.nivel, primerIntento)}
                  />
                </div>
              )}
            </div>
          );
        })}

        {filtrados.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No se encontraron ejercicios con los filtros seleccionados.
          </div>
        )}
      </div>
    </div>
  );
}

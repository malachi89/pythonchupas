import React, { useState, useMemo } from 'react';
import { BookOpen, Code, ClipboardList, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Leccion } from '../../types';
import { LessonContent } from './LessonContent';
import { LessonExercise } from './LessonExercise';
import { LessonQuiz } from './LessonQuiz';
import { ProgressBar } from '../ui/ProgressBar';
import { useProgress } from '../../hooks/useProgress';
import { useNavigate, useParams } from 'react-router-dom';
import { curriculum } from '../../content/curriculum';

interface LessonViewProps {
  leccion: Leccion;
  nivel: string;
  moduloId: string;
}

type Pestana = 'contenido' | 'ejercicios' | 'cuestionario';

export function LessonView({ leccion, nivel, moduloId }: LessonViewProps) {
  const navigate = useNavigate();
  const { completarLeccion, completarEjercicioLeccion, progress } = useProgress();

  const [pestana, setPestana] = useState<Pestana>('contenido');
  const [ejercicioActual, setEjercicioActual] = useState(0);
  const [ejerciciosCompletados, setEjerciciosCompletados] = useState<Set<string>>(new Set());
  const [quizCompletado, setQuizCompletado] = useState(false);
  const [quizPuntuacion, setQuizPuntuacion] = useState(0);

  const nivelCurso = curriculum.find(n => n.id === nivel);
  const modulo = nivelCurso?.modulos.find(m => m.id === moduloId);
  const leccionIdx = modulo ? modulo.lecciones.findIndex(l => l.id === leccion.id) : -1;
  const leccionAnterior = modulo && leccionIdx > 0 ? modulo.lecciones[leccionIdx - 1] : null;
  const leccionSiguiente = modulo && leccionIdx >= 0 && leccionIdx < modulo.lecciones.length - 1 ? modulo.lecciones[leccionIdx + 1] : null;

  const tabs: { id: Pestana; label: string }[] = [
    { id: 'contenido', label: 'Contenido' },
    { id: 'ejercicios', label: `Ejercicios (${leccion.ejercicios.length})` },
    { id: 'cuestionario', label: 'Cuestionario' },
  ];

  const progresoLeccion = progress.lecciones[leccion.id];
  const leccionCompletada = progresoLeccion?.completada;

  const progresoPct = useMemo(() => {
    let total = leccion.ejercicios.length + 1;
    let hecho = ejerciciosCompletados.size + (quizCompletado ? 1 : 0);
    if (progresoLeccion) {
      hecho = Math.max(hecho, progresoLeccion.ejerciciosCompletados.length + (progresoLeccion.quizCompletado ? 1 : 0));
    }
    return Math.round((hecho / total) * 100);
  }, [leccion, ejerciciosCompletados, quizCompletado, progresoLeccion]);

  function handleContentTerminar() {
    if (leccion.ejercicios.length > 0) {
      setPestana('ejercicios');
    } else {
      setPestana('cuestionario');
    }
  }

  function handleEjercicioCompletado(ejercicioId: string, primerIntento: boolean, sinPistas: boolean) {
    completarEjercicioLeccion(leccion.id, ejercicioId, 15, primerIntento, sinPistas);
    setEjerciciosCompletados(p => new Set(p).add(ejercicioId));

    const todos = leccion.ejercicios.every(e => ejerciciosCompletados.has(e.id) || e.id === ejercicioId);
    if (todos && quizCompletado) {
      completarLeccion(leccion.id, 50, quizPuntuacion);
    }
  }

  function handleQuizCompletado(puntuacion: number) {
    setQuizCompletado(true);
    setQuizPuntuacion(puntuacion);
    const todos = leccion.ejercicios.every(e => ejerciciosCompletados.has(e.id));
    if (todos) {
      completarLeccion(leccion.id, 50, puntuacion);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-bold text-gray-900 dark:text-white truncate">{leccion.titulo}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {leccion.descripcion}
            <span className="ml-2 text-xs text-gray-400 dark:text-gray-500">· {leccion.duracionMinutos} min</span>
          </p>
        </div>
        {leccionCompletada && (
          <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400 text-sm font-medium flex-shrink-0 ml-3">
            <CheckCircle size={16} />
            Completada
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500 dark:text-gray-400">Progreso</span>
        <div className="flex-1 max-w-xs">
          <ProgressBar value={progresoPct} colorClass="bg-blue-500" />
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400">{progresoPct}%</span>
      </div>

      {leccion.conceptosClave.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {leccion.conceptosClave.map((c, i) => (
            <span key={i} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-600 dark:text-gray-400 font-mono">{c}</span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-1 border-b border-gray-200 dark:border-gray-700">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setPestana(t.id)}
            className={`flex items-center gap-1.5 px-3 py-2 text-sm border-b-2 transition-colors ${
              pestana === t.id
                ? 'border-blue-500 text-blue-700 dark:text-blue-300 font-medium'
                : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
          >
            {t.id === 'contenido' && <BookOpen size={14} />}
            {t.id === 'ejercicios' && <Code size={14} />}
            {t.id === 'cuestionario' && <ClipboardList size={14} />}
            {t.label}
          </button>
        ))}
      </div>

      {pestana === 'contenido' && (
        <LessonContent secciones={leccion.contenido} onTerminar={handleContentTerminar} />
      )}

      {pestana === 'ejercicios' && (
        <div className="flex flex-col">
          {leccion.ejercicios.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-8">Esta leccion no tiene ejercicios.</p>
          ) : (() => {
            const ej = leccion.ejercicios[ejercicioActual];
            const total = leccion.ejercicios.length;
            const esUltimo = ejercicioActual === total - 1;
            const completado = ejerciciosCompletados.has(ej.id) || progresoLeccion?.ejerciciosCompletados.includes(ej.id);
            return (
              <>
                <div className="flex items-center gap-3 pb-4 flex-shrink-0">
                  <div className="flex-1 flex gap-1">
                    {leccion.ejercicios.map((e, i) => {
                      const hecho = ejerciciosCompletados.has(e.id) || progresoLeccion?.ejerciciosCompletados.includes(e.id);
                      return (
                        <button
                          key={e.id}
                          onClick={() => setEjercicioActual(i)}
                          className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                            hecho ? 'bg-green-500' : i === ejercicioActual ? 'bg-blue-400' : 'bg-gray-200 dark:bg-gray-700'
                          }`}
                        />
                      );
                    })}
                  </div>
                  <span className="text-xs tabular-nums text-gray-500 dark:text-gray-400">{ejercicioActual + 1} / {total}</span>
                </div>

                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Ejercicio {ejercicioActual + 1}</span>
                    {completado && <CheckCircle size={14} className="text-green-500" />}
                  </div>
                  <LessonExercise
                    key={ej.id}
                    ejercicio={ej}
                    onCompletado={(p, s) => handleEjercicioCompletado(ej.id, p, s)}
                  />
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
                  <button
                    onClick={() => setEjercicioActual(i => i - 1)}
                    disabled={ejercicioActual === 0}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 disabled:opacity-30 transition-colors"
                  >
                    <ChevronLeft size={14} />
                    Anterior
                  </button>
                  {esUltimo ? (
                    <button
                      onClick={() => setPestana('cuestionario')}
                      className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      Ir al cuestionario
                      <ChevronRight size={14} />
                    </button>
                  ) : (
                    <button
                      onClick={() => setEjercicioActual(i => i + 1)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                    >
                      Siguiente
                      <ChevronRight size={14} />
                    </button>
                  )}
                </div>
              </>
            );
          })()}
        </div>
      )}

      {pestana === 'cuestionario' && (
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700">
          {leccion.cuestionario.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-8">Esta leccion no tiene cuestionario.</p>
          ) : (
            <LessonQuiz preguntas={leccion.cuestionario} onCompletado={handleQuizCompletado} />
          )}
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        {leccionAnterior ? (
          <button
            onClick={() => navigate(`/leccion/${nivel}/${moduloId}/${leccionAnterior.id}`)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/40 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 transition-colors max-w-[45%]"
          >
            <ChevronLeft size={14} />
            <span className="truncate">{leccionAnterior.titulo}</span>
          </button>
        ) : <div />}
        {leccionSiguiente ? (
          <button
            onClick={() => navigate(`/leccion/${nivel}/${moduloId}/${leccionSiguiente.id}`)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/40 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 transition-colors max-w-[45%]"
          >
            <span className="truncate">{leccionSiguiente.titulo}</span>
            <ChevronRight size={14} />
          </button>
        ) : <div />}
      </div>
    </div>
  );
}

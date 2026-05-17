import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { findLeccion } from '../content/curriculum';
import { LessonView } from '../components/lesson/LessonView';

export function LessonPage() {
  const { nivel, moduloId, leccionId } = useParams<{ nivel: string; moduloId: string; leccionId: string }>();
  const leccion = findLeccion(leccionId || '');

  if (!leccion || !nivel || !moduloId || !leccionId) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">Leccion no encontrada.</p>
        <Link to="/" className="text-blue-600 hover:underline text-sm mt-2 inline-block">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link to={`/curso/${nivel}`} className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors mb-4 inline-block">
        <ArrowLeft size={14} />
        Volver al curso
      </Link>
      <LessonView leccion={leccion} nivel={nivel} moduloId={moduloId} />
    </div>
  );
}

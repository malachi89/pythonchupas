import React from 'react';
import { Dumbbell } from 'lucide-react';
import { ExerciseList } from '../components/exercise/ExerciseList';

export function ExerciseBankPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
          <Dumbbell size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Banco de Ejercicios</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">400 ejercicios para practicar Python</p>
        </div>
      </div>
      <ExerciseList />
    </div>
  );
}

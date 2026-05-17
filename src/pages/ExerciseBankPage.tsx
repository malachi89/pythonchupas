import React from 'react';
import { Dumbbell } from 'lucide-react';
import { ExerciseList } from '../components/exercise/ExerciseList';

export function ExerciseBankPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 px-4">
        <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
          <Dumbbell size={18} className="text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">Banco de Ejercicios</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">400 ejercicios para practicar Python</p>
        </div>
      </div>
      <ExerciseList />
    </div>
  );
}

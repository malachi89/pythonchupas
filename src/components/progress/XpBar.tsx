import React from 'react';
import { getNivelEstudiante } from '../../utils/gamification';

interface XpBarProps {
  xpTotal: number;
  compact?: boolean;
}

export function XpBar({ xpTotal, compact = false }: XpBarProps) {
  const nivel = getNivelEstudiante(xpTotal);

  if (compact) {
    return (
      <div className="flex flex-col gap-0.5">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>{xpTotal} XP</span>
          <span>{nivel.xpSiguiente} XP</span>
        </div>
        <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: `${nivel.progreso}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-semibold text-gray-900 dark:text-white">{nivel.titulo}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{xpTotal} / {nivel.xpSiguiente} XP</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
          style={{ width: `${nivel.progreso}%` }}
        />
      </div>
    </div>
  );
}

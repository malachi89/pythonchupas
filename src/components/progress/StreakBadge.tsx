import React from 'react';
import { Flame } from 'lucide-react';

interface StreakBadgeProps {
  racha: number;
  compact?: boolean;
}

export function StreakBadge({ racha, compact = false }: StreakBadgeProps) {
  if (racha === 0) return null;

  if (compact) {
    return (
      <div className="flex items-center gap-1 text-orange-500">
        <Flame size={14} />
        <span className="text-xs font-bold">{racha}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 px-3 py-1.5 rounded-lg">
      <Flame size={16} />
      <span className="text-sm font-semibold">{racha} días de racha</span>
    </div>
  );
}

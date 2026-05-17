import React, { useEffect } from 'react';
import { Zap, Star } from 'lucide-react';
import { useProgress } from '../../hooks/useProgress';

export function ToastContainer() {
  const { toasts, dismissToast } = useProgress();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} onDismiss={() => dismissToast(toast.id)} />
      ))}
    </div>
  );
}

interface ToastProps {
  toast: { tipo: 'xp' | 'insignia' | 'nivel'; mensaje: string; xp?: number };
  onDismiss: () => void;
}

function Toast({ toast, onDismiss }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 3800);
    return () => clearTimeout(t);
  }, [onDismiss]);

  const isXp = toast.tipo === 'xp';

  return (
    <div
      onClick={onDismiss}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl cursor-pointer animate-slide-up text-sm font-medium
        ${isXp
          ? 'bg-emerald-500 text-white'
          : 'bg-yellow-400 text-yellow-900'
        }`}
    >
      {isXp ? <Zap size={16} /> : <Star size={16} />}
      <span>{toast.mensaje}</span>
      {toast.xp && <span className="ml-1 font-bold">+{toast.xp} XP</span>}
    </div>
  );
}

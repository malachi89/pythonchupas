import React, { useState } from 'react';
import { CheckCircle, XCircle, Lightbulb, ChevronDown, ChevronUp, Eye } from 'lucide-react';

interface FeedbackPanelProps {
  correcto: boolean | null;
  mensaje: string;
  pistas: string[];
  solucion?: string;
  intentos: number;
  onVerSolucion?: () => void;
}

export function FeedbackPanel({ correcto, mensaje, pistas, solucion, intentos, onVerSolucion }: FeedbackPanelProps) {
  const [pistaVisible, setPistaVisible] = useState(false);
  const [solucionVisible, setSolucionVisible] = useState(false);

  if (correcto === null) return null;

  const pistasDisponibles = Math.min(pistas.length, Math.floor(intentos / 1));
  const puedeMostrarSolucion = intentos >= 3 && solucion;

  return (
    <div className="space-y-2">
      {/* Resultado */}
      <div className={`flex items-start gap-3 p-3 rounded-lg ${
        correcto
          ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
          : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
      }`}>
        {correcto
          ? <CheckCircle size={18} className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
          : <XCircle size={18} className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
        }
        <p className={`text-sm ${correcto ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
          {mensaje}
        </p>
      </div>

      {/* Pistas */}
      {!correcto && pistasDisponibles > 0 && pistas.length > 0 && (
        <div className="border border-yellow-200 dark:border-yellow-800 rounded-lg overflow-hidden">
          <button
            onClick={() => setPistaVisible(p => !p)}
            className="w-full flex items-center justify-between px-3 py-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 text-sm"
          >
            <div className="flex items-center gap-2">
              <Lightbulb size={14} />
              <span>Pista ({pistasDisponibles} disponible{pistasDisponibles > 1 ? 's' : ''})</span>
            </div>
            {pistaVisible ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          {pistaVisible && (
            <div className="px-3 py-2 bg-white dark:bg-gray-900 space-y-1">
              {pistas.slice(0, pistasDisponibles).map((pista, i) => (
                <p key={i} className="text-sm text-gray-700 dark:text-gray-300 font-mono">{pista}</p>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Ver solución */}
      {!correcto && puedeMostrarSolucion && (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <button
            onClick={() => { setSolucionVisible(p => !p); onVerSolucion?.(); }}
            className="w-full flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <Eye size={14} />
              <span>Ver solución</span>
            </div>
            {solucionVisible ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          {solucionVisible && (
            <pre className="px-3 py-2 bg-gray-900 text-green-400 text-sm font-mono overflow-x-auto">{solucion}</pre>
          )}
        </div>
      )}
    </div>
  );
}

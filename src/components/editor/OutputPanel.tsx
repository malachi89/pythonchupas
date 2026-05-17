import React from 'react';
import { Terminal } from 'lucide-react';

interface OutputPanelProps {
  output: string;
  error?: string;
  loading?: boolean;
}

export function OutputPanel({ output, error, loading }: OutputPanelProps) {
  if (loading) {
    return (
      <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm">
        <div className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        Ejecutando...
      </div>
    );
  }

  if (!output && !error) return null;

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <Terminal size={12} className="text-gray-400" />
        <span className="text-xs text-gray-500 dark:text-gray-400">Salida</span>
      </div>
      <div className="p-3 bg-gray-900 font-mono text-sm">
        {error ? (
          <pre className="text-red-400 whitespace-pre-wrap">{error}</pre>
        ) : (
          <pre className="text-green-400 whitespace-pre-wrap">{output}</pre>
        )}
      </div>
    </div>
  );
}

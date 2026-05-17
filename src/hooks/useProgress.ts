import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export function useProgress() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useProgress must be used within AppProvider');
  return ctx;
}

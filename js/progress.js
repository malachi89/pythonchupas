/* =========================================================
   progress.js — Gestión de progreso en localStorage
   ========================================================= */

window.Progress = (function () {

  const KEY = "pythonChupas_v1";

  const LEVELS = ["muy-novato", "novato", "intermedio", "avanzado"];

  function _default() {
    return {
      completed: { "muy-novato": [], "novato": [], "intermedio": [], "avanzado": [] },
      streak:    0,
      lastDate:  null
    };
  }

  function get() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return _default();
      const parsed = JSON.parse(raw);
      // Asegurarse de que todos los niveles existen
      LEVELS.forEach(l => { if (!parsed.completed[l]) parsed.completed[l] = []; });
      return parsed;
    } catch {
      return _default();
    }
  }

  function save(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch {}
  }

  function markComplete(level, id) {
    const data = get();
    if (!data.completed[level].includes(id)) {
      data.completed[level].push(id);
      // Racha: si completó algo hoy
      const today = new Date().toISOString().slice(0, 10);
      if (data.lastDate !== today) {
        if (data.lastDate === _yesterday()) {
          data.streak = (data.streak || 0) + 1;
        } else {
          data.streak = 1;
        }
        data.lastDate = today;
      }
      save(data);
    }
    return get();
  }

  function isComplete(level, id) {
    return get().completed[level].includes(id);
  }

  function getCompletedCount(level) {
    return get().completed[level].length;
  }

  function getTotalCompleted() {
    const data = get();
    return LEVELS.reduce((sum, l) => sum + data.completed[l].length, 0);
  }

  function getStreak() {
    return get().streak || 0;
  }

  function resetLevel(level) {
    const data = get();
    data.completed[level] = [];
    save(data);
  }

  function resetAll() {
    save(_default());
  }

  function _yesterday() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().slice(0, 10);
  }

  return { get, markComplete, isComplete, getCompletedCount, getTotalCompleted, getStreak, resetLevel, resetAll, LEVELS };
})();

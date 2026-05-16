/* =========================================================
   app.js — Orquestador principal de la aplicación
   ========================================================= */

(function () {

  // ── Estado global ──────────────────────────────────────
  let currentLevel    = "muy-novato";
  let currentExercise = null;
  let allExercises    = {};   // { "muy-novato": [...], "novato": [...], ... }
  let searchQuery     = "";

  // ── Mapa de datos de ejercicios (cargados desde data/*.js) ──
  const DATA_MAP = {
    "muy-novato":  window.EXERCISES_MUY_NOVATO,
    "novato":      window.EXERCISES_NOVATO,
    "intermedio":  window.EXERCISES_INTERMEDIO,
    "avanzado":    window.EXERCISES_AVANZADO,
  };

  // ── Inicialización ──────────────────────────────────────
  async function init() {
    // Preparar los ejercicios
    Progress.LEVELS.forEach(level => {
      allExercises[level] = DATA_MAP[level] || [];
    });

    // Iniciar Pyodide
    const splashBar    = document.getElementById("splash-progress");
    const splashStatus = document.getElementById("splash-status");

    await PyodideRunner.init((msg, pct) => {
      splashStatus.textContent = msg;
      splashBar.style.width    = pct + "%";
    });

    // Ocultar splash, mostrar app
    const splash = document.getElementById("splash");
    splash.style.opacity = "0";
    setTimeout(() => { splash.style.display = "none"; }, 400);
    document.getElementById("app").classList.remove("hidden");

    // Restaurar nivel actual
    bindEvents();
    switchLevel(currentLevel);
    refreshGlobalStats();
  }

  // ── Cambiar nivel activo ───────────────────────────────
  function switchLevel(level) {
    currentLevel    = level;
    currentExercise = null;
    searchQuery     = "";

    // Tabs UI
    document.querySelectorAll(".tab").forEach(t => {
      t.classList.toggle("active", t.dataset.level === level);
    });
    document.getElementById("search-input").value = "";

    // Render lista
    UI.renderExerciseList(allExercises[level], level, null, "");

    // Barra de progreso del nivel
    const done = Progress.getCompletedCount(level);
    UI.updateLevelProgress(level, done);

    // Ocultar panel de ejercicio → mostrar welcome
    document.getElementById("exercise-panel").classList.add("hidden");
    document.getElementById("welcome").classList.remove("hidden");
  }

  // ── Seleccionar ejercicio ──────────────────────────────
  function selectExercise(id) {
    const ex = allExercises[currentLevel].find(e => e.id === id);
    if (!ex) return;
    currentExercise = ex;

    UI.renderExercise(ex, currentLevel);

    // Resaltar en sidebar
    document.querySelectorAll(".ex-item").forEach(el => {
      el.classList.toggle("active", Number(el.dataset.id) === id);
    });
  }

  // ── Ejecutar código y validar ──────────────────────────
  async function handleRun() {
    if (!currentExercise) return;
    if (!PyodideRunner.ready) {
      UI.showError("⏳ Pyodide todavía se está cargando, espera un momento.");
      return;
    }

    const btn  = document.getElementById("btn-run");
    const code = document.getElementById("code-editor").value.trim();

    if (!code) {
      UI.showError("✏️ Escribe algo de código primero.");
      return;
    }

    btn.classList.add("loading");
    btn.textContent = "⏳ Ejecutando…";
    UI.hideFeedback();

    const validate = currentExercise.validate;
    let result;

    try {
      if (validate.type === "python_test") {
        result = await PyodideRunner.runWithTest(code, validate.testCode);
      } else {
        result = await PyodideRunner.runCode(code, validate.mockInputs || null);
      }

      // Mostrar output
      if (result.error && validate.type !== "python_test") {
        UI.showOutput(result.error, true);
        UI.showError(result.error);
        UI.playSound("error");
      } else {
        const outputText = result.output || "";
        UI.showOutput(outputText, !!result.error);

        if (result.error) {
          // Error en python_test → mensaje de la aserción
          UI.showError(result.error);
          UI.playSound("error");
        } else {
          // Validar según tipo
          const ok = validate_(validate, outputText);
          if (ok.success) {
            UI.showSuccess();
            UI.playSound("success");
            UI.showConfetti();
            const data = Progress.markComplete(currentLevel, currentExercise.id);

            // Actualizar barras de progreso y sidebar
            const done = Progress.getCompletedCount(currentLevel);
            UI.updateLevelProgress(currentLevel, done);
            refreshGlobalStats();

            // Marcar como completado en sidebar
            UI.renderExerciseList(
              filterExercises(allExercises[currentLevel], searchQuery),
              currentLevel, currentExercise.id, searchQuery
            );
          } else {
            UI.showError(ok.message);
            UI.playSound("error");
          }
        }
      }
    } catch (e) {
      UI.showError("Error inesperado: " + (e.message || e));
    } finally {
      btn.classList.remove("loading");
      btn.textContent = "▶ Ejecutar";
    }
  }

  // ── Lógica de validación ──────────────────────────────
  function validate_(validate, output) {
    const type = validate.type;

    if (type === "output") {
      const success = output.trim() === String(validate.expected).trim();
      return { success, message: success ? "" : (validate.errorMsg || `Expected: ${validate.expected}`) };
    }

    if (type === "contains") {
      const expected = Array.isArray(validate.expected) ? validate.expected : [validate.expected];
      const missing  = expected.filter(s => !output.includes(String(s)));
      if (missing.length === 0) return { success: true };
      return { success: false, message: validate.errorMsg || `Falta en el output: ${missing.join(", ")}` };
    }

    if (type === "regex") {
      const rx      = new RegExp(validate.pattern, validate.flags || "");
      const success = rx.test(output.trim());
      return { success, message: success ? "" : (validate.errorMsg || "El output no coincide con el patrón esperado.") };
    }

    if (type === "python_test") {
      // ya manejado arriba (result.error)
      return { success: true };
    }

    return { success: true };
  }

  // ── Eventos ───────────────────────────────────────────
  function bindEvents() {
    // Tabs de nivel
    document.querySelectorAll(".tab").forEach(tab => {
      tab.addEventListener("click", () => switchLevel(tab.dataset.level));
    });

    // Lista de ejercicios (delegación de eventos)
    document.getElementById("exercise-list").addEventListener("click", e => {
      const item = e.target.closest(".ex-item");
      if (item) selectExercise(Number(item.dataset.id));
    });

    // Botón ejecutar
    document.getElementById("btn-run").addEventListener("click", handleRun);

    // Botón pista
    document.getElementById("btn-hint").addEventListener("click", () => {
      if (currentExercise) UI.toggleHint(currentExercise.hint);
    });

    // Botón reset
    document.getElementById("btn-reset").addEventListener("click", () => {
      if (currentExercise) {
        document.getElementById("code-editor").value = currentExercise.starter || "# Escribe tu código aquí\n";
        UI.clearOutput();
        UI.hideFeedback();
        UI.hideHint();
      }
    });

    // Botón clear output
    document.getElementById("btn-clear-output").addEventListener("click", UI.clearOutput);

    // Búsqueda
    document.getElementById("search-input").addEventListener("input", e => {
      searchQuery = e.target.value;
      UI.renderExerciseList(
        filterExercises(allExercises[currentLevel], searchQuery),
        currentLevel, currentExercise?.id, searchQuery
      );
    });

    // Tab en el editor de código → insertar 4 espacios
    document.getElementById("code-editor").addEventListener("keydown", e => {
      if (e.key === "Tab") {
        e.preventDefault();
        const ta    = e.target;
        const start = ta.selectionStart;
        const end   = ta.selectionEnd;
        ta.value = ta.value.slice(0, start) + "    " + ta.value.slice(end);
        ta.selectionStart = ta.selectionEnd = start + 4;
      }
      // Ctrl+Enter / Cmd+Enter → ejecutar
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        handleRun();
      }
    });
  }

  // ── Helpers ───────────────────────────────────────────
  function filterExercises(exercises, query) {
    if (!query.trim()) return exercises;
    const q = query.trim().toLowerCase();
    return exercises.filter(e =>
      e.title.toLowerCase().includes(q) || String(e.id).includes(q)
    );
  }

  function refreshGlobalStats() {
    const total = Progress.getTotalCompleted();
    UI.updateGlobalProgress(total);
    UI.updateStreak(Progress.getStreak());

    // Actualizar todos los badges de tabs
    Progress.LEVELS.forEach(level => {
      const done  = Progress.getCompletedCount(level);
      const badge = document.getElementById(`badge-${level}`);
      if (badge) badge.textContent = `${done}/100`;
    });
  }

  // ── Arrancar ──────────────────────────────────────────
  window.addEventListener("DOMContentLoaded", init);
})();

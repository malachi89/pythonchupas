/* =========================================================
   ui.js — Renderizado, animaciones y sonidos
   ========================================================= */

window.UI = (function () {

  // ── Mensajes motivadores (rotación aleatoria) ──
  const SUCCESS_MSGS = [
    "🔥 ¡Increíble! ¡Sigue así!",
    "💪 ¡Crack total! ¡Lo aplastaste!",
    "🐍 ¡Lo lograste! Python te teme.",
    "🧠 ¡Eres un genio! ¡Ejercicio destruido!",
    "💥 ¡BOOM! ¡Siguiente nivel desbloqueado!",
    "⚡ ¡Rápido y certero! ¡Eso es!",
    "🎯 ¡Directo al blanco! ¡Perfecto!",
    "🚀 ¡Despegando! ¡Imparable!",
    "🏆 ¡Campeón! ¡Así se hace!",
    "✨ ¡Brillante! ¡Código maestro!",
    "🎮 +100 puntos de experiencia Python",
    "🦾 ¡Máquina de programar activada!",
    "🎉 ¡Fiesta! ¡Otro ejercicio caído!",
    "👑 ¡Rey/Reina de Python! ¡Épico!",
    "🌟 ¡Estrella Python! ¡Espectacular!",
  ];

  function randomMsg() {
    return SUCCESS_MSGS[Math.floor(Math.random() * SUCCESS_MSGS.length)];
  }

  // ── Nivel → color/label ──
  const LEVEL_META = {
    "muy-novato":  { label: "Muy Novato",  cls: "badge-muy-novato",  icon: "🟢" },
    "novato":      { label: "Novato",      cls: "badge-novato",      icon: "🔵" },
    "intermedio":  { label: "Intermedio",  cls: "badge-intermedio",  icon: "🟠" },
    "avanzado":    { label: "Avanzado",    cls: "badge-avanzado",    icon: "🔴" },
  };

  // ── Grupos por nivel (para encabezados en sidebar) ──
  const GROUPS = {
    "muy-novato":  [
      { from: 1,  to: 15,  label: "print()" },
      { from: 16, to: 30,  label: "Variables" },
      { from: 31, to: 45,  label: "Strings" },
      { from: 46, to: 60,  label: "Números" },
      { from: 61, to: 75,  label: "Tipos" },
      { from: 76, to: 88,  label: "print() avanzado" },
      { from: 89, to: 100, label: "Problemas mixtos" },
    ],
    "novato": [
      { from: 1,  to: 20,  label: "if / elif / else" },
      { from: 21, to: 38,  label: "for loops" },
      { from: 39, to: 52,  label: "while loops" },
      { from: 53, to: 68,  label: "Listas" },
      { from: 69, to: 82,  label: "String methods" },
      { from: 83, to: 100, label: "Funciones" },
    ],
    "intermedio": [
      { from: 1,  to: 18,  label: "Funciones avanzadas" },
      { from: 19, to: 36,  label: "Diccionarios" },
      { from: 37, to: 52,  label: "List comprehensions" },
      { from: 53, to: 66,  label: "f-strings y format" },
      { from: 67, to: 80,  label: "Tuplas y Sets" },
      { from: 81, to: 100, label: "Try/Except y módulos" },
    ],
    "avanzado": [
      { from: 1,  to: 20,  label: "Clases y OOP" },
      { from: 21, to: 38,  label: "Algoritmos" },
      { from: 39, to: 52,  label: "Generators" },
      { from: 53, to: 66,  label: "Decoradores" },
      { from: 67, to: 80,  label: "Estructuras de datos" },
      { from: 81, to: 100, label: "Retos algorítmicos" },
    ],
  };

  // ── Renderizar lista de ejercicios en sidebar ──
  function renderExerciseList(exercises, level, currentId, searchQuery = "") {
    const container = document.getElementById("exercise-list");
    container.innerHTML = "";

    const query = searchQuery.trim().toLowerCase();
    const filtered = query
      ? exercises.filter(e => e.title.toLowerCase().includes(query) || String(e.id).includes(query))
      : exercises;

    if (filtered.length === 0) {
      container.innerHTML = `<div style="padding:16px;color:var(--text-muted);font-size:13px;text-align:center">Sin resultados</div>`;
      return;
    }

    const groups = query ? null : GROUPS[level];

    let currentGroupIdx = -1;

    filtered.forEach(ex => {
      // Encabezado de grupo
      if (groups && !query) {
        const gIdx = groups.findIndex(g => ex.id >= g.from && ex.id <= g.to);
        if (gIdx !== currentGroupIdx) {
          currentGroupIdx = gIdx;
          if (gIdx >= 0) {
            const lbl = document.createElement("div");
            lbl.className = "ex-group-label";
            lbl.textContent = groups[gIdx].label;
            container.appendChild(lbl);
          }
        }
      }

      const done = Progress.isComplete(level, ex.id);
      const active = ex.id === currentId;

      const item = document.createElement("div");
      item.className = `ex-item${done ? " done" : ""}${active ? " active" : ""}`;
      item.dataset.id = ex.id;
      item.innerHTML = `
        <div class="ex-item-check">${done ? "✓" : ""}</div>
        <span class="ex-item-num">${ex.id}</span>
        <span class="ex-item-title">${escapeHtml(ex.title)}</span>
      `;
      container.appendChild(item);
    });
  }

  // ── Renderizar ejercicio en panel principal ──
  function renderExercise(exercise, level) {
    const meta = LEVEL_META[level];

    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("exercise-panel").classList.remove("hidden");

    const badge = document.getElementById("ex-level-badge");
    badge.className = `ex-level-badge ${meta.cls}`;
    badge.textContent = meta.icon + " " + meta.label;

    document.getElementById("ex-num").textContent = `Ejercicio #${exercise.id}`;
    document.getElementById("ex-title").textContent = exercise.title;
    document.getElementById("ex-description").innerHTML = formatDescription(exercise.description);
    document.getElementById("code-editor").value = exercise.starter || "# Escribe tu código aquí\n";

    clearOutput();
    hideFeedback();
    hideHint();

    // Scroll al top del panel
    document.querySelector(".main").scrollTo({ top: 0, behavior: "smooth" });
  }

  // ── Output ──
  function showOutput(text, isError = false) {
    const box = document.getElementById("output-box");
    box.innerHTML = "";
    if (!text) {
      box.innerHTML = `<span class="output-placeholder">(sin output)</span>`;
      return;
    }
    const pre = document.createElement("span");
    pre.className = isError ? "output-error" : "";
    pre.textContent = text;
    box.appendChild(pre);
  }

  function clearOutput() {
    document.getElementById("output-box").innerHTML =
      `<span class="output-placeholder">El resultado aparecerá aquí…</span>`;
  }

  // ── Feedback ──
  function showSuccess(extra = "") {
    const fb = document.getElementById("feedback");
    fb.className = "feedback success";
    fb.textContent = randomMsg() + (extra ? "  " + extra : "");
    fb.classList.remove("hidden");
    // Reiniciar animación
    fb.style.animation = "none";
    fb.offsetHeight;
    fb.style.animation = "";
  }

  function showError(message) {
    const fb = document.getElementById("feedback");
    fb.className = "feedback error";
    fb.textContent = message;
    fb.classList.remove("hidden");
    fb.style.animation = "none";
    fb.offsetHeight;
    fb.style.animation = "";
  }

  function hideFeedback() {
    document.getElementById("feedback").classList.add("hidden");
  }

  // ── Hint ──
  function toggleHint(hint) {
    const box = document.getElementById("hint-box");
    if (!box.classList.contains("hidden")) {
      box.classList.add("hidden");
      return;
    }
    document.getElementById("hint-text").innerHTML = formatDescription(hint);
    box.classList.remove("hidden");
  }

  function hideHint() {
    document.getElementById("hint-box").classList.add("hidden");
  }

  // ── Progress bars ──
  function updateLevelProgress(level, completed, total = 100) {
    const pct = Math.round((completed / total) * 100);
    document.getElementById("level-bar").style.width = pct + "%";
    document.getElementById("level-pct").textContent = pct + "%";

    const badge = document.getElementById(`badge-${level}`);
    if (badge) badge.textContent = `${completed}/${total}`;
  }

  function updateGlobalProgress(total) {
    const pct = Math.round((total / 400) * 100);
    document.getElementById("global-bar").style.width = pct + "%";
    document.getElementById("global-count").textContent = `${total} / 400`;
  }

  function updateStreak(streak) {
    const badge = document.getElementById("streak-badge");
    if (streak >= 2) {
      badge.classList.remove("hidden");
      document.getElementById("streak-num").textContent = streak;
    } else {
      badge.classList.add("hidden");
    }
  }

  // ── Sonidos (Web Audio API, sin archivos externos) ──
  function playSound(type) {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();

      if (type === "success") {
        // Acorde mayor ascendente
        [[440, 0], [554, 0.1], [659, 0.2]].forEach(([freq, delay]) => {
          const osc  = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain); gain.connect(ctx.destination);
          osc.type = "sine";
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.18, ctx.currentTime + delay);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.3);
          osc.start(ctx.currentTime + delay);
          osc.stop(ctx.currentTime + delay + 0.35);
        });
      } else if (type === "error") {
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = "sawtooth"; osc.frequency.value = 180;
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.start(); osc.stop(ctx.currentTime + 0.3);
      }
    } catch {}
  }

  // ── Confetti ──
  function showConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    const ctx2   = canvas.getContext("2d");
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    const COLORS = ["#3fb950","#58a6ff","#f78166","#d29922","#bc8cff","#ff7b72"];
    const pieces = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: -10 - Math.random() * 80,
      r: 5 + Math.random() * 5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      speed: 3 + Math.random() * 5,
      angle: Math.random() * 360,
      spin:  (Math.random() - .5) * 8,
      drift: (Math.random() - .5) * 3,
    }));

    let frame = 0;
    function draw() {
      ctx2.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        ctx2.save();
        ctx2.translate(p.x, p.y);
        ctx2.rotate((p.angle * Math.PI) / 180);
        ctx2.fillStyle = p.color;
        ctx2.globalAlpha = Math.max(0, 1 - frame / 90);
        ctx2.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.6);
        ctx2.restore();
        p.y += p.speed;
        p.x += p.drift;
        p.angle += p.spin;
      });
      frame++;
      if (frame < 90) requestAnimationFrame(draw);
      else ctx2.clearRect(0, 0, canvas.width, canvas.height);
    }
    draw();
  }

  // ── Helpers ──
  function formatDescription(text) {
    // Convertir `código` a <code>, **negrita** a <strong>, saltos de línea
    return text
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>");
  }

  function escapeHtml(t) {
    return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  return {
    renderExerciseList,
    renderExercise,
    showOutput,
    clearOutput,
    showSuccess,
    showError,
    hideFeedback,
    toggleHint,
    hideHint,
    updateLevelProgress,
    updateGlobalProgress,
    updateStreak,
    playSound,
    showConfetti,
    LEVEL_META,
  };
})();

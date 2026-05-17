# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the App

No build step required. Open `index.html` in a browser via an HTTP server (direct file:// opening blocks Pyodide's WASM fetch):

```powershell
# Python's built-in server (from the project directory)
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Architecture

PythonChupas is a vanilla-JS, zero-build SPA. Python code runs fully in-browser via Pyodide (WebAssembly) — there is no backend.

### Module roles

| File | Responsibility |
|---|---|
| `index.html` | Shell: splash loader, two-column layout (sidebar + editor), canvas for confetti |
| `app.js` | Orchestrator: exercise selection, level switching, validation pipeline, event binding |
| `runner.js` | Pyodide integration: init, `runCode()`, `runWithTest()`, Spanish error parsing |
| `progress.js` | localStorage persistence (`pythonChupas_v1`): completions, streak, last activity |
| `ui.js` | Rendering, feedback messages, Web Audio success/error sounds, confetti animation |
| `muy-novato.js`, `novato.js`, `intermedio.js`, `avanzado.js` | Exercise data, exported as `window.EXERCISES_[LEVEL]` |

### Exercise schema

```javascript
{
  id: 1,            // 1-100 per level
  title: string,
  description: string,   // supports `code`, **bold**, \n → <br>
  starter: string,       // template code shown in editor
  hint: string,
  validate: {
    type: "output" | "contains" | "regex" | "python_test",
    // type-specific fields (expected, strings, pattern, flags, test)
  }
}
```

### Validation types

- `output` — exact match of stdout
- `contains` — stdout includes all listed strings
- `regex` — stdout matches pattern (with optional flags)
- `python_test` — user code is prepended to test code and assertions are evaluated; `AssertionError` counts as failure

### Data flow

1. Pyodide loads asynchronously; splash screen shows progress.
2. `app.js` selects an exercise → `ui.js` renders it.
3. User submits code → `runner.js` executes via Pyodide, capturing stdout/stderr.
4. `app.js` validates output against exercise's `validate` config.
5. On success: `progress.js` marks complete, `ui.js` triggers audio + confetti, streak updates.

### Key behaviours to preserve

- `input()` is mocked in `runner.js` to use `window.MOCK_INPUTS` array (not browser `prompt()`), so validation runs silently.
- Error messages are translated to Spanish in `runner.js:parseError()` — 14+ error types mapped.
- Ctrl+Enter runs code; Tab inserts 4 spaces.
- Progress survives page refresh via `localStorage`.

## Adding Exercises

Add objects to the appropriate `*-novato.js` / `intermedio.js` / `avanzado.js` file following the schema above. IDs within a level must be unique. Exercise groups shown in the sidebar are inferred from consecutive id ranges with matching titles in `ui.js`.

## External Dependencies (CDN only)

- Pyodide v0.27.0 — `https://cdn.jsdelivr.net/pyodide/v0.27.0/full/`
- Google Fonts — Inter, JetBrains Mono

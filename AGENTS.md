# AGENTS.md — PythonChupas

## Stack

React 18 + TypeScript + Vite 5 + Tailwind 3. Single-page app, no backend. Python runs in-browser via **Pyodide v0.27.0** (WebAssembly). Route: `react-router-dom`.

## Commands

| Command | What |
|---|---|
| `npm run dev` | Dev server on port **8080**, opens browser |
| `npm run build` | `tsc -b && vite build` — produces single HTML (vite-plugin-singlefile) |
| `npx tsc -b` | Typecheck only |

No test framework, no linter, no formatter config.

## Architecture

```
src/
  types/index.ts          → TS interfaces (Leccion, Modulo, EjercicioBanco, etc.)
  content/
    curriculum.ts          → Wires 72 lecciones + 400 bank exercises into levels
    exercises/*.ts        → Bank exercises (4 files, 100 each)
    levels/{muy-novato,novato,intermedio,avanzado}/modulo-{01..06}/leccion-{01..03}.ts
    insignias.ts          → 13 badge definitions
  context/
    PyodideContext.tsx     → Pyodide lifecycle + runCode/runWithTest
    AppContext.tsx         → Progress, XP, badges, toast, level unlock logic
  utils/
    pythonEvaluator.ts    → Validates output against validate config
    progressStorage.ts    → localStorage key: pythonchupas_progress
    errorTranslator.ts    → Python errors → Spanish messages
    gamification.ts       → XP thresholds, badge checks
  pages/                  → Home, CoursePage, LessonPage, ExerciseBankPage, DashboardPage
  components/
    lesson/               → LessonView, LessonExercise
    editor/               → PythonEditor (CodeMirror), OutputPanel
    layout/               → Layout, Sidebar
    exercise/             → ExerciseList
    progress/             → ProgressBar, StreakDisplay, LevelCard
    ui/                   → Toast, Confetti, Button
```

## Lesson file structure

Each `leccion-XX.ts` exports a `Leccion` object with fields:
- `id`: e.g. `'no-03-02'` — `{nivel-abbr}-{mod}-{lec}`
- `conceptosClave: string[]` — tags; must match what is actually taught (no ghost concepts)
- `contenido: SeccionContenido[]` — teaching content blocks
- `ejercicios: EjercicioLeccion[]` — 2–3 coding exercises per lesson
- `cuestionario: PreguntaQuiz[]` — 2 multiple-choice questions

Exercise IDs within a lesson: `{leccion-id}-{num}`, e.g. `'no-03-02-01'`.

## Exercise validation types

| type | Fields | What it checks |
|---|---|---|
| `output` | `expected` | Exact stdout match (trimmed) |
| `contains` | `strings` | stdout includes all strings |
| `regex` | `pattern`, `flags?` | stdout matches regex |
| `python_test` | `test`, `mockInputs?` | User code + test code run together; `AssertionError` = failure |

## Key behaviours

- **`input()` is always mocked** — by default returns `""`. For exercises needing input, pass `mockInputs: string[]` in the validate config (used in `PyodideContext.runCode`).
- **Error messages are translated to Spanish** via `errorTranslator.ts` — 14+ error types.
- **Progress is persisted** in `localStorage` under key `pythonchupas_progress`.
- **Levels are unlocked by XP**: muy-novato (always), novato (≥100 XP or 5 lecciones), intermedio (≥400 XP or 15), avanzado (≥1000 XP or 30).
- **Dark mode** uses Tailwind `class` strategy, persisted in progress.

## Adding content

- **Lesson exercises**: edit the `ejercicios` array in the relevant `leccion-XX.ts` file. IDs must be unique within that lesson.
- **Bank exercises**: add to `src/content/exercises/{level}.ts`. IDs follow pattern `{abbr}-b-{NNN}` (e.g. `mn-b-001`).
- **New lesson**: create `leccion-XX.ts` in the right module dir, then import it in `src/content/curriculum.ts` and add to the module array.
- **New module**: add to the level's `modulos` array in `curriculum.ts`.

All content UI is Spanish: titles, descriptions, hints, explanations, quiz questions.

## Notable conventions

- Lesson IDs: `mn-` / `no-` / `in-` / `av-` + `{mod}-{lec}` (01-06 / 01-03)
- Level IDs in routing: `muy-novato`, `novato`, `intermedio`, `avanzado`
- Nivel type: `'muy-novato' | 'novato' | 'intermedio' | 'avanzado'`
- XP per exercise: 20 (mn), 25 (no), 30 (in), 40 (av)
- `SeccionContenido` supports `tipo: 'tabla-visual'` (with `cabeceras` + `filas`)
- `conceptosClave` entries must correspond to actual content in `contenido` (removed ghost concepts like `defaultdict`, `anidamiento`, `caché`, etc.)

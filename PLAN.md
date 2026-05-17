# Plan: Rebuild PythonChupas (igual que sqlazo)

## Estado de progreso

### ✅ Completado
- Eliminados archivos vanilla JS (`index.html`, `css/`, `js/`)
- `package.json` — dependencias React/TS/Vite/Tailwind/CodeMirror
- `vite.config.ts`, `tailwind.config.js`, `tsconfig*.json`, `postcss.config.js`
- `index.html` (nuevo, Vite)
- `src/index.css`, `src/main.tsx`, `src/App.tsx`
- `src/types/index.ts` — todos los tipos TypeScript
- `src/utils/progressStorage.ts` — localStorage (pythonchupas_progress)
- `src/utils/gamification.ts` — XP, títulos Python, insignias
- `src/utils/errorTranslator.ts` — errores Python → español (14+ tipos)
- `src/utils/pythonEvaluator.ts` — validación (output/contains/regex/python_test)
- `src/context/ThemeContext.tsx`, `AppContext.tsx`, `PyodideContext.tsx`
- `src/hooks/useProgress.ts`
- `src/components/ui/Toast.tsx`, `ProgressBar.tsx`
- `src/components/progress/XpBar.tsx`, `StreakBadge.tsx`
- `src/components/layout/Header.tsx`, `Sidebar.tsx`, `Layout.tsx`
- `src/components/editor/PythonEditor.tsx`, `OutputPanel.tsx`, `FeedbackPanel.tsx`
- `src/content/insignias.ts`
- `src/content/exercises/muy-novato.ts` — 100 ejercicios
- `src/content/exercises/novato.ts` — 100 ejercicios
- `src/content/exercises/intermedio.ts` — 100 ejercicios
- `src/content/exercises/avanzado.ts` — 100 ejercicios

### 🔲 Pendiente
- `src/content/levels/**` — 72 archivos de lecciones (6 módulos × 3 lecciones × 4 niveles)
- `src/content/curriculum.ts` — ensamblaje del curriculum
- `src/components/exercise/ExercisePanel.tsx`, `ExerciseList.tsx`
- `src/components/lesson/LessonContent.tsx`, `LessonExercise.tsx`, `LessonQuiz.tsx`
- `src/pages/ExerciseBankPage.tsx`
- `src/pages/LessonPage.tsx`, `CoursePage.tsx`
- `src/pages/Home.tsx`, `DashboardPage.tsx`
- Instalar dependencias (`npm install`)
- Probar `npm run dev`

---

Reconstruir PythonChupas como app React + TypeScript + Vite + Tailwind + CodeMirror, con la misma arquitectura y UX que **sqlazo/**, pero para aprender Python (Pyodide) en vez de SQL.

---

## Qué se elimina

```
index.html  app.js  runner.js  progress.js  ui.js
muy-novato.js  novato.js  intermedio.js  avanzado.js
```

La carpeta `sqlazo/` se mantiene intacta como referencia.

---

## Tech stack

| Elemento | sqlazo | Nuevo PythonChupas |
|----------|--------|-------------------|
| Framework | React 18 + TypeScript | React 18 + TypeScript |
| Build | Vite + vite-plugin-singlefile | Vite + vite-plugin-singlefile |
| CSS | Tailwind CSS 3 | Tailwind CSS 3 |
| Editor | CodeMirror 6 (`lang-sql`) | CodeMirror 6 (`lang-python`) |
| Runtime | sql.js (SQLite WASM) | Pyodide 0.27.0 (Python WASM) |
| Routing | React Router DOM 6 | React Router DOM 6 |
| Iconos | Lucide React | Lucide React |

---

## Páginas y rutas

```
/                          → Home (hero + selector de niveles)
/dashboard                 → Estadísticas y progreso
/curso/:nivel              → Módulos del nivel
/leccion/:nivel/:mod/:lec  → Lección completa (contenido + ejercicios + quiz)
/ejercicios                → Banco de 400 ejercicios
```

---

## Contenido

**400 ejercicios en el banco** (100 por nivel) — mismos que el app actual, porteados a TypeScript.

| Nivel | Ejercicios | Módulos | Lecciones |
|-------|-----------|---------|-----------|
| Muy Novato | 100 | 6 | ~18 |
| Novato | 100 | 6 | ~18 |
| Intermedio | 100 | 6 | ~18 |
| Avanzado | 100 | 6 | ~18 |
| **Total** | **400** | **24** | **~72** |

### Módulos por nivel

**Muy Novato**: Print y Salidas · Variables · Strings · Números · Conversión de Tipos · Print Avanzado

**Novato**: Condicionales · Bucles For · Bucles While · Listas · Funciones Básicas · Métodos de Strings

**Intermedio**: Funciones Avanzadas · Diccionarios · List Comprehensions · F-Strings · Tuplas y Sets · Manejo de Errores

**Avanzado**: Clases y POO · Algoritmos · Generadores · Decoradores · Estructuras de Datos · Desafíos

---

## Estructura de archivos (`src/`)

```
types/index.ts              ← interfaces TypeScript
context/
  AppContext.tsx             ← estado global (XP, progreso, toasts)
  ThemeContext.tsx           ← tema oscuro/claro
hooks/
  usePyodide.ts             ← carga Pyodide, runCode(), runWithTest()
  useProgress.ts
utils/
  pythonEvaluator.ts        ← validación (output/contains/regex/python_test)
  errorTranslator.ts        ← errores Python → español (14+ tipos)
  progressStorage.ts        ← localStorage (pythonchupas_progress)
  gamification.ts           ← XP, títulos Python, insignias
components/
  editor/
    PythonEditor.tsx        ← CodeMirror + Python, Ctrl+Enter
    OutputPanel.tsx
    FeedbackPanel.tsx       ← correcto/incorrecto, pistas, solución
  layout/
    Header.tsx              ← logo, XP, racha, toggle tema
    Sidebar.tsx             ← navegación curriculum
  lesson/
    LessonContent.tsx
    LessonExercise.tsx
    LessonQuiz.tsx
  ui/
    Toast.tsx · Badge.tsx · ProgressBar.tsx
pages/
  Home.tsx · CoursePage.tsx · LessonPage.tsx
  ExerciseBankPage.tsx · DashboardPage.tsx
content/
  curriculum.ts             ← ensamblaje completo
  insignias.ts
  exercises/
    muy-novato.ts           ← 100 ejercicios
    novato.ts               ← 100 ejercicios
    intermedio.ts           ← 100 ejercicios
    avanzado.ts             ← 100 ejercicios
  levels/
    muy-novato/modulo-01..06/leccion-01..03.ts
    novato/...
    intermedio/...
    avanzado/...
```

---

## Tipos clave

```typescript
type ValidateConfig =
  | { type: 'output'; expected: string }
  | { type: 'contains'; strings: string[] }
  | { type: 'regex'; pattern: string; flags?: string }
  | { type: 'python_test'; test: string; mockInputs?: string[] };

interface EjercicioBanco {
  id: string;        // 'mn-b-001', 'no-b-001', etc.
  nivel: Nivel;
  titulo: string;
  descripcion: string;
  starter: string;
  pistas: string[];
  explicacion: string;
  validate: ValidateConfig;
}

interface EjercicioLeccion extends Omit<EjercicioBanco, 'nivel'> {
  solucionOficial: string;
}

interface Leccion {
  id: string;        // 'mn-01-01'
  titulo: string;
  descripcion: string;
  duracionMinutos: number;
  conceptosClave: string[];
  contenido: SeccionContenido[];
  ejercicios: EjercicioLeccion[];
  cuestionario: PreguntaQuiz[];
}
```

---

## Gamificación

**Títulos Python** (por XP total):
```
0–199     Explorador          🐣
200–499   Aprendiz Python     🐍
500–999   Pythonista Junior   💻
1000–1999 Desarrollador Python ⚡
2000–3499 Pythonista Senior   🔥
3500–5999 Arquitecto Python   🏗️
6000+     Maestro Python      🎓
```

**XP**: lección completa 50 · ejercicio en lección 15 · banco muy-novato 20 · novato 25 · intermedio 30 · avanzado 40

---

## Orden de implementación

1. Eliminar archivos vanilla JS del raíz
2. `npm create vite@latest . -- --template react-ts`
3. Instalar dependencias (ver abajo)
4. Configurar Tailwind + PostCSS + vite.config.ts
5. `src/types/index.ts` — todos los tipos
6. `src/hooks/usePyodide.ts` — motor Python
7. `src/utils/` — evaluador, traductor de errores, progreso, gamificación
8. `src/context/` — AppContext, ThemeContext
9. Componentes de layout (Header, Sidebar)
10. Componentes de editor (PythonEditor, OutputPanel, FeedbackPanel)
11. Portear 400 ejercicios a `src/content/exercises/*.ts`
12. `ExerciseBankPage` funcional con los 400 ejercicios
13. Crear 72 lecciones en `src/content/levels/`
14. `src/content/curriculum.ts`
15. LessonPage + CoursePage
16. Home + DashboardPage
17. Tests end-to-end y build

---

## Dependencias

```json
{
  "dependencies": {
    "@codemirror/commands": "^6.7.0",
    "@codemirror/lang-python": "^6.1.6",
    "@codemirror/state": "^6.4.1",
    "@codemirror/theme-one-dark": "^6.1.2",
    "@codemirror/view": "^6.34.0",
    "lucide-react": "^0.441.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.2"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.41",
    "tailwindcss": "^3.4.10",
    "typescript": "^5.5.3",
    "vite": "^5.4.2",
    "vite-plugin-singlefile": "^2.3.3"
  }
}
```

Pyodide carga desde CDN en runtime — no es dependencia npm.

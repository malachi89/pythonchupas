export type Nivel = 'muy-novato' | 'novato' | 'intermedio' | 'avanzado';

export type ValidateConfig =
  | { type: 'output'; expected: string }
  | { type: 'contains'; strings: string[] }
  | { type: 'regex'; pattern: string; flags?: string }
  | { type: 'python_test'; test: string; mockInputs?: string[] };

export type SeccionContenido =
  | { tipo: 'introduccion'; texto: string }
  | { tipo: 'explicacion'; titulo: string; texto: string }
  | { tipo: 'analogia'; icono: string; texto: string }
  | { tipo: 'ejemplo'; titulo: string; descripcion: string; codigo: string }
  | { tipo: 'tabla-visual'; titulo: string; cabeceras: string[]; filas: (string | number)[][] }
  | { tipo: 'error-comun'; titulo: string; codigoMal: string; problema: string; codigoBien: string; solucion: string }
  | { tipo: 'resumen'; puntos: string[] }
  | { tipo: 'nota'; texto: string }
  | { tipo: 'advertencia'; texto: string }
  | { tipo: 'codigo'; lenguaje: string; codigo: string }
  | { tipo: 'separador' };

export interface PreguntaQuiz {
  id: string;
  pregunta: string;
  opciones: string[];
  correcta: number;
  explicacion: string;
}

export interface EjercicioLeccion {
  id: string;
  titulo: string;
  descripcion: string;
  starter: string;
  pistas: string[];
  explicacion: string;
  solucionOficial: string;
  validate: ValidateConfig;
}

export interface Leccion {
  id: string;
  titulo: string;
  descripcion: string;
  duracionMinutos: number;
  conceptosClave: string[];
  contenido: SeccionContenido[];
  ejercicios: EjercicioLeccion[];
  cuestionario: PreguntaQuiz[];
}

export interface Modulo {
  id: string;
  titulo: string;
  descripcion: string;
  lecciones: Leccion[];
}

export interface NivelCurso {
  id: Nivel;
  titulo: string;
  descripcion: string;
  colorClase: string;
  bgClase: string;
  borderClase: string;
  emoji: string;
  modulos: Modulo[];
}

export interface EjercicioBanco {
  id: string;
  nivel: Nivel;
  titulo: string;
  descripcion: string;
  starter: string;
  pistas: string[];
  explicacion: string;
  validate: ValidateConfig;
}

export interface RunResult {
  output: string;
  error?: string;
  passed?: boolean;
}

export interface EvaluationResult {
  correcto: boolean;
  mensaje: string;
  xpGanado?: number;
}

export interface ProgresoLeccion {
  completada: boolean;
  ejerciciosCompletados: string[];
  quizCompletado: boolean;
  quizPuntuacion: number;
  ultimaVez: string;
}

export interface Insignia {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
  condicion: string;
}

export interface ProgresoUsuario {
  lecciones: Record<string, ProgresoLeccion>;
  ejerciciosBanco: Record<string, boolean>;
  tema: 'oscuro' | 'claro';
  xpTotal: number;
  insignias: string[];
  racha: number;
  ultimaActividad: string;
  estadisticas: {
    leccionesCompletadas: number;
    ejerciciosResueltos: number;
    ejerciciosPrimerIntento: number;
    ejerciciosSinPistas: number;
  };
}

export type TituloPython =
  | 'Explorador'
  | 'Aprendiz Python'
  | 'Pythonista Junior'
  | 'Desarrollador Python'
  | 'Pythonista Senior'
  | 'Arquitecto Python'
  | 'Maestro Python';

export interface NivelEstudiante {
  titulo: TituloPython;
  xpMin: number;
  xpMax: number;
  xpSiguiente: number;
  progreso: number;
}

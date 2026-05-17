import type { NivelCurso } from '../types';
import { ejerciciosMuyNovato } from './exercises/muy-novato';
import { ejerciciosNovato } from './exercises/novato';
import { ejerciciosIntermedio } from './exercises/intermedio';
import { ejerciciosAvanzado } from './exercises/avanzado';

import { leccion as mn0101 } from './levels/muy-novato/modulo-01/leccion-01';
import { leccion as mn0102 } from './levels/muy-novato/modulo-01/leccion-02';
import { leccion as mn0103 } from './levels/muy-novato/modulo-01/leccion-03';
import { leccion as mn0201 } from './levels/muy-novato/modulo-02/leccion-01';
import { leccion as mn0202 } from './levels/muy-novato/modulo-02/leccion-02';
import { leccion as mn0203 } from './levels/muy-novato/modulo-02/leccion-03';
import { leccion as mn0301 } from './levels/muy-novato/modulo-03/leccion-01';
import { leccion as mn0302 } from './levels/muy-novato/modulo-03/leccion-02';
import { leccion as mn0303 } from './levels/muy-novato/modulo-03/leccion-03';
import { leccion as mn0401 } from './levels/muy-novato/modulo-04/leccion-01';
import { leccion as mn0402 } from './levels/muy-novato/modulo-04/leccion-02';
import { leccion as mn0403 } from './levels/muy-novato/modulo-04/leccion-03';
import { leccion as mn0501 } from './levels/muy-novato/modulo-05/leccion-01';
import { leccion as mn0502 } from './levels/muy-novato/modulo-05/leccion-02';
import { leccion as mn0503 } from './levels/muy-novato/modulo-05/leccion-03';
import { leccion as mn0601 } from './levels/muy-novato/modulo-06/leccion-01';
import { leccion as mn0602 } from './levels/muy-novato/modulo-06/leccion-02';
import { leccion as mn0603 } from './levels/muy-novato/modulo-06/leccion-03';

import { leccion as no0101 } from './levels/novato/modulo-01/leccion-01';
import { leccion as no0102 } from './levels/novato/modulo-01/leccion-02';
import { leccion as no0103 } from './levels/novato/modulo-01/leccion-03';
import { leccion as no0201 } from './levels/novato/modulo-02/leccion-01';
import { leccion as no0202 } from './levels/novato/modulo-02/leccion-02';
import { leccion as no0203 } from './levels/novato/modulo-02/leccion-03';
import { leccion as no0301 } from './levels/novato/modulo-03/leccion-01';
import { leccion as no0302 } from './levels/novato/modulo-03/leccion-02';
import { leccion as no0303 } from './levels/novato/modulo-03/leccion-03';
import { leccion as no0401 } from './levels/novato/modulo-04/leccion-01';
import { leccion as no0402 } from './levels/novato/modulo-04/leccion-02';
import { leccion as no0403 } from './levels/novato/modulo-04/leccion-03';
import { leccion as no0501 } from './levels/novato/modulo-05/leccion-01';
import { leccion as no0502 } from './levels/novato/modulo-05/leccion-02';
import { leccion as no0503 } from './levels/novato/modulo-05/leccion-03';
import { leccion as no0601 } from './levels/novato/modulo-06/leccion-01';
import { leccion as no0602 } from './levels/novato/modulo-06/leccion-02';
import { leccion as no0603 } from './levels/novato/modulo-06/leccion-03';

import { leccion as in0101 } from './levels/intermedio/modulo-01/leccion-01';
import { leccion as in0102 } from './levels/intermedio/modulo-01/leccion-02';
import { leccion as in0103 } from './levels/intermedio/modulo-01/leccion-03';
import { leccion as in0201 } from './levels/intermedio/modulo-02/leccion-01';
import { leccion as in0202 } from './levels/intermedio/modulo-02/leccion-02';
import { leccion as in0203 } from './levels/intermedio/modulo-02/leccion-03';
import { leccion as in0301 } from './levels/intermedio/modulo-03/leccion-01';
import { leccion as in0302 } from './levels/intermedio/modulo-03/leccion-02';
import { leccion as in0303 } from './levels/intermedio/modulo-03/leccion-03';
import { leccion as in0401 } from './levels/intermedio/modulo-04/leccion-01';
import { leccion as in0402 } from './levels/intermedio/modulo-04/leccion-02';
import { leccion as in0403 } from './levels/intermedio/modulo-04/leccion-03';
import { leccion as in0501 } from './levels/intermedio/modulo-05/leccion-01';
import { leccion as in0502 } from './levels/intermedio/modulo-05/leccion-02';
import { leccion as in0503 } from './levels/intermedio/modulo-05/leccion-03';
import { leccion as in0601 } from './levels/intermedio/modulo-06/leccion-01';
import { leccion as in0602 } from './levels/intermedio/modulo-06/leccion-02';
import { leccion as in0603 } from './levels/intermedio/modulo-06/leccion-03';

import { leccion as av0101 } from './levels/avanzado/modulo-01/leccion-01';
import { leccion as av0102 } from './levels/avanzado/modulo-01/leccion-02';
import { leccion as av0103 } from './levels/avanzado/modulo-01/leccion-03';
import { leccion as av0201 } from './levels/avanzado/modulo-02/leccion-01';
import { leccion as av0202 } from './levels/avanzado/modulo-02/leccion-02';
import { leccion as av0203 } from './levels/avanzado/modulo-02/leccion-03';
import { leccion as av0301 } from './levels/avanzado/modulo-03/leccion-01';
import { leccion as av0302 } from './levels/avanzado/modulo-03/leccion-02';
import { leccion as av0303 } from './levels/avanzado/modulo-03/leccion-03';
import { leccion as av0401 } from './levels/avanzado/modulo-04/leccion-01';
import { leccion as av0402 } from './levels/avanzado/modulo-04/leccion-02';
import { leccion as av0403 } from './levels/avanzado/modulo-04/leccion-03';
import { leccion as av0501 } from './levels/avanzado/modulo-05/leccion-01';
import { leccion as av0502 } from './levels/avanzado/modulo-05/leccion-02';
import { leccion as av0503 } from './levels/avanzado/modulo-05/leccion-03';
import { leccion as av0601 } from './levels/avanzado/modulo-06/leccion-01';
import { leccion as av0602 } from './levels/avanzado/modulo-06/leccion-02';
import { leccion as av0603 } from './levels/avanzado/modulo-06/leccion-03';

function buildModulo(moduloId: string, titulo: string, descripcion: string, lecciones: typeof mn0101[]) {
  return { id: moduloId, titulo, descripcion, lecciones };
}

export const curriculum: NivelCurso[] = [
  {
    id: 'muy-novato',
    titulo: 'Muy Novato',
    descripcion: 'Desde cero: print, variables, strings, números, tipos y print avanzado.',
    colorClase: 'text-blue-600 dark:text-blue-400',
    bgClase: 'bg-blue-50 dark:bg-blue-900/20',
    borderClase: 'border-blue-200 dark:border-blue-800',
    emoji: '🐣',
    modulos: [
      buildModulo('mn-mod-01', 'Print y Salidas', 'Aprende a mostrar información en pantalla con print().', [mn0101, mn0102, mn0103]),
      buildModulo('mn-mod-02', 'Variables', 'Guarda y manipula datos con variables.', [mn0201, mn0202, mn0203]),
      buildModulo('mn-mod-03', 'Strings', 'Trabaja con texto: concatenación, métodos y manipulación.', [mn0301, mn0302, mn0303]),
      buildModulo('mn-mod-04', 'Números', 'Operaciones matemáticas: suma, resta, multiplicación y más.', [mn0401, mn0402, mn0403]),
      buildModulo('mn-mod-05', 'Conversión de Tipos', 'Convierte entre tipos de datos: int, str, float, bool.', [mn0501, mn0502, mn0503]),
      buildModulo('mn-mod-06', 'Print Avanzado', 'Domina print(): sep, end, formato y caracteres especiales.', [mn0601, mn0602, mn0603]),
    ],
  },
  {
    id: 'novato',
    titulo: 'Novato',
    descripcion: 'Condicionales, bucles, listas, funciones y métodos de strings.',
    colorClase: 'text-green-600 dark:text-green-400',
    bgClase: 'bg-green-50 dark:bg-green-900/20',
    borderClase: 'border-green-200 dark:border-green-800',
    emoji: '🐍',
    modulos: [
      buildModulo('no-mod-01', 'Condicionales', 'Toma decisiones con if, elif y else.', [no0101, no0102, no0103]),
      buildModulo('no-mod-02', 'Bucles For', 'Itera sobre secuencias con el bucle for.', [no0201, no0202, no0203]),
      buildModulo('no-mod-03', 'Bucles While', 'Repite código mientras se cumpla una condición.', [no0301, no0302, no0303]),
      buildModulo('no-mod-04', 'Listas', 'Colecciones ordenadas y mutables de elementos.', [no0401, no0402, no0403]),
      buildModulo('no-mod-05', 'Funciones Básicas', 'Define y usa funciones para organizar tu código.', [no0501, no0502, no0503]),
      buildModulo('no-mod-06', 'Métodos de Strings', 'Manipula texto con métodos avanzados de strings.', [no0601, no0602, no0603]),
    ],
  },
  {
    id: 'intermedio',
    titulo: 'Intermedio',
    descripcion: 'Funciones avanzadas, diccionarios, comprehensions, f-strings, tuplas, sets y errores.',
    colorClase: 'text-orange-600 dark:text-orange-400',
    bgClase: 'bg-orange-50 dark:bg-orange-900/20',
    borderClase: 'border-orange-200 dark:border-orange-800',
    emoji: '💻',
    modulos: [
      buildModulo('in-mod-01', 'Funciones Avanzadas', 'Argumentos, kwargs, lambda y funciones de orden superior.', [in0101, in0102, in0103]),
      buildModulo('in-mod-02', 'Diccionarios', 'Pares clave-valor y sus métodos.', [in0201, in0202, in0203]),
      buildModulo('in-mod-03', 'List Comprehensions', 'Crea listas de forma elegante y eficiente.', [in0301, in0302, in0303]),
      buildModulo('in-mod-04', 'F-Strings', 'Interpolación moderna de cadenas en Python.', [in0401, in0402, in0403]),
      buildModulo('in-mod-05', 'Tuplas y Sets', 'Colecciones inmutables y conjuntos sin duplicados.', [in0501, in0502, in0503]),
      buildModulo('in-mod-06', 'Manejo de Errores', 'Captura y maneja excepciones con try/except.', [in0601, in0602, in0603]),
    ],
  },
  {
    id: 'avanzado',
    titulo: 'Avanzado',
    descripcion: 'POO, algoritmos, generadores, decoradores, estructuras de datos y desafíos.',
    colorClase: 'text-red-600 dark:text-red-400',
    bgClase: 'bg-red-50 dark:bg-red-900/20',
    borderClase: 'border-red-200 dark:border-red-800',
    emoji: '🔥',
    modulos: [
      buildModulo('av-mod-01', 'Clases y POO', 'Programación Orientada a Objetos en Python.', [av0101, av0102, av0103]),
      buildModulo('av-mod-02', 'Algoritmos', 'Algoritmos clásicos: búsqueda, ordenamiento y recursión.', [av0201, av0202, av0203]),
      buildModulo('av-mod-03', 'Generadores', 'Generadores, yield e iteradores perezosos.', [av0301, av0302, av0303]),
      buildModulo('av-mod-04', 'Decoradores', 'Decoradores para extender funciones.', [av0401, av0402, av0403]),
      buildModulo('av-mod-05', 'Estructuras de Datos', 'Pilas, colas, árboles y grafos en Python.', [av0501, av0502, av0503]),
      buildModulo('av-mod-06', 'Desafíos', 'Ejercicios integradores y desafíos finales.', [av0601, av0602, av0603]),
    ],
  },
];

export const ALL_EXERCISES_BANCO = [
  ...ejerciciosMuyNovato,
  ...ejerciciosNovato,
  ...ejerciciosIntermedio,
  ...ejerciciosAvanzado,
];

export const ALL_LECCIONES = [
  mn0101, mn0102, mn0103,
  mn0201, mn0202, mn0203,
  mn0301, mn0302, mn0303,
  mn0401, mn0402, mn0403,
  mn0501, mn0502, mn0503,
  mn0601, mn0602, mn0603,
  no0101, no0102, no0103,
  no0201, no0202, no0203,
  no0301, no0302, no0303,
  no0401, no0402, no0403,
  no0501, no0502, no0503,
  no0601, no0602, no0603,
  in0101, in0102, in0103,
  in0201, in0202, in0203,
  in0301, in0302, in0303,
  in0401, in0402, in0403,
  in0501, in0502, in0503,
  in0601, in0602, in0603,
  av0101, av0102, av0103,
  av0201, av0202, av0203,
  av0301, av0302, av0303,
  av0401, av0402, av0403,
  av0501, av0502, av0503,
  av0601, av0602, av0603,
];

export function findLeccion(id: string) {
  return ALL_LECCIONES.find(l => l.id === id);
}

export function findEjercicioBanco(id: string) {
  return ALL_EXERCISES_BANCO.find(e => e.id === id);
}

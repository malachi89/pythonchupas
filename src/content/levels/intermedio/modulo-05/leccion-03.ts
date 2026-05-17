import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-05-03',
  titulo: 'Aplicaciones de tuplas y sets',
  descripcion: 'Aprende usos prácticos de tuplas y sets en programación real.',
  duracionMinutos: 10,
  conceptosClave: ['devolver múltiples valores', 'unpacking', 'membership test', 'eliminar duplicados', 'frozenset'],
  contenido: [
    { tipo: 'introduccion', texto: 'Las tuplas y sets tienen aplicaciones muy prácticas: retornar múltiples valores de funciones, testing de pertenencia rápido, y eliminar duplicados eficientemente.' },
    { tipo: 'explicacion', titulo: 'Tuplas para múltiples retornos', texto: 'Las funciones retornan tuplas implícitamente cuando devuelves varios valores separados por comas.' },
    { tipo: 'ejemplo', titulo: 'Múltiples retornos con tuplas', descripcion: 'Función que devuelve varios valores:', codigo: 'def dividir(a, b):\n    cociente = a // b\n    resto = a % b\n    return cociente, resto  # retorna tupla\n\nc, r = dividir(17, 5)\nprint(c, r)  # 3 2' },
    { tipo: 'explicacion', titulo: 'Test de pertenencia eficiente', texto: 'Verificar si un elemento está en un set (`in`) es mucho más rápido que en una lista, especialmente con muchos elementos.' },
    { tipo: 'ejemplo', titulo: 'Membership test', descripcion: 'Comparando velocidad de búsqueda:', codigo: "vocales = {'a', 'e', 'i', 'o', 'u'}\nprint('a' in vocales)  # True\nprint('z' in vocales)  # False\n\n# Ideal para validación rápida\nletra = 'x'\nif letra in vocales:\n    print('Es vocal')\nelse:\n    print('No es vocal')" },
    { tipo: 'explicacion', titulo: 'Frozenset: set inmutable', texto: 'Un `frozenset` es la versión inmutable de un set. Puedes usarlo como clave de diccionario o dentro de otro set.' },
    { tipo: 'ejemplo', titulo: 'Frozenset', descripcion: 'Sets inmutables:', codigo: "inmutable = frozenset([1, 2, 3])\nprint(inmutable)  # frozenset({1, 2, 3})\n# inmutable.add(4)  # Error: frozenset no tiene add()\n\n# Útil como clave de diccionario\nd = {frozenset({1, 2}): 'valor'}\nprint(d)  # {frozenset({1, 2}): 'valor'}" },
    { tipo: 'resumen', puntos: ['Las funciones retornan tuplas con múltiples valores', 'in en sets es más rápido que en listas', 'frozenset es la versión inmutable de set', 'Usa sets para eliminar duplicados rápidamente'] },
  ],
  ejercicios: [
    {
      id: 'in-05-03-01',
      titulo: 'Múltiples retornos',
      descripcion: 'Define una función `min_max(lista)` que devuelva el mínimo y máximo de una lista. Llámala con [3, 1, 4, 1, 5].',
      starter: '# Define la función y úsala\n',
      pistas: ["def min_max(lista):\n    return min(lista), max(lista)\nmenor, mayor = min_max([3, 1, 4, 1, 5])\nprint(menor, mayor)"],
      explicacion: "La función retorna una tupla (min, max) que se desempaqueta.",
      solucionOficial: 'def min_max(lista):\n    return min(lista), max(lista)\nmenor, mayor = min_max([3, 1, 4, 1, 5])\nprint(menor, mayor)',
      validate: { type: 'output', expected: '1 5' },
    },
    {
      id: 'in-05-03-02',
      titulo: 'Filtrar duplicados con set',
      descripcion: 'Crea `palabras = ["ana", "luis", "ana", "carlos", "luis"]`. Elimina duplicados usando set y convierte a lista ordenada.',
      starter: 'palabras = ["ana", "luis", "ana", "carlos", "luis"]\n# Elimina duplicados y ordena\n',
      pistas: ["print(sorted(set(palabras)))"],
      explicacion: "set() elimina duplicados, sorted() ordena alfabéticamente.",
      solucionOficial: 'palabras = ["ana", "luis", "ana", "carlos", "luis"]\nprint(sorted(set(palabras)))',
      validate: { type: 'output', expected: "['ana', 'carlos', 'luis']" },
    },
  ],
  cuestionario: [
    {
      id: 'in-05-03-q1',
      pregunta: '¿Qué retorna realmente `return a, b` en una función?',
      opciones: ['Dos valores separados', 'Una lista', 'Una tupla', 'Un diccionario'],
      correcta: 2,
      explicacion: 'Los valores separados por comas en return forman una tupla.',
    },
    {
      id: 'in-05-03-q2',
      pregunta: '¿Para qué sirve frozenset?',
      opciones: ['Set más rápido', 'Set ordenado', 'Set inmutable', 'Set con duplicados'],
      correcta: 2,
      explicacion: 'frozenset es la versión inmutable de un set, usable como clave de dict.',
    },
  ],
};

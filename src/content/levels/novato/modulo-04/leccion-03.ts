import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'no-04-03',
  titulo: 'Slicing y operaciones avanzadas con listas',
  descripcion: 'Domina el slicing de listas y operaciones como copia, búsqueda y concatenación.',
  duracionMinutos: 10,
  conceptosClave: ['slicing', 'copia de listas', 'in en listas', 'concatenación', 'anidamiento'],
  contenido: [
    { tipo: 'introduccion', texto: 'Al igual que con strings, puedes hacer slicing en listas para obtener sublistas. También puedes concatenar, repetir y buscar elementos.' },
    { tipo: 'explicacion', titulo: 'Slicing de listas', texto: 'La sintaxis `lista[inicio:fin:paso]` funciona igual que en strings. Puedes obtener sublistas, saltar elementos o invertir la lista.' },
    { tipo: 'ejemplo', titulo: 'Slicing', descripcion: 'Extrayendo sublistas:', codigo: 'nums = [0, 1, 2, 3, 4, 5]\nprint(nums[1:4])    # [1, 2, 3]\nprint(nums[:3])     # [0, 1, 2]\nprint(nums[3:])     # [3, 4, 5]\nprint(nums[::2])    # [0, 2, 4]\nprint(nums[::-1])   # [5, 4, 3, 2, 1, 0]' },
    { tipo: 'explicacion', titulo: 'Copia de listas', texto: 'Asignar una lista a otra variable NO la copia, crea otra referencia. Para copiar, usa slicing `lista[:]` o `list()`.' },
    { tipo: 'ejemplo', titulo: 'Copiar vs referenciar', descripcion: 'La diferencia entre copia y referencia:', codigo: 'original = [1, 2, 3]\nreferencia = original\nreferencia.append(4)\nprint(original)  # [1, 2, 3, 4] ¡se modificó!\n\noriginal = [1, 2, 3]\ncopia = original[:]\ncopia.append(4)\nprint(original)  # [1, 2, 3] (intacto)' },
    { tipo: 'explicacion', titulo: 'Buscar con in y count', texto: 'El operador `in` verifica si un elemento está en la lista. `index()` devuelve la posición de un elemento.' },
    { tipo: 'ejemplo', titulo: 'Búsqueda en listas', descripcion: 'Buscando elementos:', codigo: "frutas = ['manzana', 'pera', 'uva']\nprint('pera' in frutas)     # True\nprint('kiwi' in frutas)     # False\nprint(frutas.index('pera'))  # 1" },
    { tipo: 'resumen', puntos: ['lista[inicio:fin] obtiene sublistas', 'lista[:] crea una copia', 'in verifica si un elemento existe', 'index() encuentra la posición de un elemento'] },
  ],
  ejercicios: [
    {
      id: 'no-04-03-01',
      titulo: 'Slicing de lista',
      descripcion: 'Crea `nums = [10, 20, 30, 40, 50]` e imprime los primeros 3 elementos.',
      starter: 'nums = [10, 20, 30, 40, 50]\n# Imprime los primeros 3\n',
      pistas: ["print(nums[:3])"],
      explicacion: "nums[:3] obtiene desde el inicio hasta el índice 3 (sin incluirlo).",
      solucionOficial: 'nums = [10, 20, 30, 40, 50]\nprint(nums[:3])',
      validate: { type: 'output', expected: '[10, 20, 30]' },
    },
    {
      id: 'no-04-03-02',
      titulo: 'Verificar con in',
      descripcion: "Crea `lista = [1, 2, 3, 4, 5]` e imprime si el 3 está en la lista.",
      starter: 'lista = [1, 2, 3, 4, 5]\n# Verifica si 3 está\n',
      pistas: ["print(3 in lista)"],
      explicacion: "in devuelve True si el elemento está en la lista.",
      solucionOficial: 'lista = [1, 2, 3, 4, 5]\nprint(3 in lista)',
      validate: { type: 'output', expected: 'True' },
    },
  ],
  cuestionario: [
    {
      id: 'no-04-03-q1',
      pregunta: '¿Qué imprime?\n```\nnums = [1, 2, 3, 4, 5]\nprint(nums[1:3])\n```',
      opciones: ['[1, 2, 3]', '[2, 3]', '[2, 3, 4]', '[1, 2]'],
      correcta: 1,
      explicacion: 'nums[1:3] toma índices 1 y 2 (el 3 se excluye): [2, 3].',
    },
    {
      id: 'no-04-03-q2',
      pregunta: '¿Cómo haces una copia independiente de una lista?',
      opciones: ['lista2 = lista1', 'lista2 = lista1.copy() o lista1[:]', 'lista2 = copy(lista1)', 'lista2 = lista1 + []'],
      correcta: 1,
      explicacion: 'lista[:] o list() o .copy() crean una copia independiente.',
    },
  ],
};

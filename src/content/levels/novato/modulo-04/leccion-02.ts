import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'no-04-02',
  titulo: 'Métodos de listas',
  descripcion: 'Aprende los métodos más importantes para manipular listas: append, insert, remove, pop y más.',
  duracionMinutos: 10,
  conceptosClave: ['append()', 'insert()', 'remove()', 'pop()', 'sort()', 'reverse()', 'len()'],
  contenido: [
    { tipo: 'introduccion', texto: 'Las listas tienen métodos integrados para agregar, eliminar y ordenar elementos. Estos métodos modifican la lista directamente.' },
    { tipo: 'explicacion', titulo: 'Agregar elementos: append e insert', texto: '`append()` agrega un elemento al final de la lista. `insert(posición, valor)` agrega un elemento en una posición específica.' },
    { tipo: 'ejemplo', titulo: 'append e insert', descripcion: 'Añadiendo elementos:', codigo: "nums = [1, 2, 3]\nnums.append(4)\nprint(nums)          # [1, 2, 3, 4]\nnums.insert(0, 0)\nprint(nums)          # [0, 1, 2, 3, 4]" },
    { tipo: 'explicacion', titulo: 'Eliminar elementos: remove y pop', texto: '`remove(valor)` elimina la primera ocurrencia del valor. `pop(índice)` elimina y devuelve el elemento en esa posición (sin índice, elimina el último).' },
    { tipo: 'ejemplo', titulo: 'remove y pop', descripcion: 'Eliminando elementos:', codigo: "nums = [10, 20, 30, 20]\nnums.remove(20)   # Elimina el primer 20\nprint(nums)        # [10, 30, 20]\nultimo = nums.pop()\nprint(ultimo)      # 20\nprint(nums)        # [10, 30]" },
    { tipo: 'explicacion', titulo: 'Ordenar y revertir', texto: '`sort()` ordena la lista de menor a mayor. `reverse()` invierte el orden de los elementos. Ambos modifican la lista original.' },
    { tipo: 'ejemplo', titulo: 'sort y reverse', descripcion: 'Ordenando y revirtiendo:', codigo: "nums = [3, 1, 4, 1, 5]\nnums.sort()\nprint(nums)      # [1, 1, 3, 4, 5]\nnums.reverse()\nprint(nums)      # [5, 4, 3, 1, 1]" },
    { tipo: 'nota', texto: 'len(lista) devuelve la cantidad de elementos. No es un método, es una función, pero es esencial para trabajar con listas.' },
    { tipo: 'resumen', puntos: ['append() agrega al final', 'insert(pos, val) agrega en una posición', 'remove(val) elimina por valor', 'pop() elimina y devuelve el último', 'sort() ordena la lista'] },
  ],
  ejercicios: [
    {
      id: 'no-04-02-01',
      titulo: 'Agregar a una lista',
      descripcion: 'Crea `nums = [1, 2, 3]`, agrega el 4 con append y luego imprime la lista.',
      starter: 'nums = [1, 2, 3]\n# Agrega el 4\n',
      pistas: ["nums.append(4)\nprint(nums)"],
      explicacion: "append() agrega un elemento al final de la lista.",
      solucionOficial: 'nums = [1, 2, 3]\nnums.append(4)\nprint(nums)',
      validate: { type: 'output', expected: '[1, 2, 3, 4]' },
    },
    {
      id: 'no-04-02-02',
      titulo: 'Eliminar con pop',
      descripcion: 'Crea `nums = [10, 20, 30]`, elimina el último elemento con pop() e imprime el resultado.',
      starter: 'nums = [10, 20, 30]\n# Elimina el último\n',
      pistas: ["nums.pop()\nprint(nums)"],
      explicacion: "pop() sin índice elimina y devuelve el último elemento.",
      solucionOficial: 'nums = [10, 20, 30]\nnums.pop()\nprint(nums)',
      validate: { type: 'output', expected: '[10, 20]' },
    },
  ],
  cuestionario: [
    {
      id: 'no-04-02-q1',
      pregunta: '¿Qué hace `append()` en una lista?',
      opciones: ['Agrega al inicio', 'Agrega al final', 'Elimina el último', 'Ordena la lista'],
      correcta: 1,
      explicacion: 'append() agrega un elemento al final de la lista.',
    },
    {
      id: 'no-04-02-q2',
      pregunta: '¿Qué imprime?\n```\nnums = [2, 3, 1]\nnums.sort()\nprint(nums)\n```',
      opciones: ['[2, 3, 1]', '[1, 2, 3]', '[3, 2, 1]', 'Error'],
      correcta: 1,
      explicacion: 'sort() ordena la lista de menor a mayor.',
    },
  ],
};

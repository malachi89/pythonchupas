import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-02-02',
  titulo: 'Algoritmos de ordenamiento',
  descripcion: 'Aprende a implementar ordenamiento de burbuja y ordenamiento por selección.',
  duracionMinutos: 10,
  conceptosClave: ['bubble sort', 'selection sort', 'ordenamiento', 'complejidad O(n²)'],
  contenido: [
    { tipo: 'introduccion', texto: 'Ordenar datos es una de las operaciones más comunes en programación. Aunque Python tiene `sorted()`, es importante entender cómo funcionan los algoritmos por dentro.' },
    { tipo: 'explicacion', titulo: 'Bubble Sort (Ordenamiento de burbuja)', texto: 'Compara elementos adyacentes y los intercambia si están en el orden incorrecto. Los elementos más grandes "burbujean" hacia el final. Su complejidad es O(n²).' },
    { tipo: 'ejemplo', titulo: 'Bubble Sort', descripcion: 'Implementando bubble sort:', codigo: 'def bubble_sort(lista):\n    n = len(lista)\n    for i in range(n - 1):\n        for j in range(n - 1 - i):\n            if lista[j] > lista[j + 1]:\n                lista[j], lista[j + 1] = lista[j + 1], lista[j]\n    return lista\n\nprint(bubble_sort([64, 34, 25, 12, 22, 11, 90]))\n# [11, 12, 22, 25, 34, 64, 90]' },
    { tipo: 'explicacion', titulo: 'Selection Sort (Selección)', texto: 'Encuentra el elemento más pequeño y lo coloca en la primera posición, luego el segundo más pequeño en la segunda, etc. También es O(n²).' },
    { tipo: 'ejemplo', titulo: 'Selection Sort', descripcion: 'Implementando selection sort:', codigo: 'def selection_sort(lista):\n    n = len(lista)\n    for i in range(n):\n        min_idx = i\n        for j in range(i + 1, n):\n            if lista[j] < lista[min_idx]:\n                min_idx = j\n        lista[i], lista[min_idx] = lista[min_idx], lista[i]\n    return lista\n\nprint(selection_sort([29, 10, 14, 37, 13]))\n# [10, 13, 14, 29, 37]' },
    { tipo: 'nota', texto: 'Python tiene sorted() y list.sort() que son mucho más eficientes (Timsort, O(n log n)). Pero implementar algoritmos básicos ayuda a entender la lógica computacional.' },
    { tipo: 'resumen', puntos: ['Bubble sort: compara e intercambia adyacentes', 'Selection sort: selecciona el mínimo y lo coloca al inicio', 'Ambos tienen complejidad O(n²)', 'sorted() es la opción real, pero entender estos es educativo'] },
  ],
  ejercicios: [
    {
      id: 'av-02-02-01',
      titulo: 'Ordenar ascendente',
      descripcion: 'Implementa una función `ordenar(lista)` que use bubble sort para ordenar [3, 1, 4, 1, 5] e imprime el resultado.',
      starter: '# Implementa bubble sort\n',
      pistas: ["def ordenar(lista):\n    n = len(lista)\n    for i in range(n - 1):\n        for j in range(n - 1 - i):\n            if lista[j] > lista[j + 1]:\n                lista[j], lista[j + 1] = lista[j + 1], lista[j]\n    return lista\n\nprint(ordenar([3, 1, 4, 1, 5]))"],
      explicacion: "Bubble sort intercambia elementos adyacentes hasta ordenar la lista.",
      solucionOficial: 'def ordenar(lista):\n    n = len(lista)\n    for i in range(n - 1):\n        for j in range(n - 1 - i):\n            if lista[j] > lista[j + 1]:\n                lista[j], lista[j + 1] = lista[j + 1], lista[j]\n    return lista\n\nprint(ordenar([3, 1, 4, 1, 5]))',
      validate: { type: 'output', expected: '[1, 1, 3, 4, 5]' },
    },
    {
      id: 'av-02-02-02',
      titulo: 'Orden descendente',
      descripcion: 'Modifica bubble sort para ordenar de mayor a menor. Pruébalo con [4, 2, 7, 1].',
      starter: '# Orden descendente\n',
      pistas: ["def ordenar_desc(lista):\n    n = len(lista)\n    for i in range(n - 1):\n        for j in range(n - 1 - i):\n            if lista[j] < lista[j + 1]:\n                lista[j], lista[j + 1] = lista[j + 1], lista[j]\n    return lista\n\nprint(ordenar_desc([4, 2, 7, 1]))"],
      explicacion: "Cambiar > por < en la comparación invierte el orden.",
      solucionOficial: 'def ordenar_desc(lista):\n    n = len(lista)\n    for i in range(n - 1):\n        for j in range(n - 1 - i):\n            if lista[j] < lista[j + 1]:\n                lista[j], lista[j + 1] = lista[j + 1], lista[j]\n    return lista\n\nprint(ordenar_desc([4, 2, 7, 1]))',
      validate: { type: 'output', expected: '[7, 4, 2, 1]' },
    },
  ],
  cuestionario: [
    {
      id: 'av-02-02-q1',
      pregunta: '¿Qué complejidad tienen bubble sort y selection sort?',
      opciones: ['O(n)', 'O(n log n)', 'O(n²)', 'O(1)'],
      correcta: 2,
      explicacion: 'Ambos algoritmos tienen complejidad cuadrática O(n²).',
    },
    {
      id: 'av-02-02-q2',
      pregunta: '¿Cuál es la función de ordenamiento de Python?',
      opciones: ['list.organize()', 'sorted() o list.sort()', 'list.order()', 'Python no tiene función de ordenamiento'],
      correcta: 1,
      explicacion: 'sorted() devuelve una nueva lista, list.sort() ordena in-place.',
    },
  ],
};

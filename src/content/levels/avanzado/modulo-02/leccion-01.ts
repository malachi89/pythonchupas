import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-02-01',
  titulo: 'Búsqueda lineal y binaria',
  descripcion: 'Aprende dos algoritmos de búsqueda fundamentales: búsqueda lineal y búsqueda binaria.',
  duracionMinutos: 10,
  conceptosClave: ['búsqueda lineal', 'búsqueda binaria', 'complejidad', 'divide y vencerás'],
  contenido: [
    { tipo: 'introduccion', texto: 'Los algoritmos de búsqueda permiten encontrar elementos dentro de colecciones. La búsqueda lineal es simple pero lenta para grandes datos; la binaria es mucho más rápida pero requiere datos ordenados.' },
    { tipo: 'explicacion', titulo: 'Búsqueda lineal', texto: 'Recorre cada elemento uno por uno hasta encontrar el objetivo. Es simple pero tiene complejidad O(n). Funciona con datos ordenados o desordenados.' },
    { tipo: 'ejemplo', titulo: 'Búsqueda lineal', descripcion: 'Implementando búsqueda lineal:', codigo: 'def busqueda_lineal(lista, objetivo):\n    for i, elemento in enumerate(lista):\n        if elemento == objetivo:\n            return i\n    return -1\n\ndatos = [4, 2, 7, 1, 9, 5]\nprint(busqueda_lineal(datos, 7))  # 2\nprint(busqueda_lineal(datos, 3))  # -1' },
    { tipo: 'explicacion', titulo: 'Búsqueda binaria', texto: 'La búsqueda binaria divide el arreglo ordenado a la mitad en cada paso. Compara el elemento del medio con el objetivo y descarta la mitad que no puede contener el valor.' },
    { tipo: 'ejemplo', titulo: 'Búsqueda binaria', descripcion: 'Implementando búsqueda binaria:', codigo: 'def busqueda_binaria(lista, objetivo):\n    izquierda, derecha = 0, len(lista) - 1\n    while izquierda <= derecha:\n        medio = (izquierda + derecha) // 2\n        if lista[medio] == objetivo:\n            return medio\n        elif lista[medio] < objetivo:\n            izquierda = medio + 1\n        else:\n            derecha = medio - 1\n    return -1\n\ndatos = [1, 3, 5, 7, 9, 11, 13]\nprint(busqueda_binaria(datos, 7))   # 3\nprint(busqueda_binaria(datos, 2))   # -1' },
    { tipo: 'nota', texto: 'La búsqueda binaria tiene complejidad O(log n), mucho más rápida que O(n) de la búsqueda lineal. Sin embargo, requiere que los datos estén ordenados.' },
    { tipo: 'resumen', puntos: ['Búsqueda lineal: O(n), funciona siempre', 'Búsqueda binaria: O(log n), requiere datos ordenados', 'Binaria divide el espacio de búsqueda a la mitad cada paso', 'La ordenación es clave para la eficiencia'] },
  ],
  ejercicios: [
    {
      id: 'av-02-01-01',
      titulo: 'Buscar con for',
      descripcion: 'Escribe una función `buscar(lista, objetivo)` que retorne el índice si existe o -1 si no. Búsqueda lineal.',
      starter: '# Define buscar y pruébala\n',
      pistas: ["def buscar(lista, objetivo):\n    for i, v in enumerate(lista):\n        if v == objetivo:\n            return i\n    return -1\n\nprint(buscar([1, 3, 5, 7], 5))"],
      explicacion: "La búsqueda lineal recorre la lista hasta encontrar el elemento.",
      solucionOficial: 'def buscar(lista, objetivo):\n    for i, v in enumerate(lista):\n        if v == objetivo:\n            return i\n    return -1\n\nprint(buscar([1, 3, 5, 7], 5))',
      validate: { type: 'output', expected: '2' },
    },
    {
      id: 'av-02-01-02',
      titulo: 'Esta en lista?',
      descripcion: 'Escribe una función `contiene(lista, objetivo)` que retorne True si el objetivo está en la lista (sin usar "in").',
      starter: '# Define contiene y pruébala\n',
      pistas: ["def contiene(lista, objetivo):\n    for elemento in lista:\n        if elemento == objetivo:\n            return True\n    return False\n\nprint(contiene([10, 20, 30], 20))"],
      explicacion: "Itera la lista y retorna True si encuentra el elemento.",
      solucionOficial: 'def contiene(lista, objetivo):\n    for elemento in lista:\n        if elemento == objetivo:\n            return True\n    return False\n\nprint(contiene([10, 20, 30], 20))',
      validate: { type: 'output', expected: 'True' },
    },
  ],
  cuestionario: [
    {
      id: 'av-02-01-q1',
      pregunta: 'Qué requisito necesita la búsqueda binaria?',
      opciones: ['Datos pequeños', 'Datos ordenados', 'Datos sin duplicados', 'Datos enteros'],
      correcta: 1,
      explicacion: 'La búsqueda binaria requiere que los datos estén ordenados.',
    },
    {
      id: 'av-02-01-q2',
      pregunta: '¿Qué complejidad tiene la búsqueda binaria?',
      opciones: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
      correcta: 1,
      explicacion: 'La búsqueda binaria tiene complejidad O(log n).',
    },
  ],
};

import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-03-01',
  titulo: 'Introducción a List Comprehensions',
  descripcion: 'Aprende a crear listas de forma concisa usando list comprehensions.',
  duracionMinutos: 10,
  conceptosClave: ['list comprehension', 'comprensión de listas', 'sintaxis concisa', 'transformación de datos'],
  contenido: [
    { tipo: 'introduccion', texto: 'Las list comprehensions son una forma elegante y concisa de crear listas en Python. Reemplazan bucles for tradicionales con una sintaxis más compacta.' },
    { tipo: 'explicacion', titulo: 'Sintaxis básica', texto: 'La sintaxis es: `[expresión for elemento in iterable]`. La expresión es el valor que se agrega a la lista, y el for itera sobre la fuente de datos.' },
    { tipo: 'ejemplo', titulo: 'List comprehension básica', descripcion: 'Comparando for tradicional vs comprehension:', codigo: '# For tradicional\ncuadrados = []\nfor x in range(6):\n    cuadrados.append(x**2)\nprint(cuadrados)  # [0, 1, 4, 9, 16, 25]\n\n# List comprehension\ncuadrados = [x**2 for x in range(6)]\nprint(cuadrados)  # [0, 1, 4, 9, 16, 25]' },
    { tipo: 'explicacion', titulo: 'Transformar datos', texto: 'Puedes aplicar cualquier expresión a cada elemento. Es ideal para transformar datos de una forma a otra.' },
    { tipo: 'ejemplo', titulo: 'Transformaciones', descripcion: 'Aplicando operaciones a cada elemento:', codigo: "nums = [1, 2, 3, 4, 5]\ndobles = [n * 2 for n in nums]\nprint(dobles)  # [2, 4, 6, 8, 10]\n\npalabras = ['hola', 'mundo', 'python']\nmayus = [p.upper() for p in palabras]\nprint(mayus)  # ['HOLA', 'MUNDO', 'PYTHON']" },
    { tipo: 'nota', texto: 'Las list comprehensions son más rápidas que los bucles for tradicionales en Python porque están optimizadas internamente.' },
    { tipo: 'resumen', puntos: ['[expr for elem in iterable] crea una lista', 'Más conciso que un for tradicional', 'Ideal para transformar colecciones', 'Más rápido que bucles for normales'] },
  ],
  ejercicios: [
    {
      id: 'in-03-01-01',
      titulo: 'Cuadrados con comprehension',
      descripcion: 'Usa una list comprehension para crear una lista de cuadrados de 0 a 9. Imprime la lista.',
      starter: '# Crea la lista con comprehension\n',
      pistas: ["print([x**2 for x in range(10)])"],
      explicacion: "x**2 es la expresión que se aplica a cada x en el rango.",
      solucionOficial: 'print([x**2 for x in range(10)])',
      validate: { type: 'output', expected: '[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]' },
    },
    {
      id: 'in-03-01-02',
      titulo: 'Mayúsculas con comprehension',
      descripcion: "Crea `frutas = ['manzana', 'pera', 'uva']` y crea una lista con los nombres en mayúsculas.",
      starter: "frutas = ['manzana', 'pera', 'uva']\n# Crea lista en mayúsculas\n",
      pistas: ["print([f.upper() for f in frutas])"],
      explicacion: "f.upper() se aplica a cada fruta en la lista original.",
      solucionOficial: "frutas = ['manzana', 'pera', 'uva']\nprint([f.upper() for f in frutas])",
      validate: { type: 'output', expected: "['MANZANA', 'PERA', 'UVA']" },
    },
  ],
  cuestionario: [
    {
      id: 'in-03-01-q1',
      pregunta: '¿Cuál es la sintaxis de un list comprehension?',
      opciones: ['[expr for variable in iterable]', 'for variable in iterable: expr', 'list(expr for variable)', 'iterable.map(expr)'],
      correcta: 0,
      explicacion: 'La sintaxis es [expresión for variable in iterable].',
    },
    {
      id: 'in-03-01-q2',
      pregunta: "¿Qué imprime?\n```\nprint([len(p) for p in ['sol', 'luna', 'mar']])\n```",
      opciones: ["[3, 4, 3]", "['sol', 'luna', 'mar']", 'Error', "[3, 4, 3]"],
      correcta: 0,
      explicacion: 'len(cadena) da la longitud: sol=3, luna=4, mar=3.',
    },
  ],
};

import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-05-01',
  titulo: 'Tuplas: colecciones inmutables',
  descripcion: 'Aprende qué son las tuplas y cómo se diferencian de las listas.',
  duracionMinutos: 10,
  conceptosClave: ['tuplas', 'inmutabilidad', 'empaquetado', 'desempaquetado', 'tuple'],
  contenido: [
    { tipo: 'introduccion', texto: 'Las tuplas son como listas, pero inmutables: una vez creadas, no puedes modificarlas. Son ideales para datos que no deben cambiar.' },
    { tipo: 'explicacion', titulo: 'Crear tuplas', texto: 'Las tuplas se crean con paréntesis `()` o incluso sin ellos (separando por comas). Una tupla con un solo elemento necesita una coma al final.' },
    { tipo: 'ejemplo', titulo: 'Creando tuplas', descripcion: 'Diferentes formas:', codigo: "vacia = ()\nun_elemento = (42,)  # coma obligatoria\nvarios = (1, 2, 3)\nsin_parentesis = 1, 2, 3\nprint(type(sin_parentesis))  # <class 'tuple'>" },
    { tipo: 'explicacion', titulo: 'Acceso y slicing', texto: 'Se accede igual que con listas: por índice, con slicing, y con índices negativos. Pero no puedes modificar elementos.' },
    { tipo: 'ejemplo', titulo: 'Tuplas son inmutables', descripcion: 'Intentar modificar una tupla da error:', codigo: "tupla = (10, 20, 30)\nprint(tupla[1])    # 20\ntupla[1] = 25  # TypeError: 'tuple' object does not support item assignment" },
    { tipo: 'explicacion', titulo: 'Desempaquetado de tuplas', texto: 'Puedes asignar los elementos de una tupla a variables en una línea. Es una de las características más útiles de las tuplas.' },
    { tipo: 'ejemplo', titulo: 'Desempaquetado', descripcion: 'Extrayendo valores:', codigo: "persona = ('Ana', 25, 'Madrid')\nnombre, edad, ciudad = persona\nprint(nombre)   # Ana\nprint(edad)     # 25\nprint(ciudad)   # Madrid" },
    { tipo: 'resumen', puntos: ['Tuplas se crean con () o solo comas', 'Son inmutables: no se pueden modificar', 'Soportan acceso por índice y slicing', 'El desempaquetado asigna elementos a variables'] },
  ],
  ejercicios: [
    {
      id: 'in-05-01-01',
      titulo: 'Crear y acceder',
      descripcion: "Crea una tupla `colores = ('rojo', 'verde', 'azul')` e imprime el segundo elemento.",
      starter: "# Crea la tupla y accede\n",
      pistas: ["colores = ('rojo', 'verde', 'azul')\nprint(colores[1])"],
      explicacion: "Las tuplas usan índices igual que las listas, empezando en 0.",
      solucionOficial: "colores = ('rojo', 'verde', 'azul')\nprint(colores[1])",
      validate: { type: 'output', expected: 'verde' },
    },
    {
      id: 'in-05-01-02',
      titulo: 'Desempaquetar tupla',
      descripcion: "Crea una tupla `datos = ('Ana', 25)` y desempaqueta sus valores en nombre y edad. Imprime nombre.",
      starter: "datos = ('Ana', 25)\n# Desempaqueta e imprime nombre\n",
      pistas: ["nombre, edad = datos\nprint(nombre)"],
      explicacion: "nombre, edad = tupla asigna cada elemento a su variable.",
      solucionOficial: "datos = ('Ana', 25)\nnombre, edad = datos\nprint(nombre)",
      validate: { type: 'output', expected: 'Ana' },
    },
  ],
  cuestionario: [
    {
      id: 'in-05-01-q1',
      pregunta: '¿Qué diferencia principal tienen las tuplas respecto a las listas?',
      opciones: ['Son más lentas', 'Son inmutables', 'No tienen índices', 'Solo guardan números'],
      correcta: 1,
      explicacion: 'Las tuplas no se pueden modificar después de creadas.',
    },
    {
      id: 'in-05-01-q2',
      pregunta: '¿Cómo se crea una tupla con un solo elemento?',
      opciones: ['(42)', 'tuple(42)', '(42,)', '42'],
      correcta: 2,
      explicacion: 'Se necesita una coma después del elemento: (42,).',
    },
  ],
};

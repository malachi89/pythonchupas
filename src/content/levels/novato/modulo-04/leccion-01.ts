import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'no-04-01',
  titulo: 'Creación y acceso a listas',
  descripcion: 'Aprende a crear listas y acceder a sus elementos por índice.',
  duracionMinutos: 10,
  conceptosClave: ['listas', 'índices', 'elementos', 'lista vacía'],
  contenido: [
    { tipo: 'introduccion', texto: 'Las listas son colecciones ordenadas que pueden guardar múltiples valores. Son uno de los tipos de datos más versátiles de Python.' },
    { tipo: 'explicacion', titulo: '¿Qué es una lista?', texto: 'Una lista se crea con corchetes `[]` y los elementos se separan por comas. Pueden contener cualquier tipo de dato, incluso mezclados.' },
    { tipo: 'ejemplo', titulo: 'Crear listas', descripcion: 'Diferentes formas de crear listas:', codigo: "nombres = ['Ana', 'Luis', 'Carlos']\nnumeros = [1, 2, 3, 4, 5]\nmixta = ['Hola', 42, 3.14, True]\nvacia = []\nprint(nombres, numeros, mixta, vacia)" },
    { tipo: 'explicacion', titulo: 'Acceder a elementos', texto: 'Los elementos se acceden por su índice, igual que en los strings. El primer elemento es el índice 0. Los índices negativos cuentan desde el final.' },
    { tipo: 'ejemplo', titulo: 'Acceso por índice', descripcion: 'Obteniendo elementos de una lista:', codigo: "colores = ['rojo', 'verde', 'azul']\nprint(colores[0])   # rojo\nprint(colores[2])   # azul\nprint(colores[-1])  # azul\nprint(colores[-2])  # verde" },
    { type: 'tabla-visual', titulo: 'Índices de lista', cabeceras: ['Elemento', "'rojo'", "'verde'", "'azul'"], filas: [['Índice +', '0', '1', '2'], ['Índice -', '-3', '-2', '-1']] },
    { tipo: 'explicacion', titulo: 'Modificar elementos', texto: 'Las listas son mutables: puedes cambiar un elemento asignando un nuevo valor a su índice.' },
    { tipo: 'ejemplo', titulo: 'Modificar lista', descripcion: 'Cambiando valores:', codigo: "colores = ['rojo', 'verde', 'azul']\ncolores[1] = 'amarillo'\nprint(colores)  # ['rojo', 'amarillo', 'azul']" },
    { tipo: 'resumen', puntos: ['Las listas se crean con []', 'Los índices empiezan en 0', 'colores[-1] accede al último elemento', 'Las listas son mutables: puedes cambiarlas'] },
  ],
  ejercicios: [
    {
      id: 'no-04-01-01',
      titulo: 'Acceder a elementos',
      descripcion: "Crea `frutas = ['manzana', 'pera', 'uva']` e imprime la primera fruta.",
      starter: "frutas = ['manzana', 'pera', 'uva']\n# Imprime la primera fruta\n",
      pistas: ["print(frutas[0])"],
      explicacion: "El primer elemento está en el índice 0.",
      solucionOficial: "frutas = ['manzana', 'pera', 'uva']\nprint(frutas[0])",
      validate: { type: 'output', expected: 'manzana' },
    },
    {
      id: 'no-04-01-02',
      titulo: 'Modificar lista',
      descripcion: "Crea `nums = [10, 20, 30]`, cambia el segundo elemento a 25 e imprime la lista.",
      starter: "nums = [10, 20, 30]\n# Cambia el segundo elemento a 25\nprint(nums)\n",
      pistas: ["nums[1] = 25"],
      explicacion: "Las listas permiten modificar elementos por su índice.",
      solucionOficial: "nums = [10, 20, 30]\nnums[1] = 25\nprint(nums)",
      validate: { type: 'output', expected: '[10, 25, 30]' },
    },
  ],
  cuestionario: [
    {
      id: 'no-04-01-q1',
      pregunta: "¿Qué imprime?\n```\nlista = ['a', 'b', 'c']\nprint(lista[2])\n```",
      opciones: ['a', 'b', 'c', 'Error'],
      correcta: 2,
      explicacion: 'El índice 2 es el tercer elemento: "c".',
    },
    {
      id: 'no-04-01-q2',
      pregunta: '¿Qué índice tiene el último elemento de una lista?',
      opciones: ['len(lista)', '-1', 'La longitud menos 1', 'Todas son correctas'],
      correcta: 3,
      explicacion: 'Puedes acceder al último con lista[-1] o lista[len(lista)-1].',
    },
  ],
};

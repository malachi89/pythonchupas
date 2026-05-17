import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'no-02-01',
  titulo: 'Introducción a los bucles for',
  descripcion: 'Aprende a repetir acciones usando el bucle for con range().',
  duracionMinutos: 10,
  conceptosClave: ['for', 'range()', 'iteración', 'bucle', 'repetición'],
  contenido: [
    { tipo: 'introduccion', texto: 'Los bucles `for` te permiten repetir código una cantidad determinada de veces. Es como decirle a Python: "haz esto N veces".' },
    { tipo: 'explicacion', titulo: '¿Qué es un bucle for?', texto: 'Un bucle `for` itera sobre una secuencia de elementos. Para repetir un número específico de veces, combinamos `for` con `range()`.' },
    { tipo: 'ejemplo', titulo: 'For básico con range', descripcion: 'Repitiendo 5 veces:', codigo: 'for i in range(5):\n    print(i)\n# 0, 1, 2, 3, 4' },
    { tipo: 'explicacion', titulo: 'La función range()', texto: '`range(n)` genera números del 0 al n-1. Puedes personalizarlo: `range(inicio, fin)` o `range(inicio, fin, paso)`.' },
    { tipo: 'tabla-visual', titulo: 'Variantes de range()', cabeceras: ['Llamada', 'Genera'], filras: [['range(5)', '0, 1, 2, 3, 4'], ['range(1, 6)', '1, 2, 3, 4, 5'], ['range(0, 10, 2)', '0, 2, 4, 6, 8'], ['range(5, 0, -1)', '5, 4, 3, 2, 1']] },
    { tipo: 'ejemplo', titulo: 'Range con inicio y fin', descripcion: 'Controla el rango:', codigo: 'for i in range(1, 4):\n    print(i)\n# 1, 2, 3\n\nfor i in range(0, 10, 2):\n    print(i)\n# 0, 2, 4, 6, 8' },
    { tipo: 'error-comun', titulo: 'Olvidar la indentación', codigoMal: 'for i in range(3):\nprint(i)', problema: 'El print debe estar indentado para estar dentro del bucle.', codigoBien: 'for i in range(3):\n    print(i)', solucion: 'Todo el código dentro del for debe tener indentación.' },
    { tipo: 'resumen', puntos: ['for repite código por cada elemento de una secuencia', 'range(n) genera números de 0 a n-1', 'range(inicio, fin, paso) da más control', 'El bloque del for debe ir indentado'] },
  ],
  ejercicios: [
    {
      id: 'no-02-01-01',
      titulo: 'Contar del 0 al 4',
      descripcion: 'Usa un bucle for con range(5) para imprimir los números del 0 al 4, cada uno en su línea.',
      starter: '# Escribe tu bucle for\n',
      pistas: ["for i in range(5):\n    print(i)"],
      explicacion: "range(5) genera 0, 1, 2, 3, 4 y el for itera sobre cada valor.",
      solucionOficial: 'for i in range(5):\n    print(i)',
      validate: { type: 'output', expected: '0\n1\n2\n3\n4' },
    },
    {
      id: 'no-02-01-02',
      titulo: 'Imprimir del 1 al 5',
      descripcion: 'Usa un bucle for con range(1, 6) para imprimir del 1 al 5.',
      starter: '# Escribe tu bucle for\n',
      pistas: ["for i in range(1, 6):\n    print(i)"],
      explicacion: "range(1, 6) genera números del 1 al 5.",
      solucionOficial: 'for i in range(1, 6):\n    print(i)',
      validate: { type: 'output', expected: '1\n2\n3\n4\n5' },
    },
  ],
  cuestionario: [
    {
      id: 'no-02-01-q1',
      pregunta: '¿Qué genera `range(4)`?',
      opciones: ['1, 2, 3, 4', '0, 1, 2, 3', '0, 1, 2, 3, 4', '4'],
      correcta: 1,
      explicacion: 'range(4) genera 0, 1, 2, 3 (4 números, del 0 al 3).',
    },
    {
      id: 'no-02-01-q2',
      pregunta: '¿Cuántas veces se ejecuta el print en:\n```\nfor i in range(3):\n    print("Hola")\n```',
      opciones: ['2', '3', '4', '1'],
      correcta: 1,
      explicacion: 'range(3) tiene 3 valores, así que se ejecuta 3 veces.',
    },
    {
      id: 'no-02-01-q3',
      pregunta: '¿Qué imprime?\n```\nfor i in range(3):\n    print(i)\n```',
      opciones: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3', '0, 0, 0'],
      correcta: 1,
      explicacion: 'range(3) da 0, 1, 2. Cada uno se imprime en su línea.',
    },
  ],
};

import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-03-02',
  titulo: 'List Comprehensions con condicionales',
  descripcion: 'Aprende a filtrar elementos en list comprehensions usando if.',
  duracionMinutos: 10,
  conceptosClave: ['filtro', 'if en comprehension', 'condicionales', 'filtrar datos'],
  contenido: [
    { tipo: 'introduccion', texto: 'Puedes agregar condicionales a las list comprehensions para filtrar elementos. Solo los elementos que cumplan la condición se incluirán en la nueva lista.' },
    { tipo: 'explicacion', titulo: 'Filtrar con if', texto: 'Agrega `if condición` al final del comprehension. Solo se incluyen los elementos para los que la condición sea True.' },
    { tipo: 'ejemplo', titulo: 'Filtrar números pares', descripcion: 'Comparando for vs comprehension con filtro:', codigo: '# For tradicional\npares = []\nfor x in range(10):\n    if x % 2 == 0:\n        pares.append(x)\nprint(pares)  # [0, 2, 4, 6, 8]\n\n# List comprehension\npares = [x for x in range(10) if x % 2 == 0]\nprint(pares)  # [0, 2, 4, 6, 8]' },
    { tipo: 'explicacion', titulo: 'If-else en comprehension', texto: 'También puedes usar un if-else ternario en la expresión (antes del for) para decidir qué valor agregar para cada elemento.' },
    { tipo: 'ejemplo', titulo: 'If-else ternario', descripcion: 'Decidiendo el valor según una condición:', codigo: 'nums = [1, 2, 3, 4, 5]\netiquetas = ["par" if n % 2 == 0 else "impar" for n in nums]\nprint(etiquetas)  # ["impar", "par", "impar", "par", "impar"]' },
    { tipo: 'explicacion', titulo: 'Comprehension con múltiples condiciones', texto: 'Puedes usar operadores lógicos (and, or) para combinar condiciones de filtro.' },
    { tipo: 'ejemplo', titulo: 'Filtros combinados', descripcion: 'Múltiples condiciones:', codigo: '# Números del 0 al 20 que son pares y mayores que 10\nresultado = [x for x in range(21) if x % 2 == 0 and x > 10]\nprint(resultado)  # [12, 14, 16, 18, 20]' },
    { tipo: 'resumen', puntos: ['[expr for x in it if cond] filtra elementos', 'El if va al final del comprehension', 'Usa if-else ternario en la expresión', 'Combina condiciones con and/or'] },
  ],
  ejercicios: [
    {
      id: 'in-03-02-01',
      titulo: 'Filtrar pares',
      descripcion: 'Usa una list comprehension para obtener los números pares del 0 al 20. Imprime la lista.',
      starter: '# Crea lista con comprehension\n',
      pistas: ["print([x for x in range(21) if x % 2 == 0])"],
      explicacion: "El if x % 2 == 0 filtra solo los números pares.",
      solucionOficial: 'print([x for x in range(21) if x % 2 == 0])',
      validate: { type: 'output', expected: '[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]' },
    },
    {
      id: 'in-03-02-02',
      titulo: 'Filtrar strings largos',
      descripcion: "Crea `palabras = ['sol', 'estrella', 'luna', 'universo']`. Crea una lista solo con las palabras de más de 4 letras.",
      starter: "palabras = ['sol', 'estrella', 'luna', 'universo']\n# Filtra palabras largas\n",
      pistas: ["print([p for p in palabras if len(p) > 4])"],
      explicacion: "len(p) > 4 filtra palabras con más de 4 caracteres.",
      solucionOficial: "palabras = ['sol', 'estrella', 'luna', 'universo']\nprint([p for p in palabras if len(p) > 4])",
      validate: { type: 'output', expected: "['estrella', 'universo']" },
    },
  ],
  cuestionario: [
    {
      id: 'in-03-02-q1',
      pregunta: "¿Qué imprime?\n```\nprint([x for x in range(6) if x > 2])\n```",
      opciones: ['[3, 4, 5]', '[0, 1, 2]', '[0, 1, 2, 3, 4, 5]', '[2, 3, 4, 5]'],
      correcta: 0,
      explicacion: 'Solo se incluyen números mayores que 2: [3, 4, 5].',
    },
    {
      id: 'in-03-02-q2',
      pregunta: "¿Qué imprime?\n```\nprint(['par' if n%2==0 else 'impar' for n in range(3)])\n```",
      opciones: ["['par', 'impar', 'par']", "['impar', 'par', 'impar']", "['par', 'par', 'impar']", 'Error'],
      correcta: 0,
      explicacion: '0 es par, 1 es impar, 2 es par → ["par", "impar", "par"].',
    },
  ],
};

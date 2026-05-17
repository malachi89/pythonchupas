import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-03-02',
  titulo: 'Generator expressions',
  descripcion: 'Aprende a crear generadores con una sintaxis compacta similar a list comprehensions.',
  duracionMinutos: 10,
  conceptosClave: ['generator expression', 'comprensión de generadores', 'paréntesis', 'lazy evaluation'],
  contenido: [
    { tipo: 'introduccion', texto: 'Las generator expressions son como list comprehensions pero con paréntesis en lugar de corchetes. La diferencia clave es que son perezosas (no crean la lista completa en memoria).' },
    { tipo: 'explicacion', titulo: 'Sintaxis', texto: 'Usas paréntesis en lugar de corchetes: `(expresión for elemento in iterable)`. Devuelve un objeto generador, no una lista.' },
    { tipo: 'ejemplo', titulo: 'List comprehension vs generator expression', descripcion: 'Comparando las dos sintaxis:', codigo: '# List comprehension (crea toda la lista en memoria)\ncuadrados_lista = [x**2 for x in range(10)]\nprint(cuadrados_lista)  # [0, 1, 4, 9, ...]\n\n# Generator expression (perezoso)\ncuadrados_gen = (x**2 for x in range(10))\nprint(cuadrados_gen)  # <generator object>\n\nfor val in cuadrados_gen:\n    print(val)  # 0, 1, 4, 9, ...' },
    { tipo: 'explicacion', titulo: 'Cuándo usar generator expressions', texto: 'Úsalas cuando trabajes con grandes cantidades de datos o cuando solo necesites iterar una vez. Son ideales como argumentos de funciones como sum(), min(), max().' },
    { tipo: 'ejemplo', titulo: 'Generator en funciones', descripcion: 'Pasando generator expressions directamente:', codigo: "# Sin crear listas intermedias\nsuma_cuadrados = sum(x**2 for x in range(100))\nprint(suma_cuadrados)  # 328350\n\n# Mínimo de pares al cuadrado\nmin_pares = min(x**2 for x in range(10) if x % 2 == 0)\nprint(min_pares)  # 0" },
    { tipo: 'nota', texto: 'Las generator expressions consumen menos memoria que las list comprehensions porque no construyen la colección completa. Sin embargo, solo se pueden iterar una vez.' },
    { tipo: 'resumen', puntos: ['(expr for x in it) crea un generador', 'Usa paréntesis, no corchetes', 'Perezoso: produce valores bajo demanda', 'Ideal para grandes datos o una sola iteración'] },
  ],
  ejercicios: [
    {
      id: 'av-03-02-01',
      titulo: 'Generator expression',
      descripcion: 'Crea una generator expression que produzca los cuadrados de 0 a 9. Pásala a sum() para sumarlos todos.',
      starter: '# Usa generator expression con sum\n',
      pistas: ["print(sum(x**2 for x in range(10)))"],
      explicacion: "sum(x**2 for x in range(10)) suma los cuadrados sin crear lista intermedia.",
      solucionOficial: 'print(sum(x**2 for x in range(10)))',
      validate: { type: 'output', expected: '285' },
    },
    {
      id: 'av-03-02-02',
      titulo: 'Filtrar con generator',
      descripcion: 'Usa una generator expression con `sum()` para sumar solo los números pares del 1 al 10.',
      starter: '# Suma pares con generator\n',
      pistas: ["print(sum(x for x in range(1, 11) if x % 2 == 0))"],
      explicacion: "El if filtra solo los pares antes de sumar.",
      solucionOficial: 'print(sum(x for x in range(1, 11) if x % 2 == 0))',
      validate: { type: 'output', expected: '30' },
    },
  ],
  cuestionario: [
    {
      id: 'av-03-02-q1',
      pregunta: '¿Cómo se diferencia una generator expression de una list comprehension?',
      opciones: ['Usa yield', 'Usa paréntesis en vez de corchetes', 'Usa llaves', 'Usa la palabra gen'],
      correcta: 1,
      explicacion: 'La generator expression usa paréntesis ( ), la list comprehension usa corchetes [ ].',
    },
    {
      id: 'av-03-02-q2',
      pregunta: '¿Qué ventaja tiene una generator expression sobre una list comprehension?',
      opciones: ['Es más rápida', 'Usa menos memoria', 'Es más legible', 'Puede iterarse múltiples veces'],
      correcta: 1,
      explicacion: 'Las generator expressions no almacenan todos los valores en memoria.',
    },
  ],
};

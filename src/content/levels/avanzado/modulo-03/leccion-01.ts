import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-03-01',
  titulo: 'Introducción a generadores con yield',
  descripcion: 'Aprende a crear generadores que producen valores bajo demanda usando yield.',
  duracionMinutos: 10,
  conceptosClave: ['generador', 'yield', 'iteración perezosa', 'estado suspendido', 'next()'],
  contenido: [
    { tipo: 'introduccion', texto: 'Los generadores son funciones especiales que pueden pausar su ejecución y reanudarla después. En lugar de devolver un solo valor con `return`, usan `yield` para producir una secuencia de valores.' },
    { tipo: 'explicacion', titulo: '¿Qué es un generador?', texto: 'Un generador es una función que usa `yield` en lugar de `return`. Cuando se llama, no se ejecuta inmediatamente: devuelve un objeto generador. Cada vez que llamas a `next()`, el código se ejecuta hasta el siguiente `yield`.' },
    { tipo: 'ejemplo', titulo: 'Generador básico', descripcion: 'Un generador simple:', codigo: "def mi_generador():\n    yield 1\n    yield 2\n    yield 3\n\ngen = mi_generador()\nprint(next(gen))  # 1\nprint(next(gen))  # 2\nprint(next(gen))  # 3\n# print(next(gen))  # StopIteration" },
    { tipo: 'explicacion', titulo: 'Generadores con bucles', texto: 'Los generadores se usan normalmente con bucles, que manejan automáticamente la excepción StopIteration.' },
    { tipo: 'ejemplo', titulo: 'Generador con for', descripcion: 'Iterando sobre un generador:', codigo: 'def contar_hasta(n):\n    for i in range(1, n + 1):\n        yield i\n\nfor num in contar_hasta(5):\n    print(num)\n# 1, 2, 3, 4, 5' },
    { tipo: 'explicacion', titulo: 'Ventajas de generadores', texto: 'Los generadores son perezosos (lazy): producen valores solo cuando se necesitan. No almacenan toda la secuencia en memoria. Ideales para grandes cantidades de datos.' },
    { tipo: 'nota', texto: 'Los generadores son una alternativa eficiente a crear listas enormes. Por ejemplo, `range(1000000)` es un generador, mientras que crear una lista con un millón de elementos consumiría mucha memoria.' },
    { tipo: 'resumen', puntos: ['yield pausa la función y produce un valor', 'Los generadores retoman su estado en la siguiente llamada', 'Son iterables: puedes usar for con ellos', 'Ventaja: no almacenan todos los valores en memoria'] },
  ],
  ejercicios: [
    {
      id: 'av-03-01-01',
      titulo: 'Generador de pares',
      descripcion: 'Crea un generador `pares(n)` que genere los números pares desde 0 hasta n (inclusive).',
      starter: '# Define el generador\n',
      pistas: ["def pares(n):\n    for i in range(0, n + 1, 2):\n        yield i\n\nfor p in pares(6):\n    print(p)"],
      explicacion: "El generador produce cada número par uno a uno con yield.",
      solucionOficial: 'def pares(n):\n    for i in range(0, n + 1, 2):\n        yield i\n\nfor p in pares(6):\n    print(p)',
      validate: { type: 'output', expected: '0\n2\n4\n6' },
    },
    {
      id: 'av-03-01-02',
      titulo: 'Generador infinito',
      descripcion: 'Crea un generador `naturales()` que genere números naturales (0, 1, 2, 3...) sin fin. Llámalo con next() 3 veces.',
      starter: '# Define el generador infinito\n',
      pistas: ["def naturales():\n    n = 0\n    while True:\n        yield n\n        n += 1\n\ngen = naturales()\nprint(next(gen))\nprint(next(gen))\nprint(next(gen))"],
      explicacion: "Los generadores pueden ser infinitos porque producen valores bajo demanda.",
      solucionOficial: 'def naturales():\n    n = 0\n    while True:\n        yield n\n        n += 1\n\ngen = naturales()\nprint(next(gen))\nprint(next(gen))\nprint(next(gen))',
      validate: { type: 'output', expected: '0\n1\n2' },
    },
  ],
  cuestionario: [
    {
      id: 'av-03-01-q1',
      pregunta: '¿Qué palabra clave distingue un generador de una función normal?',
      opciones: ['return', 'yield', 'await', 'generate'],
      correcta: 1,
      explicacion: 'La palabra clave yield hace que una función sea un generador.',
    },
    {
      id: 'av-03-01-q2',
      pregunta: '¿Qué ventaja tienen los generadores sobre las listas?',
      opciones: ['Son más rápidos', 'No almacenan todos los valores en memoria', 'Pueden modificar valores', 'Siempre son infinitos'],
      correcta: 1,
      explicacion: 'Los generadores producen valores bajo demanda sin almacenar toda la secuencia.',
    },
  ],
};

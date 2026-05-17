import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-03-03',
  titulo: 'Aplicaciones prácticas de generadores',
  descripcion: 'Aprende usos reales de generadores: pipelines de procesamiento, lectura de archivos y más.',
  duracionMinutos: 10,
  conceptosClave: ['pipeline', 'procesamiento perezoso', 'lectura de archivos', 'cadenas de generadores', 'delegación yield from'],
  contenido: [
    { tipo: 'introduccion', texto: 'Los generadores brillan en aplicaciones del mundo real: procesar archivos enormes, crear pipelines de datos y trabajar con flujos infinitos.' },
    { tipo: 'explicacion', titulo: 'Pipeline de generadores', texto: 'Puedes encadenar generadores para crear pipelines de procesamiento. Cada generador hace una transformación y pasa los datos al siguiente.' },
    { tipo: 'ejemplo', titulo: 'Pipeline de datos', descripcion: 'Encadenando generadores:', codigo: 'def numeros(n):\n    for i in range(n):\n        yield i\n\ndef pares(iterable):\n    for x in iterable:\n        if x % 2 == 0:\n            yield x\n\ndef al_cuadrado(iterable):\n    for x in iterable:\n        yield x ** 2\n\npipeline = al_cuadrado(pares(numeros(10)))\nprint(list(pipeline))  # [0, 4, 16, 36, 64]' },
    { tipo: 'explicacion', titulo: 'yield from — delegar a otro generador', texto: '`yield from` delega la producción de valores a otro generador. Es útil para combinar o aplanar generadores.' },
    { tipo: 'ejemplo', titulo: 'yield from', descripcion: 'Delegando generación:', codigo: 'def generador_a():\n    yield from range(3)\n\ndef generador_b():\n    yield from range(3, 6)\n\ndef combinado():\n    yield from generador_a()\n    yield from generador_b()\n\nprint(list(combinado()))  # [0, 1, 2, 3, 4, 5]' },
    { tipo: 'explicacion', titulo: 'Leer archivos grandes', texto: 'Los generadores permiten leer archivos línea por línea sin cargar todo en memoria.' },
    { tipo: 'ejemplo', titulo: 'Leer archivo', descripcion: 'Generador para leer archivos:', codigo: 'def leer_lineas(nombre_archivo):\n    with open(nombre_archivo) as f:\n        for linea in f:\n            yield linea.strip()\n\nfor linea in leer_lineas("datos.txt"):\n    print(linea)  # Una línea a la vez' },
    { tipo: 'resumen', puntos: ['Pipelines de generadores procesan datos en cadena', 'yield from delega a otro generador', 'Lectura perezosa de archivos', 'Los generadores permiten trabajar con datos que no caben en memoria'] },
  ],
  ejercicios: [
    {
      id: 'av-03-03-01',
      titulo: 'Pipeline pares al cubo',
      descripcion: 'Crea `numeros(n)` que genere 0..n. Crea un pipeline que filtre pares y eleve al cubo. Úsalo con n=6.',
      starter: '# Crea el pipeline\n',
      pistas: ["def numeros(n):\n    for i in range(n):\n        yield i\n\ndef pares(it):\n    for x in it:\n        if x % 2 == 0:\n            yield x\n\ndef cubo(it):\n    for x in it:\n        yield x ** 3\n\nresultado = cubo(pares(numeros(6)))\nprint(list(resultado))"],
      explicacion: "Los generadores se encadenan: datos fluyen de numeros -> pares -> cubo.",
      solucionOficial: 'def numeros(n):\n    for i in range(n):\n        yield i\n\ndef pares(it):\n    for x in it:\n        if x % 2 == 0:\n            yield x\n\ndef cubo(it):\n    for x in it:\n        yield x ** 3\n\nresultado = cubo(pares(numeros(6)))\nprint(list(resultado))',
      validate: { type: 'output', expected: '[0, 8, 64]' },
    },
    {
      id: 'av-03-03-02',
      titulo: 'Yield from',
      descripcion: 'Crea un generador `abc()` que use yield from para producir "a", "b", "c". Llámalo y convierte a lista.',
      starter: '# Usa yield from\n',
      pistas: ["def abc():\n    yield from 'abc'\n\nprint(list(abc()))"],
      explicacion: "yield from 'abc' delega cada carácter individualmente.",
      solucionOficial: "def abc():\n    yield from 'abc'\n\nprint(list(abc()))",
      validate: { type: 'output', expected: "['a', 'b', 'c']" },
    },
  ],
  cuestionario: [
    {
      id: 'av-03-03-q1',
      pregunta: '¿Qué hace `yield from` en un generador?',
      opciones: ['Repite el último yield', 'Delega la generación a otro iterable', 'Convierte en lista', 'Termina el generador'],
      correcta: 1,
      explicacion: 'yield from delega la producción de valores a otro iterable o generador.',
    },
    {
      id: 'av-03-03-q2',
      pregunta: '¿Por qué los generadores son ideales para leer archivos grandes?',
      opciones: ['Son más rápidos', 'No cargan todo el archivo en memoria', 'Pueden modificar el archivo', 'Solo leen archivos de texto'],
      correcta: 1,
      explicacion: 'Los generadores procesan línea por línea sin cargar todo el archivo.',
    },
  ],
};

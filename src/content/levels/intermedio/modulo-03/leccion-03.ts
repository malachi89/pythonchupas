import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-03-03',
  titulo: 'Dict y Set Comprehensions',
  descripcion: 'Aprende a usar comprensiones para diccionarios y conjuntos.',
  duracionMinutos: 10,
  conceptosClave: ['dict comprehension', 'set comprehension', 'comprensión', 'generación de datos'],
  contenido: [
    { tipo: 'introduccion', texto: 'Python también ofrece comprensiones para diccionarios y conjuntos (sets). Funcionan igual que las list comprehensions pero producen otros tipos de colecciones.' },
    { tipo: 'explicacion', titulo: 'Dict comprehension', texto: 'Se usa `{clave: valor for elemento in iterable}`. Debes especificar tanto la clave como el valor separados por dos puntos.' },
    { tipo: 'ejemplo', titulo: 'Dict comprehension básico', descripcion: 'Creando diccionarios:', codigo: '# Número como clave, cuadrado como valor\ncuadrados = {x: x**2 for x in range(5)}\nprint(cuadrados)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}\n\n# String como clave, longitud como valor\npalabras = ["sol", "luna", "mar"]\nlongitudes = {p: len(p) for p in palabras}\nprint(longitudes)  # {"sol": 3, "luna": 4, "mar": 3}' },
    { tipo: 'explicacion', titulo: 'Set comprehension', texto: 'Se usa `{elemento for elemento in iterable}`. Los sets eliminan duplicados automáticamente.' },
    { tipo: 'ejemplo', titulo: 'Set comprehension', descripcion: 'Creando conjuntos:', codigo: 'numeros = [1, 2, 2, 3, 3, 3, 4]\nunicos = {x for x in numeros}\nprint(unicos)  # {1, 2, 3, 4}\n\npares_set = {x for x in range(10) if x % 2 == 0}\nprint(pares_set)  # {0, 2, 4, 6, 8}' },
    { tipo: 'nota', texto: 'Los dict y set comprehensions se crean con llaves {}. Python sabe cuál es cuál por la presencia de los dos puntos (:) en los dict.' },
    { tipo: 'resumen', puntos: ['{k: v for ...} crea diccionarios', '{elem for ...} crea sets (sin duplicados)', 'Ambos soportan if de filtro', 'Los dict necesitan clave: valor'] },
  ],
  ejercicios: [
    {
      id: 'in-03-03-01',
      titulo: 'Dict comprehension',
      descripcion: 'Usa dict comprehension para crear un diccionario donde las claves sean números del 0 al 4 y los valores sean su doble.',
      starter: '# Crea el diccionario\n',
      pistas: ["print({x: x*2 for x in range(5)})"],
      explicacion: "x es la clave, x*2 es el valor para cada x en el rango.",
      solucionOficial: 'print({x: x*2 for x in range(5)})',
      validate: { type: 'output', expected: '{0: 0, 1: 2, 2: 4, 3: 6, 4: 8}' },
    },
    {
      id: 'in-03-03-02',
      titulo: 'Eliminar duplicados',
      descripcion: 'Crea `nums = [1, 2, 2, 3, 3, 3]` y usa un set comprehension para obtener los únicos.',
      starter: 'nums = [1, 2, 2, 3, 3, 3]\n# Crea un set con los únicos\n',
      pistas: ["print({x for x in nums})"],
      explicacion: "El set elimina automáticamente los duplicados.",
      solucionOficial: 'nums = [1, 2, 2, 3, 3, 3]\nprint({x for x in nums})',
      validate: { type: 'output', expected: '{1, 2, 3}' },
    },
  ],
  cuestionario: [
    {
      id: 'in-03-03-q1',
      pregunta: '¿Qué produce `{x: x**2 for x in range(3)}`?',
      opciones: ['Un set', 'Un diccionario', 'Una lista', 'Una tupla'],
      correcta: 1,
      explicacion: 'Los dos puntos indican que es un dict comprehension.',
    },
    {
      id: 'in-03-03-q2',
      pregunta: '¿Qué ventaja tiene un set sobre una lista?',
      opciones: ['Está ordenado', 'No tiene duplicados', 'Es más rápido para acceder por índice', 'Puede tener claves'],
      correcta: 1,
      explicacion: 'Los sets eliminan automáticamente elementos duplicados.',
    },
  ],
};

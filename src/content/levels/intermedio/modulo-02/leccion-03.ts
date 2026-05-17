import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-02-03',
  titulo: 'Diccionarios anidados y usos avanzados',
  descripcion: 'Aprende a trabajar con diccionarios dentro de diccionarios y usos prácticos avanzados.',
  duracionMinutos: 10,
  conceptosClave: ['diccionarios anidados', 'comprensión de diccionarios', 'aplicaciones'],
  contenido: [
    { tipo: 'introduccion', texto: 'Los diccionarios pueden contener otros diccionarios como valores. Esto permite representar datos jerárquicos como bases de datos, configuraciones o JSON.' },
    { tipo: 'explicacion', titulo: 'Diccionarios anidados', texto: 'Un diccionario puede tener como valor otro diccionario. Accedes a los valores internos encadenando corchetes.' },
    { tipo: 'ejemplo', titulo: 'Anidamiento', descripcion: 'Diccionarios dentro de diccionarios:', codigo: "estudiantes = {\n    'ana': {'edad': 25, 'curso': 'Python'},\n    'luis': {'edad': 22, 'curso': 'Java'}\n}\nprint(estudiantes['ana']['curso'])  # Python\nprint(estudiantes['luis']['edad'])  # 22" },
    { tipo: 'explicacion', titulo: 'Contar elementos con diccionarios', texto: 'Los diccionarios son excelentes para contar frecuencias. Usas cada elemento como clave y su conteo como valor.' },
    { tipo: 'ejemplo', titulo: 'Contador con dict', descripcion: 'Contando frecuencias manualmente:', codigo: 'texto = "pythonchupas"\ncontador = {}\nfor letra in texto:\n    if letra in contador:\n        contador[letra] += 1\n    else:\n        contador[letra] = 1\nprint(contador)\n# {"p": 2, "y": 1, "t": 1, "h": 2, "o": 1, "n": 1, "c": 1, "u": 1, "a": 1, "s": 1}' },
    { tipo: 'explicacion', titulo: 'Comprensión de diccionarios', texto: 'Similar a list comprehensions, puedes crear diccionarios en una línea con la sintaxis `{clave: valor for elemento in iterable}`.' },
    { tipo: 'ejemplo', titulo: 'Dict comprehension', descripcion: 'Creando diccionarios de forma concisa:', codigo: "# Cuadrados\ncuadrados = {x: x**2 for x in range(5)}\nprint(cuadrados)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 4}\n\n# Filtrar\npares = {x: x**2 for x in range(10) if x % 2 == 0}\nprint(pares)  # {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}" },
    { tipo: 'resumen', puntos: ['Los diccionarios pueden anidarse', 'Úsalo para contar frecuencias', 'Dict comprehensions: {k: v for ...}', 'Son la base de JSON y datos estructurados'] },
  ],
  ejercicios: [
    {
      id: 'in-02-03-01',
      titulo: 'Acceder a diccionario anidado',
      descripcion: "Crea un diccionario anidado con dos gatos: 'vitola' (edad 7, color gris) y 'rex' (edad 3, color negro). Imprime el color de vitola.",
      starter: "# Crea el diccionario anidado\n",
      pistas: ["gatos = {\n    'vitola': {'edad': 7, 'color': 'gris'},\n    'rex': {'edad': 3, 'color': 'negro'}\n}\nprint(gatos['vitola']['color'])"],
      explicacion: "Un diccionario anidado tiene diccionarios como valores. Accedes con clave[subclave].",
      solucionOficial: "gatos = {\n    'vitola': {'edad': 7, 'color': 'gris'},\n    'rex': {'edad': 3, 'color': 'negro'}\n}\nprint(gatos['vitola']['color'])",
      validate: { type: 'output', expected: 'gris' },
    },
    {
      id: 'in-02-03-02',
      titulo: 'Contar letras con dict',
      descripcion: 'Cuenta cuántas veces aparece cada letra en "banana" usando un diccionario e imprime el resultado.',
      starter: "texto = 'banana'\n# Cuenta las letras\n",
      pistas: ["contador = {}\nfor letra in texto:\n    contador[letra] = contador.get(letra, 0) + 1\nprint(contador)"],
      explicacion: "get() con default 0 evita el if/else en conteos.",
      solucionOficial: "texto = 'banana'\ncontador = {}\nfor letra in texto:\n    contador[letra] = contador.get(letra, 0) + 1\nprint(contador)",
      validate: { type: 'output', expected: "{'b': 1, 'a': 3, 'n': 2}" },
    },
  ],
  cuestionario: [
    {
      id: 'in-02-03-q1',
      pregunta: '¿Cómo accedes a un valor en un diccionario anidado?',
      opciones: ['dict(clave, subclave)', 'dict[clave][subclave]', 'dict.clave.subclave', 'dict[key1][key2]'],
      correcta: 3,
      explicacion: 'Se encadenan corchetes: dict[clave_externa][clave_interna].',
    },
    {
      id: 'in-02-03-q2',
      pregunta: '¿Qué hace esta comprensión?\n```\n{x: x*2 for x in range(4)}\n```',
      opciones: ['{0:0, 1:2, 2:4, 3:6}', '{0:0, 1:1, 2:2, 3:3}', '[0, 2, 4, 6]', '{0, 2, 4, 6}'],
      correcta: 0,
      explicacion: 'Crea {0:0, 1:2, 2:4, 3:6} con x como clave y x*2 como valor.',
    },
  ],
};

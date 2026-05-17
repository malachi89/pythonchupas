import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-04-01',
  titulo: 'Introducción a F-Strings',
  descripcion: 'Aprende a usar f-strings para incrustar expresiones dentro de cadenas de texto.',
  duracionMinutos: 10,
  conceptosClave: ['f-strings', 'interpolación', 'expresiones en strings', 'formato moderno'],
  contenido: [
    { tipo: 'introduccion', texto: 'Los f-strings (formatted strings) son la forma más moderna y legible de incluir variables y expresiones dentro de strings. Se introdujeron en Python 3.6.' },
    { tipo: 'explicacion', titulo: 'Sintaxis de f-strings', texto: 'Se crean anteponiendo `f` o `F` a las comillas. Dentro del string, usas `{variable}` o `{expresión}` para insertar valores.' },
    { tipo: 'ejemplo', titulo: 'F-string básico', descripcion: 'Comparación entre formatos antiguos y f-string:', codigo: "nombre = 'Ana'\nedad = 25\n\n# Forma antigua con +\nprint('Hola, ' + nombre + ', tienes ' + str(edad) + ' años')\n\n# Con f-string\nprint(f'Hola, {nombre}, tienes {edad} años')\n\n# ¡Mucho más limpio!" },
    { tipo: 'explicacion', titulo: 'Expresiones dentro de f-strings', texto: 'Puedes poner cualquier expresión Python válida entre las llaves: operaciones matemáticas, llamadas a funciones, métodos, etc.' },
    { tipo: 'ejemplo', titulo: 'Expresiones en f-strings', descripcion: 'Usando expresiones dentro de f-strings:', codigo: "a, b = 5, 3\nprint(f'{a} + {b} = {a + b}')  # 5 + 3 = 8\n\nnombre = 'python'\nprint(f'{nombre.upper()} tiene {len(nombre)} letras')\n# PYTHON tiene 6 letras" },
    { tipo: 'nota', texto: 'Los f-strings son más rápidos que las alternativas como format() o la concatenación con +.' },
    { tipo: 'resumen', puntos: ['f"texto {variable}" interpola variables', 'Acepta cualquier expresión en {}', 'Más legible que concatenar con +', 'Disponible desde Python 3.6'] },
  ],
  ejercicios: [
    {
      id: 'in-04-01-01',
      titulo: 'F-string básico',
      descripcion: "Crea `nombre = 'Chubeta'` y `edad = 7`. Usa un f-string para imprimir `Chubeta tiene 7 años`.",
      starter: "nombre = 'Chubeta'\nedad = 7\n# Usa f-string\n",
      pistas: ["print(f'{nombre} tiene {edad} años')"],
      explicacion: "Las variables se insertan directamente entre llaves dentro del f-string.",
      solucionOficial: "nombre = 'Chubeta'\nedad = 7\nprint(f'{nombre} tiene {edad} años')",
      validate: { type: 'output', expected: 'Chubeta tiene 7 años' },
    },
    {
      id: 'in-04-01-02',
      titulo: 'Expresión en f-string',
      descripcion: "Crea `x = 10` y `y = 20`. Usa un f-string que muestre `10 + 20 = 30` (calculando la suma dentro del f-string).",
      starter: 'x = 10\ny = 20\n# Usa f-string con expresión\n',
      pistas: ["print(f'{x} + {y} = {x + y}')"],
      explicacion: "Puedes poner expresiones matemáticas directamente entre llaves.",
      solucionOficial: 'x = 10\ny = 20\nprint(f\'{x} + {y} = {x + y}\')',
      validate: { type: 'output', expected: '10 + 20 = 30' },
    },
  ],
  cuestionario: [
    {
      id: 'in-04-01-q1',
      pregunta: '¿Qué carácter se usa antes de las comillas para crear un f-string?',
      opciones: ['s', 'f', 'i', 'n'],
      correcta: 1,
      explicacion: 'Se antepone f (o F) a las comillas: f"..." o f\'...\'.',
    },
    {
      id: 'in-04-01-q2',
      pregunta: '¿Qué imprime?\n```\nn = 7\nprint(f"El {n} al cuadrado es {n**2}")\n```',
      opciones: ['El 7 al cuadrado es 14', 'El 7 al cuadrado es 49', 'El n al cuadrado es n**2', 'Error'],
      correcta: 1,
      explicacion: '{n} se reemplaza por 7 y {n**2} se evalúa como 49.',
    },
  ],
};

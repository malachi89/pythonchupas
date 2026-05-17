import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-01-03',
  titulo: 'Funciones lambda',
  descripcion: 'Aprende a crear funciones anónimas y compactas con lambda.',
  duracionMinutos: 10,
  conceptosClave: ['lambda', 'funciones anónimas', 'funciones de una línea', 'alta orden'],
  contenido: [
    { tipo: 'introduccion', texto: 'Las funciones lambda son funciones pequeñas y anónimas que se definen en una sola línea. Son ideales para operaciones simples que no merecen una función completa.' },
    { tipo: 'explicacion', titulo: 'Sintaxis de lambda', texto: 'La sintaxis es `lambda parámetros: expresión`. No lleva return, la expresión se evalúa y devuelve automáticamente. Solo puede contener una expresión.' },
    { tipo: 'ejemplo', titulo: 'Lambda básica', descripcion: 'Comparación entre función normal y lambda:', codigo: '# Función normal\ndef cuadrado(n):\n    return n ** 2\n\n# Lambda equivalente\ncuadrado_lambda = lambda n: n ** 2\n\nprint(cuadrado(5))        # 25\nprint(cuadrado_lambda(5)) # 25' },
    { tipo: 'explicacion', titulo: 'Lambda con varios parámetros', texto: 'Las lambdas pueden tener varios parámetros separados por comas. La expresión siempre es una sola.' },
    { tipo: 'ejemplo', titulo: 'Lambda con múltiples parámetros', descripcion: 'Más ejemplos de lambdas:', codigo: 'suma = lambda a, b: a + b\nprint(suma(3, 4))  # 7\n\narea = lambda base, alt: (base * alt) / 2\nprint(area(4, 6))  # 12.0' },
    { tipo: 'explicacion', titulo: 'Lambda con sorted y key', texto: 'Las lambdas son muy útiles como argumento `key` en funciones como `sorted()`, `max()` y `min()` para personalizar el criterio de ordenación.' },
    { tipo: 'ejemplo', titulo: 'Ordenar con lambda', descripcion: 'Ordenando listas con criterio personalizado:', codigo: "personas = [('Ana', 30), ('Luis', 25), ('Carlos', 35)]\nordenado = sorted(personas, key=lambda p: p[1])\nprint(ordenado)  # [('Luis', 25), ('Ana', 30), ('Carlos', 35)]" },
    { tipo: 'resumen', puntos: ['lambda args: expresión crea funciones anónimas', 'No usa return, la expresión se devuelve sola', 'Solo una expresión, no múltiples líneas', 'Ideal como argumento key en sorted, max, min'] },
  ],
  ejercicios: [
    {
      id: 'in-01-03-01',
      titulo: 'Lambda suma',
      descripcion: 'Crea una lambda que sume dos números y asígnala a `suma`. Llámala con 7 y 8.',
      starter: '# Crea la lambda y úsala\n',
      pistas: ["suma = lambda a, b: a + b\nprint(suma(7, 8))"],
      explicacion: "lambda a, b: a + b es una función anónima que suma dos números.",
      solucionOficial: 'suma = lambda a, b: a + b\nprint(suma(7, 8))',
      validate: { type: 'output', expected: '15' },
    },
    {
      id: 'in-01-03-02',
      titulo: 'Ordenar con lambda',
      descripcion: "Crea `nums = [(1, 5), (3, 2), (2, 8)]` y ordénalos por el segundo elemento usando sorted y lambda.",
      starter: "nums = [(1, 5), (3, 2), (2, 8)]\n# Ordénalos por el segundo elemento\n",
      pistas: ["print(sorted(nums, key=lambda x: x[1]))"],
      explicacion: "lambda x: x[1] extrae el segundo elemento como clave de ordenación.",
      solucionOficial: "nums = [(1, 5), (3, 2), (2, 8)]\nprint(sorted(nums, key=lambda x: x[1]))",
      validate: { type: 'output', expected: '[(3, 2), (1, 5), (2, 8)]' },
    },
  ],
  cuestionario: [
    {
      id: 'in-01-03-q1',
      pregunta: '¿Cuál es la sintaxis correcta de una lambda?',
      opciones: ['lambda (x): x+1', 'def lambda x: x+1', 'lambda x: x+1', 'x -> x+1'],
      correcta: 2,
      explicacion: 'La sintaxis es: lambda parámetros: expresión.',
    },
    {
      id: 'in-01-03-q2',
      pregunta: '¿Qué imprime?\n```\ndoble = lambda n: n * 2\nprint(doble(5))\n```',
      opciones: ['5', '10', '25', 'lambda'],
      correcta: 1,
      explicacion: 'lambda n: n * 2 multiplica por 2: 5 * 2 = 10.',
    },
  ],
};

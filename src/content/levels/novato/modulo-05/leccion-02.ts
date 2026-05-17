import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'no-05-02',
  titulo: 'Funciones con múltiples parámetros',
  descripcion: 'Aprende a crear funciones más versátiles con múltiples parámetros y valores por defecto.',
  duracionMinutos: 10,
  conceptosClave: ['parámetros múltiples', 'parámetros por defecto', 'argumentos posicionales', 'reutilización'],
  contenido: [
    { tipo: 'introduccion', texto: 'Las funciones pueden tener múltiples parámetros, valores por defecto y pueden retornar múltiples valores. Esto las hace mucho más flexibles.' },
    { tipo: 'explicacion', titulo: 'Múltiples parámetros', texto: 'Puedes definir tantos parámetros como necesites. Al llamar la función, pasas los argumentos en el mismo orden (argumentos posicionales).' },
    { tipo: 'ejemplo', titulo: 'Varios parámetros', descripcion: 'Función con tres parámetros:', codigo: 'def calcular(base, altura, profundidad):\n    return base * altura * profundidad\n\nprint(calcular(2, 3, 4))  # 24' },
    { tipo: 'explicacion', titulo: 'Parámetros por defecto', texto: 'Puedes asignar valores por defecto a los parámetros. Si no se pasa un argumento, se usa el valor por defecto.' },
    { tipo: 'ejemplo', titulo: 'Valores por defecto', descripcion: 'Parámetros opcionales:', codigo: "def saludar(nombre, mensaje='Hola'):\n    print(mensaje + ', ' + nombre)\n\nsaludar('Ana')          # Hola, Ana\nsaludar('Ana', 'Adiós')  # Adiós, Ana" },
    { tipo: 'explicacion', titulo: 'Retornar múltiples valores', texto: 'En Python, puedes retornar varios valores separándolos con comas. Se devuelven como una tupla.' },
    { tipo: 'ejemplo', titulo: 'Múltiples retornos', descripcion: 'Devolviendo varios valores:', codigo: 'def min_max(lista):\n    return min(lista), max(lista)\n\nmenor, mayor = min_max([3, 1, 4, 1, 5])\nprint(menor)  # 1\nprint(mayor)  # 5' },
    { tipo: 'resumen', puntos: ['Puedes tener múltiples parámetros', 'Los valores por defecto hacen parámetros opcionales', 'Puedes retornar múltiples valores como tupla', 'Los argumentos se pasan en orden posicional'] },
  ],
  ejercicios: [
    {
      id: 'no-05-02-01',
      titulo: 'Área de rectángulo',
      descripcion: 'Define una función `area_rectangulo(base, altura)` que devuelva el área. Llámala con 5 y 3.',
      starter: '# Define la función\n',
      pistas: ["def area_rectangulo(base, altura):\n    return base * altura\nprint(area_rectangulo(5, 3))"],
      explicacion: "La función recibe dos parámetros y retorna su producto.",
      solucionOficial: 'def area_rectangulo(base, altura):\n    return base * altura\nprint(area_rectangulo(5, 3))',
      validate: { type: 'output', expected: '15' },
    },
    {
      id: 'no-05-02-02',
      titulo: 'Potencia con def',
      descripcion: 'Define una función `potencia(base, exp=2)` que devuelva base ** exp. Llámala con 4 (sin exponente, usa el default).',
      starter: '# Define potencia y llámala\n',
      pistas: ["def potencia(base, exp=2):\n    return base ** exp\nprint(potencia(4))"],
      explicacion: "exp=2 es un parámetro por defecto. Si no se pasa, se usa 2.",
      solucionOficial: 'def potencia(base, exp=2):\n    return base ** exp\nprint(potencia(4))',
      validate: { type: 'output', expected: '16' },
    },
  ],
  cuestionario: [
    {
      id: 'no-05-02-q1',
      pregunta: '¿Qué imprime?\n```\ndef suma(a, b=10):\n    return a + b\nprint(suma(5))\n```',
      opciones: ['5', '10', '15', 'Error'],
      correcta: 2,
      explicacion: 'b usa el valor por defecto 10, así que 5 + 10 = 15.',
    },
    {
      id: 'no-05-02-q2',
      pregunta: '¿Qué retorna una función con `return a, b`?',
      opciones: ['El valor de a', 'Una tupla (a, b)', 'Dos valores separados', 'Error'],
      correcta: 1,
      explicacion: 'Los valores separados por comas en return se devuelven como una tupla.',
    },
  ],
};

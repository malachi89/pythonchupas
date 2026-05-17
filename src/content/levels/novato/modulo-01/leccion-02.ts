import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'no-01-02',
  titulo: 'Condiciones múltiples con elif',
  descripcion: 'Aprende a encadenar múltiples condiciones usando elif para decisiones más complejas.',
  duracionMinutos: 10,
  conceptosClave: ['elif', 'condiciones múltiples', 'anidamiento', 'cadenas de condiciones'],
  contenido: [
    { tipo: 'introduccion', texto: 'Cuando tienes más de dos opciones, `elif` es tu mejor aliado. Es la abreviatura de "else if" y te permite encadenar múltiples condiciones.' },
    { tipo: 'explicacion', titulo: 'La estructura elif', texto: 'Puedes tener tantos `elif` como necesites. Python evalúa cada condición en orden. En cuanto encuentra una verdadera, ejecuta su bloque y salta el resto.' },
    { tipo: 'ejemplo', titulo: 'Múltiples condiciones', descripcion: 'Usando if, elif y else:', codigo: "nota = 85\nif nota >= 90:\n    print('Excelente')\nelif nota >= 70:\n    print('Bien')\nelif nota >= 50:\n    print('Suficiente')\nelse:\n    print('No aprobado')\n# Resultado: Bien" },
    { tipo: 'explicacion', titulo: 'Condiciones anidadas', texto: 'Puedes poner un condicional dentro de otro. Se llaman condicionales anidados. Úsalos con cuidado para no hacer el código muy complejo.' },
    { tipo: 'ejemplo', titulo: 'Anidamiento', descripcion: 'Condicional dentro de condicional:', codigo: "edad = 20\nif edad >= 18:\n    if edad >= 65:\n        print('Jubilado')\n    else:\n        print('Adulto')\nelse:\n    print('Menor')\n# Resultado: Adulto" },
    { tipo: 'error-comun', titulo: 'elif sin if', codigoMal: 'x = 5\nelif x > 3:\n    print("hola")', problema: 'elif debe ir siempre después de un if.', codigoBien: 'if x > 3:\n    print("hola")\nelif x > 1:\n    print("adiós")', solucion: 'elif solo puede usarse después de un if.' },
    { tipo: 'resumen', puntos: ['elif = else if: condición adicional', 'Python evalúa en orden hasta encontrar True', 'Solo se ejecuta el primer bloque verdadero', 'Puedes anidar condicionales dentro de condicionales'] },
  ],
  ejercicios: [
    {
      id: 'no-01-02-01',
      titulo: 'Clasificar nota',
      descripcion: 'Crea `nota = 75`. Si es >= 90 imprime "A", >= 75 imprime "B", >= 60 imprime "C", sino "F".',
      starter: 'nota = 75\n# Clasifica la nota\n',
      pistas: ["Usa if, elif y else con las condiciones."],
      explicacion: "elif permite evaluar múltiples rangos.",
      solucionOficial: 'nota = 75\nif nota >= 90:\n    print("A")\nelif nota >= 75:\n    print("B")\nelif nota >= 60:\n    print("C")\nelse:\n    print("F")',
      validate: { type: 'output', expected: 'B' },
    },
    {
      id: 'no-01-02-02',
      titulo: 'Positivo, negativo o cero',
      descripcion: 'Crea `num = 0`. Determina si es positivo, negativo o cero.',
      starter: 'num = 0\n# Clasifica el número\n',
      pistas: ["if num > 0, elif num < 0, else"],
      explicacion: "Tres caminos posibles: positivo, negativo o cero.",
      solucionOficial: 'num = 0\nif num > 0:\n    print("Positivo")\nelif num < 0:\n    print("Negativo")\nelse:\n    print("Cero")',
      validate: { type: 'output', expected: 'Cero' },
    },
  ],
  cuestionario: [
    {
      id: 'no-01-02-q1',
      pregunta: '¿Qué imprime este código?\n```\nx = 50\nif x > 100:\n    print("A")\nelif x > 25:\n    print("B")\nelif x > 10:\n    print("C")\nelse:\n    print("D")\n```',
      opciones: ['A', 'B', 'C', 'D'],
      correcta: 1,
      explicacion: 'Python ejecuta el primer True: 50 > 25, imprime "B". Los elif siguientes se ignoran.',
    },
    {
      id: 'no-01-02-q2',
      pregunta: '¿Cuántos elif puedes tener en una estructura?',
      opciones: ['Solo 1', 'Hasta 3', 'Ilimitados', 'Ninguno'],
      correcta: 2,
      explicacion: 'Puedes tener tantos elif como necesites.',
    },
  ],
};

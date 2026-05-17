import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-02-03',
  titulo: 'Algoritmos recursivos',
  descripcion: 'Aprende a usar la recursión: funciones que se llaman a sí mismas para resolver problemas.',
  duracionMinutos: 10,
  conceptosClave: ['recursión', 'caso base', 'caso recursivo', 'factorial', 'Fibonacci'],
  contenido: [
    { tipo: 'introduccion', texto: 'La recursión ocurre cuando una función se llama a sí misma. Es una técnica elegante para resolver problemas que se pueden dividir en subproblemas similares.' },
    { tipo: 'explicacion', titulo: 'Partes de una función recursiva', texto: 'Toda función recursiva necesita: 1) un caso base que termina la recursión, y 2) un caso recursivo que llama a la función con un problema más pequeño.' },
    { tipo: 'ejemplo', titulo: 'Factorial recursivo', descripcion: 'El factorial (n!) es el ejemplo clásico:', codigo: 'def factorial(n):\n    if n <= 1:  # Caso base\n        return 1\n    return n * factorial(n - 1)  # Caso recursivo\n\nprint(factorial(5))  # 120 (5*4*3*2*1)' },
    { tipo: 'explicacion', titulo: 'Fibonacci recursivo', texto: 'La secuencia de Fibonacci: cada número es la suma de los dos anteriores. F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2).' },
    { tipo: 'ejemplo', titulo: 'Fibonacci', descripcion: 'Implementación recursiva:', codigo: 'def fibonacci(n):\n    if n <= 1:  # Caso base\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nfor i in range(8):\n    print(fibonacci(i), end=" ")\n# 0 1 1 2 3 5 8 13' },
    { tipo: 'advertencia', texto: 'La recursión puede ser peligrosa si no tienes un caso base o si la profundidad es muy grande. Python tiene un límite de recursión (~1000 llamadas). Siempre asegúrate de que la recursión termine.' },
    { tipo: 'resumen', puntos: ['Recursión: función se llama a sí misma', 'Caso base: condición que detiene la recursión', 'Caso recursivo: llama con problema más pequeño', 'Útil para problemas con estructura recursiva natural'] },
  ],
  ejercicios: [
    {
      id: 'av-02-03-01',
      titulo: 'Suma recursiva',
      descripcion: 'Implementa `suma(n)` que sume los números de 1 a n usando recursión. Ej: suma(3) = 6 (1+2+3).',
      starter: '# Implementa suma recursiva\n',
      pistas: ["def suma(n):\n    if n <= 1:\n        return n\n    return n + suma(n - 1)\n\nprint(suma(5))"],
      explicacion: "suma(5) = 5 + suma(4) = 5 + 4 + suma(3) = ... = 15.",
      solucionOficial: 'def suma(n):\n    if n <= 1:\n        return n\n    return n + suma(n - 1)\n\nprint(suma(5))',
      validate: { type: 'output', expected: '15' },
    },
    {
      id: 'av-02-03-02',
      titulo: 'Contar regresivo',
      descripcion: 'Implementa una función recursiva `cuenta_regresiva(n)` que imprima n, n-1, ..., 1, 0.',
      starter: '# Implementa cuenta regresiva\n',
      pistas: ["def cuenta_regresiva(n):\n    if n < 0:\n        return\n    print(n)\n    cuenta_regresiva(n - 1)\n\ncuenta_regresiva(3)"],
      explicacion: "Cada llamada imprime el número y llama con n-1 hasta llegar a -1 (caso base).",
      solucionOficial: 'def cuenta_regresiva(n):\n    if n < 0:\n        return\n    print(n)\n    cuenta_regresiva(n - 1)\n\ncuenta_regresiva(3)',
      validate: { type: 'output', expected: '3\n2\n1\n0' },
    },
  ],
  cuestionario: [
    {
      id: 'av-02-03-q1',
      pregunta: '¿Qué es el caso base en una función recursiva?',
      opciones: ['El primer caso que se ejecuta', 'La condición que termina la recursión', 'El caso más lento', 'El caso que se repite más veces'],
      correcta: 1,
      explicacion: 'El caso base es la condición que detiene la recursión.',
    },
    {
      id: 'av-02-03-q2',
      pregunta: '¿Qué imprime la llamada `factorial(3)`?\n```\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n```',
      opciones: ['3', '6', '9', 'Error'],
      correcta: 1,
      explicacion: 'factorial(3) = 3 * factorial(2) = 3 * 2 * factorial(1) = 3 * 2 * 1 = 6.',
    },
  ],
};

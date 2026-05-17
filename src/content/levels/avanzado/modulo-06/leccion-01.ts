import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-06-01',
  titulo: 'Desafíos de lógica y algoritmos',
  descripcion: 'Resuelve problemas clásicos de lógica y algoritmos combinando todo lo aprendido.',
  duracionMinutos: 10,
  conceptosClave: ['resolución de problemas', 'pensamiento computacional', 'algoritmos', 'números primos', 'palíndromos'],
  contenido: [
    { tipo: 'introduccion', texto: 'Los desafíos de programación ponen a prueba tu capacidad para resolver problemas usando Python. Aquí aplicarás todo lo aprendido para resolver problemas clásicos.' },
    { tipo: 'explicacion', titulo: '¿Cómo abordar un desafío?', texto: '1) Entiende bien el problema, 2) Divide en pasos pequeños, 3) Escribe la solución en papel, 4) Implementa en Python, 5) Prueba con diferentes casos.' },
    { tipo: 'ejemplo', titulo: 'Número primo', descripcion: 'Verificar si un número es primo:', codigo: 'def es_primo(n):\n    if n <= 1:\n        return False\n    for i in range(2, int(n ** 0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\nprint(es_primo(7))   # True\nprint(es_primo(10))  # False' },
    { tipo: 'explicacion', titulo: 'Palíndromo', texto: 'Un palíndromo se lee igual al derecho y al revés. Python permite verificarlo fácilmente comparando el string con su inverso.' },
    { tipo: 'ejemplo', titulo: 'Verificar palíndromo', descripcion: 'Detectando palíndromos:', codigo: 'def es_palindromo(texto):\n    texto = texto.lower().replace(" ", "")\n    return texto == texto[::-1]\n\nprint(es_palindromo("Anita lava la tina"))  # True\nprint(es_palindromo("Python"))               # False' },
    { tipo: 'explicacion', titulo: 'Secuencia de Collatz', texto: 'La conjetura de Collatz: toma un número n. Si es par, divídelo entre 2; si es impar, multiplícalo por 3 y suma 1. Repite hasta llegar a 1.' },
    { tipo: 'ejemplo', titulo: 'Collatz', descripcion: 'Generando la secuencia:', codigo: 'def collatz(n):\n    while n != 1:\n        print(n, end=" -> ")\n        n = n // 2 if n % 2 == 0 else n * 3 + 1\n    print(1)\n\ncollatz(6)  # 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1' },
    { tipo: 'resumen', puntos: ['Divide el problema en pasos pequeños', 'Prueba con casos límite', 'Aplica lo aprendido: funciones, condicionales, bucles', 'Practica con desafíos clásicos'] },
  ],
  ejercicios: [
    {
      id: 'av-06-01-01',
      titulo: '¿Es primo?',
      descripcion: 'Implementa una función `es_primo(n)` que retorne True si n es primo. Pruébala con 17.',
      starter: '# Implementa es_primo\n',
      pistas: ["def es_primo(n):\n    if n <= 1:\n        return False\n    for i in range(2, n):\n        if n % i == 0:\n            return False\n    return True\n\nprint(es_primo(17))"],
      explicacion: "Un número primo solo es divisible por 1 y por sí mismo.",
      solucionOficial: 'def es_primo(n):\n    if n <= 1:\n        return False\n    for i in range(2, int(n ** 0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\nprint(es_primo(17))',
      validate: { type: 'output', expected: 'True' },
    },
    {
      id: 'av-06-01-02',
      titulo: 'Invertir string',
      descripcion: 'Escribe una función `invertir(texto)` que retorne el texto invertido. Pruébala con "Python".',
      starter: '# Implementa invertir\n',
      pistas: ["def invertir(texto):\n    return texto[::-1]\n\nprint(invertir('Python'))"],
      explicacion: "[::-1] invierte cualquier secuencia en Python.",
      solucionOficial: "def invertir(texto):\n    return texto[::-1]\n\nprint(invertir('Python'))",
      validate: { type: 'output', expected: 'nohtyP' },
    },
  ],
  cuestionario: [
    {
      id: 'av-06-01-q1',
      pregunta: '¿Cuál es el primer paso recomendado para resolver un desafío de programación?',
      opciones: ['Escribir código inmediatamente', 'Entender bien el problema', 'Buscar en Google', 'Pedir ayuda'],
      correcta: 1,
      explicacion: 'Siempre entiende primero el problema antes de escribir código.',
    },
    {
      id: 'av-06-01-q2',
      pregunta: '¿Qué es un palíndromo?',
      opciones: ['Un número primo', 'Algo que se lee igual al derecho y al revés', 'Una función recursiva', 'Un tipo de bucle'],
      correcta: 1,
      explicacion: 'Un palíndromo es una palabra o frase que se lee igual en ambos sentidos.',
    },
  ],
};

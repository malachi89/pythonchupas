import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'no-03-03',
  titulo: 'Control avanzado de while: break, continue y else',
  descripcion: 'Domina el control de flujo en bucles while con break, continue y la cláusula else.',
  duracionMinutos: 10,
  conceptosClave: ['break en while', 'continue en while', 'else en bucles', 'control de flujo'],
  contenido: [
    { tipo: 'introduccion', texto: 'Al igual que con for, puedes usar `break` y `continue` en while. Además, los bucles while (y for) tienen una cláusula `else` que se ejecuta si el bucle termina normalmente.' },
    { tipo: 'explicacion', titulo: 'Break en while', texto: '`break` en un while termina el bucle inmediatamente, sin importar la condición. Es útil cuando quieres salir por una condición interna.' },
    { tipo: 'ejemplo', titulo: 'Break en while', descripcion: 'Saliendo del bucle con break:', codigo: 'i = 0\nwhile i < 10:\n    if i == 4:\n        break\n    print(i)\n    i += 1\n# 0, 1, 2, 3' },
    { tipo: 'explicacion', titulo: 'Continue en while', texto: '`continue` salta el resto del código y vuelve a evaluar la condición del while. Cuidado: si olvidas actualizar la variable antes del continue, puedes crear un bucle infinito.' },
    { tipo: 'ejemplo', titulo: 'Continue en while', descripcion: 'Saltando números pares:', codigo: 'i = 0\nwhile i < 6:\n    i += 1\n    if i % 2 == 0:\n        continue\n    print(i)\n# 1, 3, 5' },
    { tipo: 'explicacion', titulo: 'Else en bucles while', texto: 'La cláusula `else` en un while se ejecuta cuando la condición se vuelve False, pero NO se ejecuta si el bucle terminó con `break`.' },
    { tipo: 'ejemplo', titulo: 'Else con while', descripcion: 'Diferencia entre break y else:', codigo: "# Sin break — else se ejecuta\nx = 0\nwhile x < 3:\n    x += 1\nelse:\n    print(\"Completado\")  # Se ejecuta\n\n# Con break — else NO se ejecuta\nx = 0\nwhile x < 3:\n    if x == 1:\n        break\n    x += 1\nelse:\n    print(\"No se ejecuta\")" },
    { tipo: 'resumen', puntos: ['break sale del while inmediatamente', 'continue salta a la siguiente iteración', 'else se ejecuta si el bucle termina sin break', 'Ten cuidado con continue y la actualización de variables'] },
  ],
  ejercicios: [
    {
      id: 'no-03-03-01',
      titulo: 'Sumar hasta 10',
      descripcion: 'Usa un while que sume números (1, 2, 3...) hasta que la suma sea >= 10. Imprime la suma final.',
      starter: 'suma = 0\ni = 1\n# Escribe tu while\n',
      pistas: ["while True:\n    suma += i\n    i += 1\n    if suma >= 10:\n        break\nprint(suma)"],
      explicacion: "El bucle suma hasta alcanzar o superar 10, luego break lo detiene.",
      solucionOficial: 'suma = 0\ni = 1\nwhile True:\n    suma += i\n    i += 1\n    if suma >= 10:\n        break\nprint(suma)',
      validate: { type: 'output', expected: '10' },
    },
    {
      id: 'no-03-03-02',
      titulo: 'Contar solo impares',
      descripcion: 'Usa while para imprimir los impares del 1 al 9, saltando los pares con continue.',
      starter: 'i = 0\n# Escribe tu while\n',
      pistas: ["while i < 9:\n    i += 1\n    if i % 2 == 0:\n        continue\n    print(i)"],
      explicacion: "Cuando i es par, continue salta el print.",
      solucionOficial: 'i = 0\nwhile i < 9:\n    i += 1\n    if i % 2 == 0:\n        continue\n    print(i)',
      validate: { type: 'output', expected: '1\n3\n5\n7\n9' },
    },
  ],
  cuestionario: [
    {
      id: 'no-03-03-q1',
      pregunta: '¿Se ejecuta el else de un while si el bucle termina con break?',
      opciones: ['Sí, siempre', 'No, nunca', 'Solo si la condición es True', 'Depende del tipo de while'],
      correcta: 1,
      explicacion: 'el else no se ejecuta si el bucle termina mediante break.',
    },
    {
      id: 'no-03-03-q2',
      pregunta: '¿Qué imprime?\n```\nx = 0\nwhile x < 5:\n    x += 1\n    if x == 3:\n        break\nprint(x)\n```',
      opciones: ['3', '5', '2', '4'],
      correcta: 0,
      explicacion: 'Cuando x es 3, break termina el bucle y luego se imprime 3.',
    },
  ],
};

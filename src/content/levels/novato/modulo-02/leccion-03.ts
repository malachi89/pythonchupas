import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'no-02-03',
  titulo: 'For avanzado: anidados, break y continue',
  descripcion: 'Domina el bucle for con bucles anidados y las sentencias break y continue.',
  duracionMinutos: 10,
  conceptosClave: ['bucles anidados', 'break', 'continue', 'control de flujo'],
  contenido: [
    { tipo: 'introduccion', texto: 'Los bucles pueden anidarse (un bucle dentro de otro) y puedes controlar su flujo con `break` (salir) y `continue` (saltar a la siguiente iteración).' },
    { tipo: 'explicacion', titulo: 'Bucles anidados', texto: 'Un bucle dentro de otro. Por cada iteración del bucle exterior, el bucle interior se ejecuta completo. Se usan mucho para trabajar con tablas.' },
    { tipo: 'ejemplo', titulo: 'For anidado', descripcion: 'Tabla de multiplicar básica:', codigo: 'for i in range(1, 4):\n    for j in range(1, 4):\n        print(i * j, end=" ")\n    print()\n# 1 2 3\n# 2 4 6\n# 3 6 9' },
    { tipo: 'explicacion', titulo: 'Break — salir del bucle', texto: '`break` termina el bucle inmediatamente, aunque queden iteraciones. Es útil cuando encuentras lo que buscas.' },
    { tipo: 'ejemplo', titulo: 'Usando break', descripcion: 'Deteniendo el bucle al encontrar un valor:', codigo: 'for i in range(10):\n    if i == 5:\n        break\n    print(i)\n# 0, 1, 2, 3, 4' },
    { tipo: 'explicacion', titulo: 'Continue — saltar iteración', texto: '`continue` salta el resto del código de la iteración actual y pasa a la siguiente. Es útil para omitir ciertos valores.' },
    { tipo: 'ejemplo', titulo: 'Usando continue', descripcion: 'Saltando números pares:', codigo: 'for i in range(6):\n    if i % 2 == 0:\n        continue\n    print(i)\n# 1, 3, 5' },
    { tipo: 'resumen', puntos: ['Los bucles anidados ejecutan el interior por cada iteración del exterior', 'break termina el bucle por completo', 'continue salta a la siguiente iteración', 'Usa break y continue con cuidado para no perder el control'] },
  ],
  ejercicios: [
    {
      id: 'no-02-03-01',
      titulo: 'Tabla del 3',
      descripcion: 'Usa un for para imprimir la tabla del 3: 3, 6, 9, 12, 15.',
      starter: '# Imprime la tabla del 3\n',
      pistas: ["for i in range(1, 6):\n    print(3 * i)"],
      explicacion: "Multiplica 3 por cada número del 1 al 5.",
      solucionOficial: 'for i in range(1, 6):\n    print(3 * i)',
      validate: { type: 'output', expected: '3\n6\n9\n12\n15' },
    },
    {
      id: 'no-02-03-02',
      titulo: 'Break al encontrar 4',
      descripcion: 'Usa un for con range(10) que se detenga con break cuando i sea 4. Imprime cada i.',
      starter: '# Usa break cuando i sea 4\n',
      pistas: ["for i in range(10):\n    if i == 4:\n        break\n    print(i)"],
      explicacion: "break sale del bucle inmediatamente.",
      solucionOficial: 'for i in range(10):\n    if i == 4:\n        break\n    print(i)',
      validate: { type: 'output', expected: '0\n1\n2\n3' },
    },
  ],
  cuestionario: [
    {
      id: 'no-02-03-q1',
      pregunta: '¿Qué hace `break` dentro de un bucle?',
      opciones: ['Salta a la siguiente iteración', 'Termina el bucle inmediatamente', 'Reinicia el bucle', 'Pausa el bucle'],
      correcta: 1,
      explicacion: 'break finaliza el bucle por completo.',
    },
    {
      id: 'no-02-03-q2',
      pregunta: '¿Qué hace `continue` dentro de un bucle?',
      opciones: ['Termina el programa', 'Salta a la siguiente iteración', 'Sale del bucle', 'Repite la iteración actual'],
      correcta: 1,
      explicacion: 'continue ignora el resto del código de la iteración y pasa a la siguiente.',
    },
    {
      id: 'no-02-03-q3',
      pregunta: '¿Cuántas veces se ejecuta el print?\n```\nfor i in range(3):\n    for j in range(2):\n        print(i, j)\n```',
      opciones: ['3', '6', '9', '2'],
      correcta: 1,
      explicacion: 'El bucle exterior da 3 iteraciones, el interior 2: 3 × 2 = 6 ejecuciones.',
    },
  ],
};

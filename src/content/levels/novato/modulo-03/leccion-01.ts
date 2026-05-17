import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'no-03-01',
  titulo: 'Introducción al bucle while',
  descripcion: 'Aprende a usar while para repetir código mientras se cumpla una condición.',
  duracionMinutos: 10,
  conceptosClave: ['while', 'condición', 'bucle infinito', 'actualización de variable'],
  contenido: [
    { tipo: 'introduccion', texto: 'El bucle `while` repite un bloque de código mientras una condición sea verdadera. A diferencia de `for`, no sabes necesariamente cuántas veces se ejecutará.' },
    { tipo: 'nota', texto: 'Como en `if` y en `for`, la indentación es obligatoria. Todo el código que deba repetirse va con 4 espacios dentro del `while`. Sin indentación, el código no pertenece al bucle.' },
    { tipo: 'explicacion', titulo: 'Estructura de while', texto: '`while condición:` ejecuta el bloque indentado mientras la condición sea True. Es importante que la condición pueda volverse False en algún momento, o tendrás un bucle infinito.' },
    { tipo: 'ejemplo', titulo: 'While básico', descripcion: 'Contando con while:', codigo: 'contador = 0\nwhile contador < 5:\n    print(contador)\n    contador += 1\n# 0, 1, 2, 3, 4' },
    { tipo: 'explicacion', titulo: 'El peligro de los bucles infinitos', texto: 'Si olvidas actualizar la variable de la condición, el bucle nunca terminará. Esto se llama bucle infinito y hará que tu programa se congele.' },
    { tipo: 'error-comun', titulo: 'Bucle infinito', codigoMal: 'x = 0\nwhile x < 5:\n    print(x)\n# Olvidé: x += 1', problema: 'x nunca cambia, la condición siempre es True.', codigoBien: 'x = 0\nwhile x < 5:\n    print(x)\n    x += 1', solucion: 'Siempre actualiza la variable de la condición dentro del bucle.' },
    { tipo: 'ejemplo', titulo: 'While con entrada', descripcion: 'Un bucle que espera un evento:', codigo: "respuesta = ''\nwhile respuesta != 'salir':\n    print('Escribe salir para terminar')\n    respuesta = input()\nprint('Fin del programa')" },
    { tipo: 'resumen', puntos: ['while repite mientras la condición sea True', 'La condición debe poder volverse False', 'Actualiza las variables dentro del bucle', 'Los bucles infinitos congelan el programa'] },
  ],
  ejercicios: [
    {
      id: 'no-03-01-01',
      titulo: 'Contar del 0 al 3',
      descripcion: 'Usa un bucle while para imprimir los números del 0 al 3.',
      starter: 'contador = 0\n# Escribe tu while\n',
      pistas: ["while contador < 4:\n    print(contador)\n    contador += 1"],
      explicacion: "El while se ejecuta mientras la condición sea True. contador += 1 evita un bucle infinito.",
      solucionOficial: 'contador = 0\nwhile contador < 4:\n    print(contador)\n    contador += 1',
      validate: { type: 'output', expected: '0\n1\n2\n3' },
    },
    {
      id: 'no-03-01-02',
      titulo: 'Cuenta regresiva',
      descripcion: 'Usa un while para imprimir del 5 al 1 (cuenta regresiva).',
      starter: 'contador = 5\n# Escribe tu while\n',
      pistas: ["while contador > 0:\n    print(contador)\n    contador -= 1"],
      explicacion: "Decrementa contador en cada iteración hasta que sea 0.",
      solucionOficial: 'contador = 5\nwhile contador > 0:\n    print(contador)\n    contador -= 1',
      validate: { type: 'output', expected: '5\n4\n3\n2\n1' },
    },
  ],
  cuestionario: [
    {
      id: 'no-03-01-q1',
      pregunta: '¿Cuántas veces se ejecuta este while?\n```\nx = 0\nwhile x < 3:\n    print(x)\n    x += 1\n```',
      opciones: ['2', '3', '4', 'Infinitas'],
      correcta: 1,
      explicacion: 'x toma valores 0, 1, 2. Cuando x es 3 la condición es False.',
    },
    {
      id: 'no-03-01-q2',
      pregunta: '¿Qué pasa si la condición de while siempre es True?',
      opciones: ['El bucle se salta', 'El programa se congela (bucle infinito)', 'Python lo detiene automáticamente', 'Solo se ejecuta una vez'],
      correcta: 1,
      explicacion: 'Si la condición nunca se vuelve False, el bucle continúa para siempre.',
    },
  ],
};

import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-06-02',
  titulo: 'Múltiples excepciones y finally',
  descripcion: 'Aprende a manejar múltiples tipos de error y a usar finally para código que siempre se ejecuta.',
  duracionMinutos: 10,
  conceptosClave: ['múltiples except', 'finally', 'else en try', 'limpieza de recursos'],
  contenido: [
    { tipo: 'introduccion', texto: 'Puedes tener varios bloques `except` para diferentes tipos de error. Además, `finally` ejecuta código siempre, haya o no error, ideal para limpiar recursos.' },
    { tipo: 'explicacion', titulo: 'Múltiples except', texto: 'Puedes encadenar varios `except` para manejar diferentes errores de forma distinta. Solo se ejecuta el primer except que coincida.' },
    { tipo: 'ejemplo', titulo: 'Múltiples except', descripcion: 'Manejando diferentes errores:', codigo: "try:\n    x = int(input())\n    resultado = 10 / x\n    print(resultado)\nexcept ValueError:\n    print('No es un número')\nexcept ZeroDivisionError:\n    print('No se puede dividir entre 0')\nexcept Exception as e:\n    print(f'Otro error: {e}')" },
    { tipo: 'explicacion', titulo: 'Finally — siempre se ejecuta', texto: 'El bloque `finally` se ejecuta siempre, ocurra o no un error, y aunque haya un `return`. Es ideal para cerrar archivos, liberar memoria o conexiones.' },
    { tipo: 'ejemplo', titulo: 'Finally en acción', descripcion: 'Código que siempre se ejecuta:', codigo: "try:\n    archivo = open('datos.txt')\n    print(archivo.read())\nexcept FileNotFoundError:\n    print('Archivo no encontrado')\nfinally:\n    print('Cerrando archivo...')\n    archivo.close()\n# finally se ejecuta SIEMPRE" },
    { tipo: 'explicacion', titulo: 'Else en try', texto: 'El bloque `else` se ejecuta solo si NO ocurrió ninguna excepción. Va después de los except y antes de finally.' },
    { tipo: 'ejemplo', titulo: 'Else en try', descripcion: 'Código que solo se ejecuta si todo sale bien:', codigo: "try:\n    num = int('42')\nexcept ValueError:\n    print('Error de conversión')\nelse:\n    print(f'Conversión exitosa: {num}')\nfinally:\n    print('Fin del proceso')" },
    { tipo: 'resumen', puntos: ['Puedes tener múltiples except para diferentes errores', 'finally siempre se ejecuta', 'else se ejecuta solo si no hay error', 'finally es ideal para limpiar recursos'] },
  ],
  ejercicios: [
    {
      id: 'in-06-02-01',
      titulo: 'Try con finally',
      descripcion: 'Usa try/except para convertir "123" a entero. Agrega finally que imprima "Operación finalizada".',
      starter: '# Usa try/except/finally\n',
      pistas: ["try:\n    num = int('123')\nexcept ValueError:\n    print('Error')\nfinally:\n    print('Operación finalizada')"],
      explicacion: "finally se ejecuta siempre, incluso si no hay error.",
      solucionOficial: "try:\n    num = int('123')\nexcept ValueError:\n    print('Error')\nfinally:\n    print('Operación finalizada')",
      validate: { type: 'output', expected: 'Operación finalizada' },
    },
    {
      id: 'in-06-02-02',
      titulo: 'Múltiples except',
      descripcion: 'Crea un try que intente `int("abc")` y luego `10/0`. Captura ValueError y ZeroDivisionError con mensajes distintos.',
      starter: '# Usa múltiples except\n',
      pistas: ["try:\n    int('abc')\n    10 / 0\nexcept ValueError:\n    print('Error de valor')\nexcept ZeroDivisionError:\n    print('Error de cero')"],
      explicacion: "Solo se ejecuta el primer except que coincida (ValueError).",
      solucionOficial: "try:\n    int('abc')\n    10 / 0\nexcept ValueError:\n    print('Error de valor')\nexcept ZeroDivisionError:\n    print('Error de cero')",
      validate: { type: 'output', expected: 'Error de valor' },
    },
  ],
  cuestionario: [
    {
      id: 'in-06-02-q1',
      pregunta: '¿Cuándo se ejecuta el bloque `finally`?',
      opciones: ['Solo si hay error', 'Solo si no hay error', 'Siempre', 'Solo si hay return'],
      correcta: 2,
      explicacion: 'finally se ejecuta siempre, haya o no error.',
    },
    {
      id: 'in-06-02-q2',
      pregunta: '¿Cuándo se ejecuta el bloque `else` en un try/except?',
      opciones: ['Solo si hay error', 'Solo si NO hay error', 'Siempre', 'Nunca'],
      correcta: 1,
      explicacion: 'else se ejecuta solo cuando el bloque try no lanza excepción.',
    },
  ],
};

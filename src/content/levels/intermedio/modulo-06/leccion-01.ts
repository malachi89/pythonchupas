import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-06-01',
  titulo: 'Introducción a try/except',
  descripcion: 'Aprende a manejar errores usando try/except para que tu programa no se detenga inesperadamente.',
  duracionMinutos: 10,
  conceptosClave: ['try', 'except', 'excepción', 'manejo de errores', 'ValueError', 'ZeroDivisionError'],
  contenido: [
    { tipo: 'introduccion', texto: 'Los errores ocurren. Un usuario ingresa texto cuando esperabas un número, o divides entre cero. Con `try/except` puedes capturar estos errores y manejar la situación.' },
    { tipo: 'explicacion', titulo: 'Estructura try/except', texto: 'Pones el código que puede fallar dentro de `try`. Si ocurre un error, se ejecuta el bloque `except` en lugar de detener el programa.' },
    { tipo: 'ejemplo', titulo: 'Try/except básico', descripcion: 'Capturando un error de división:', codigo: 'try:\n    resultado = 10 / 0\n    print(resultado)\nexcept:\n    print("Ocurrió un error")\n# Ocurrió un error\n# El programa continúa' },
    { tipo: 'explicacion', titulo: 'Capturar errores específicos', texto: 'Es mejor capturar errores específicos. `ZeroDivisionError` para división entre cero, `ValueError` para valores inválidos, `TypeError` para tipos incorrectos.' },
    { tipo: 'ejemplo', titulo: 'Errores específicos', descripcion: 'Capturando diferentes tipos de error:', codigo: "try:\n    numero = int(input('Ingresa un número: '))\n    print(10 / numero)\nexcept ValueError:\n    print('Debes ingresar un número válido')\nexcept ZeroDivisionError:\n    print('No puedes dividir entre cero')" },
    { tipo: 'error-comun', titulo: 'Usar except sin tipo', codigoMal: 'try:\n    x = int("abc")\nexcept:\n    pass', problema: 'Usar except sin especificar el error puede ocultar bugs importantes. except: captura TODOS los errores, incluso los que no esperabas.', codigoBien: 'try:\n    x = int("abc")\nexcept ValueError:\n    print("No es un número")', solucion: 'Siempre especifica el tipo de excepción que esperas.' },
    { tipo: 'resumen', puntos: ['try/except captura errores sin detener el programa', 'Captura errores específicos (ValueError, TypeError...)', 'except sin tipo captura cualquier error (poco recomendado)', 'El programa continúa después del bloque try/except'] },
  ],
  ejercicios: [
    {
      id: 'in-06-01-01',
      titulo: 'Dividir con try',
      descripcion: 'Usa try/except para dividir 10 entre 0 y capturar el error. Imprime "Error de división" en el except.',
      starter: '# Usa try/except\n',
      pistas: ["try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print('Error de división')"],
      explicacion: "ZeroDivisionError captura específicamente la división entre cero.",
      solucionOficial: "try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print('Error de división')",
      validate: { type: 'output', expected: 'Error de división' },
    },
    {
      id: 'in-06-01-02',
      titulo: 'Convertir con try',
      descripcion: "Usa try/except para convertir 'abc' a entero. Captura ValueError e imprime 'Error de tipo'.",
      starter: "# Usa try/except\n",
      pistas: ["try:\n    int('abc')\nexcept ValueError:\n    print('Error de tipo')"],
      explicacion: "ValueError ocurre cuando la conversión es imposible.",
      solucionOficial: "try:\n    int('abc')\nexcept ValueError:\n    print('Error de tipo')",
      validate: { type: 'output', expected: 'Error de tipo' },
    },
  ],
  cuestionario: [
    {
      id: 'in-06-01-q1',
      pregunta: '¿Qué excepción se lanza al dividir entre cero?',
      opciones: ['ValueError', 'ZeroDivisionError', 'TypeError', 'IndexError'],
      correcta: 1,
      explicacion: 'Python lanza ZeroDivisionError cuando intentas dividir entre cero.',
    },
    {
      id: 'in-06-01-q2',
      pregunta: '¿Por qué es mejor usar `except ValueError:` que solo `except:`?',
      opciones: ['Es más rápido', 'Solo captura el error esperado, no oculta otros', 'Es obligatorio en Python 3', 'No hay diferencia'],
      correcta: 1,
      explicacion: 'except: captura todos los errores, incluso los inesperados, lo que puede ocultar bugs.',
    },
  ],
};

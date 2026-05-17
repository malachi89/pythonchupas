import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'no-06-01',
  titulo: 'Transformación de strings',
  descripcion: 'Aprende métodos para transformar strings: upper, lower, title, capitalize y swapcase.',
  duracionMinutos: 10,
  conceptosClave: ['upper()', 'lower()', 'title()', 'capitalize()', 'swapcase()', 'strings inmutables'],
  contenido: [
    { tipo: 'introduccion', texto: 'Los strings tienen métodos que permiten transformar su formato. Estos métodos no modifican el string original (los strings son inmutables), sino que devuelven uno nuevo.' },
    { tipo: 'explicacion', titulo: 'Inmutabilidad de strings', texto: 'Los strings en Python son inmutables: no puedes cambiar un carácter individual. Los métodos de strings devuelven NUEVOS strings, no modifican el original.' },
    { tipo: 'ejemplo', titulo: 'Métodos de transformación', descripcion: 'Cambiando el formato del texto:', codigo: "texto = 'hola mundo'\nprint(texto.upper())       # HOLA MUNDO\nprint(texto.lower())       # hola mundo\nprint(texto.title())       # Hola Mundo\nprint(texto.capitalize())  # Hola mundo\nprint(texto.swapcase())    # HOLA MUNDO" },
    { tipo: 'explicacion', titulo: 'Verificar inmutabilidad', texto: 'Los métodos no cambian la variable original. Si quieres conservar el cambio, debes reasignar la variable.' },
    { tipo: 'ejemplo', titulo: 'Conservar cambios', descripcion: 'Reasignando para conservar:', codigo: "nombre = 'python'\nnombre_mayus = nombre.upper()\nprint(nombre)        # python (original intacto)\nprint(nombre_mayus)  # PYTHON (nuevo string)" },
    { tipo: 'tabla-visual', titulo: 'Metodos de transformacion', cabeceras: ['Metodo', 'Descripcion', 'Ejemplo'], filas: [['upper()', 'Todo mayusculas', 'hola.upper() es HOLA'], ['lower()', 'Todo minusculas', 'HOLA.lower() es hola'], ['title()', 'Mayuscula inicial cada palabra', 'hola mundo.title() es Hola Mundo'], ['capitalize()', 'Mayuscula solo primera letra', 'hola mundo.capitalize() es Hola mundo'], ['swapcase()', 'Invierte mayus/minusc', 'HoLa.swapcase() es hOlA']] },
    { tipo: 'resumen', puntos: ['Los strings son inmutables', 'Los métodos devuelven nuevos strings', 'upper() / lower() cambian mayúsc/minúsc', 'title() capitaliza cada palabra'] },
  ],
  ejercicios: [
    {
      id: 'no-06-01-01',
      titulo: 'Mayúsculas',
      descripcion: "Usa `print('python'.upper())` para convertir a mayúsculas.",
      starter: "# Convierte a mayúsculas\n",
      pistas: ["print('python'.upper())"],
      explicacion: "upper() convierte todo a mayúsculas.",
      solucionOficial: "print('python'.upper())",
      validate: { type: 'output', expected: 'PYTHON' },
    },
    {
      id: 'no-06-01-02',
      titulo: 'Minúsculas',
      descripcion: "Usa `print('CHUBETA'.lower())` para convertir a minúsculas.",
      starter: "# Convierte a minúsculas\n",
      pistas: ["print('CHUBETA'.lower())"],
      explicacion: "lower() convierte todo a minúsculas.",
      solucionOficial: "print('CHUBETA'.lower())",
      validate: { type: 'output', expected: 'chubeta' },
    },
  ],
  cuestionario: [
    {
      id: 'no-06-01-q1',
      pregunta: "¿Qué imprime `print('Hola'.upper())`?",
      opciones: ['Hola', 'HOLA', 'hola', 'Error'],
      correcta: 1,
      explicacion: 'upper() convierte todo a mayúsculas: HOLA.',
    },
    {
      id: 'no-06-01-q2',
      pregunta: '¿Los métodos de strings modifican el string original?',
      opciones: ['Sí, siempre', 'No, devuelven uno nuevo', 'Depende del método', 'Solo si se usa el operador ='],
      correcta: 1,
      explicacion: 'Los strings son inmutables. Los métodos devuelven nuevos strings.',
    },
  ],
};

import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'mn-02-01',
  titulo: 'Creando tus primeras variables',
  descripcion: 'Aprende qué son las variables y cómo guardar datos en ellas.',
  duracionMinutos: 10,
  conceptosClave: ['variables', 'asignación', 'nombre de variable'],
  contenido: [
    { tipo: 'introduccion', texto: 'Las variables son como cajas donde puedes guardar información. En lugar de recordar un número o texto, le pones una etiqueta y lo guardas para usarlo después.' },
    { tipo: 'explicacion', titulo: '¿Qué es una variable?', texto: 'Una variable es un nombre que guarda un valor. En Python, crear una variable es tan simple como escribir `nombre = valor`. No necesitas declarar el tipo como en otros lenguajes.' },
    { tipo: 'analogia', icono: '📦', texto: 'Imagina que las variables son cajas etiquetadas. La etiqueta es el nombre de la variable y lo que guardas dentro es su valor. Puedes cambiar lo que hay dentro cuando quieras.' },
    { tipo: 'ejemplo', titulo: 'Crear una variable', descripcion: 'Asignando valores a variables:', codigo: "nombre = 'Chubeta'\nedad = 7\nprint(nombre)\nprint(edad)" },
    { tipo: 'explicacion', titulo: 'Reglas para nombres de variables', texto: 'Los nombres de variables pueden contener letras, números y guiones bajos, pero no pueden empezar con número. No pueden usar palabras reservadas como `if`, `for`, `while`. Además, Python diferencia mayúsculas y minúsculas.' },
    { tipo: 'tabla-visual', titulo: 'Nombres válidos e inválidos', cabeceras: ['Válido', 'Inválido', 'Razón'], filas: [['edad', '2edad', 'Empieza con número'], ['mi_nombre', 'mi nombre', 'Tiene espacio'], ['nombre1', 'class', 'Palabra reservada']] },
    { tipo: 'error-comun', titulo: 'Nombre sin definir', codigoMal: 'print(mensaje)', problema: 'La variable `mensaje` no ha sido creada aún.', codigoBien: "mensaje = 'Hola'\nprint(mensaje)", solucion: 'Siempre debes asignar un valor a una variable antes de usarla.' },
    { tipo: 'resumen', puntos: ['Las variables guardan datos para usarlos después', 'Se crean con nombre = valor', 'Los nombres no pueden empezar con número', 'Python distingue mayúsculas y minúsculas'] },
  ],
  ejercicios: [
    {
      id: 'mn-02-01-01',
      titulo: 'Tu primera variable',
      descripcion: "Crea una variable llamada `nombre` con el valor `'Chubeta'` e imprímela.",
      starter: '# Crea la variable y luego imprímela\n',
      pistas: ["nombre = 'Chubeta'\nprint(nombre)"],
      explicacion: "Las variables guardan datos. Se crean con nombre = valor.",
      solucionOficial: "nombre = 'Chubeta'\nprint(nombre)",
      validate: { type: 'output', expected: 'Chubeta' },
    },
    {
      id: 'mn-02-01-02',
      titulo: 'Variable número',
      descripcion: 'Crea una variable `edad` con el valor `25` e imprímela.',
      starter: '# Crea edad y luego imprímela\n',
      pistas: ["edad = 25\nprint(edad)"],
      explicacion: "Las variables pueden guardar números enteros.",
      solucionOficial: 'edad = 25\nprint(edad)',
      validate: { type: 'output', expected: '25' },
    },
  ],
  cuestionario: [
    {
      id: 'mn-02-01-q1',
      pregunta: '¿Cuál de estos es un nombre de variable válido?',
      opciones: ['2nombre', 'mi nombre', 'mi_nombre', 'class'],
      correcta: 2,
      explicacion: 'Los guiones bajos son válidos. Los espacios, números al inicio y palabras reservadas no.',
    },
    {
      id: 'mn-02-01-q2',
      pregunta: '¿Qué hace `x = 10` en Python?',
      opciones: ['Compara si x es 10', 'Crea una variable x con valor 10', 'Imprime 10', 'Borra x'],
      correcta: 1,
      explicacion: 'El operador = asigna el valor de la derecha a la variable de la izquierda.',
    },
  ],
};

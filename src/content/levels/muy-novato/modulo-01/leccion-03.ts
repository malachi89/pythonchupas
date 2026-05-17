import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'mn-01-03',
  titulo: 'Múltiples valores y tipos de datos',
  descripcion: 'Aprende a imprimir varios valores en un mismo print() y conoce los tipos de datos básicos.',
  duracionMinutos: 10,
  conceptosClave: ['múltiples argumentos', 'tipos de datos', 'strings', 'enteros', 'floats', 'booleanos'],
  contenido: [
    { tipo: 'introduccion', texto: '`print()` puede recibir varios valores a la vez, separándolos con comas. Además, es importante conocer los tipos de datos básicos que Python puede manejar.' },
    { tipo: 'explicacion', titulo: 'Múltiples argumentos en print()', texto: 'Puedes pasar varios valores a `print()` separándolos con comas. Python los imprimirá separados por un espacio automáticamente.' },
    { tipo: 'ejemplo', titulo: 'Varios valores', descripcion: 'Pasando múltiples argumentos:', codigo: "print('Hola', 'Mundo', 42)\n# Resultado: Hola Mundo 42" },
    { tipo: 'tabla-visual', titulo: 'Tipos de datos básicos', cabeceras: ['Tipo', 'Descripción', 'Ejemplo'], filas: [['int', 'Números enteros', '42, -7, 0'], ['float', 'Números decimales', '3.14, -0.5'], ['str', 'Cadenas de texto', "'Hola', \"Adiós\""], ['bool', 'Booleanos', 'True, False']] },
    { tipo: 'ejemplo', titulo: 'Diferentes tipos', descripcion: 'Puedes mezclar tipos en un mismo print():', codigo: "print(42, 3.14, 'Python', True)" },
    { tipo: 'explicacion', titulo: 'El tipo type()', texto: 'Puedes usar `type()` para saber el tipo de cualquier valor. Es útil cuando no estás seguro de qué tipo de dato tienes.' },
    { tipo: 'ejemplo', titulo: 'Usando type()', descripcion: 'Descubriendo tipos:', codigo: "print(type(42))       # <class 'int'>\nprint(type(3.14))     # <class 'float'>\nprint(type('Hola'))  # <class 'str'>\nprint(type(True))     # <class 'bool'>" },
    { tipo: 'resumen', puntos: ['print() acepta múltiples valores separados por comas', 'Python separa los valores con espacio automáticamente', 'Los tipos básicos son: int, float, str, bool', 'type() revela el tipo de cualquier valor'] },
  ],
  ejercicios: [
    {
      id: 'mn-01-03-01',
      titulo: 'Números negativos y booleanos',
      descripcion: 'Imprime el número `-7` en una línea.',
      starter: '# Escribe tu código aquí\n',
      pistas: ["print(-7)"],
      explicacion: "Los números negativos se escriben con un guión antes.",
      solucionOficial: 'print(-7)',
      validate: { type: 'output', expected: '-7' },
    },
    {
      id: 'mn-01-03-02',
      titulo: 'Booleano True',
      descripcion: 'Usa `print()` para mostrar el valor booleano `True`.',
      starter: '# Escribe tu código aquí\n',
      pistas: ["`print(True)` — con T mayúscula"],
      explicacion: "True y False son los valores booleanos de Python (con mayúscula).",
      solucionOficial: 'print(True)',
      validate: { type: 'output', expected: 'True' },
    },
  ],
  cuestionario: [
    {
      id: 'mn-01-03-q1',
      pregunta: '¿Qué separador usa print() entre múltiples argumentos?',
      opciones: ['Una coma', 'Un espacio', 'Ninguno', 'Un guión'],
      correcta: 1,
      explicacion: 'print() separa los argumentos con un espacio por defecto.',
    },
    {
      id: 'mn-01-03-q2',
      pregunta: '¿Qué tipo de dato es 3.14?',
      opciones: ['int', 'float', 'str', 'bool'],
      correcta: 1,
      explicacion: 'Los números con punto decimal son de tipo float.',
    },
  ],
};

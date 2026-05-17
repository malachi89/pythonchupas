import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'mn-01-01',
  titulo: '¡Hola, Mundo! — Tu primer programa',
  descripcion: 'Aprende a usar la función print() para mostrar mensajes en pantalla.',
  duracionMinutos: 10,
  conceptosClave: ['print()', 'cadenas', 'números', 'salida en consola'],
  contenido: [
    { tipo: 'introduccion', texto: 'La función `print()` es la primera función que todo Pythonista aprende. Sirve para mostrar información en la pantalla. Es como tener un altavoz para que tu programa pueda hablar contigo y con el mundo.' },
    { tipo: 'explicacion', titulo: '¿Qué es print()?', texto: '`print()` es una función integrada de Python que muestra texto y números en la consola. Puedes pasarle cualquier valor y lo imprimirá. Es la herramienta más básica para ver lo que hace tu programa.' },
    { tipo: 'ejemplo', titulo: 'Tu primer print', descripcion: 'El "Hola, Mundo!" es el programa clásico para empezar:', codigo: "print('Hola, Mundo!')\n# Resultado: Hola, Mundo!" },
    { tipo: 'analogia', icono: '📣', texto: 'Piensa en `print()` como un altavoz mágico: le das algo que decir y lo grita al mundo (o al menos a la pantalla de tu computadora).' },
    { tipo: 'explicacion', titulo: 'Texto con comillas', texto: 'Cuando quieras imprimir texto, debes encerrarlo entre comillas simples `\'...\'` o dobles `"..."`. Esto le dice a Python que es una cadena de texto y no código.' },
    { tipo: 'ejemplo', titulo: 'Texto vs números', descripcion: 'Los números pueden ir sin comillas:', codigo: "print(42)\nprint(3.14)\nprint('Texto con comillas')" },
    { tipo: 'error-comun', titulo: 'Comillas faltantes', codigoMal: 'print(Hola Mundo)', problema: 'Python interpreta "Hola" y "Mundo" como nombres de variables, no como texto.', codigoBien: "print('Hola Mundo')", solucion: 'Siempre encierra el texto entre comillas simples o dobles.' },
    { tipo: 'resumen', puntos: ['print() muestra información en pantalla', 'El texto debe ir entre comillas', 'Los números no necesitan comillas', 'Cada print() crea una nueva línea'] },
  ],
  ejercicios: [
    {
      id: 'mn-01-01-01',
      titulo: 'Hola, Mundo!',
      descripcion: 'Escribe un programa que imprima exactamente `Hola, Mundo!`',
      starter: '# Escribe tu código aquí\n',
      pistas: ["Usa: `print('Hola, Mundo!')`"],
      explicacion: "print() muestra texto en pantalla. Las cadenas van entre comillas.",
      solucionOficial: "print('Hola, Mundo!')",
      validate: { type: 'output', expected: 'Hola, Mundo!' },
    },
    {
      id: 'mn-01-01-02',
      titulo: 'Tu nombre',
      descripcion: 'Usa `print()` para imprimir tu nombre. Puedes escribir cualquier nombre que quieras.',
      starter: '# Escribe tu código aquí\n',
      pistas: ["Escribe: `print('Ana')` o cualquier nombre entre comillas."],
      explicacion: "Pon cualquier texto entre comillas dentro de print(). El ejercicio acepta cualquier nombre.",
      solucionOficial: "print('Ana')  # Puedes usar cualquier nombre",
      validate: { type: 'regex', pattern: '.+' },
    },
  ],
  cuestionario: [
    {
      id: 'mn-01-01-q1',
      pregunta: '¿Qué hace la función print() en Python?',
      opciones: ['Lee datos del teclado', 'Muestra información en pantalla', 'Borra la pantalla', 'Crea una variable'],
      correcta: 1,
      explicacion: 'print() muestra texto y valores en la consola.',
    },
    {
      id: 'mn-01-01-q2',
      pregunta: '¿Cómo se escribe correctamente un print de texto?',
      opciones: ["print(Hola Mundo)", "print('Hola Mundo')", "print(Hola Mundo')", "print['Hola Mundo']"],
      correcta: 1,
      explicacion: 'El texto debe ir entre comillas simples o dobles.',
    },
    {
      id: 'mn-01-01-q3',
      pregunta: '¿Qué imprime print(42)?',
      opciones: ['Error', "'42'", '42', 'Nada'],
      correcta: 2,
      explicacion: 'Los números se imprimen sin comillas.',
    },
  ],
};

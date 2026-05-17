import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'no-05-01',
  titulo: 'Definición de funciones con def',
  descripcion: 'Aprende a crear tus propias funciones usando la palabra clave def.',
  duracionMinutos: 10,
  conceptosClave: ['def', 'función', 'parámetros', 'retorno', 'return'],
  contenido: [
    { tipo: 'introduccion', texto: 'Las funciones son bloques de código reutilizables. En lugar de escribir el mismo código varias veces, defines una función y la llamas cuando la necesites.' },
    { tipo: 'explicacion', titulo: 'Definir una función', texto: 'Usa `def` para definir una función, seguido del nombre, paréntesis y dos puntos. El bloque indentado es el cuerpo de la función.' },
    { tipo: 'ejemplo', titulo: 'Función simple', descripcion: 'Definiendo y llamando una función:', codigo: "def saludar():\n    print('¡Hola!')\n\nsaludar()  # ¡Hola!\nsaludar()  # ¡Hola!" },
    { tipo: 'explicacion', titulo: 'Parámetros y argumentos', texto: 'Los parámetros son variables que recibe la función. Los defines entre paréntesis al crear la función y pasas valores (argumentos) al llamarla.' },
    { tipo: 'ejemplo', titulo: 'Función con parámetros', descripcion: 'Pasando datos a la función:', codigo: "def saludar(nombre):\n    print('Hola,', nombre)\n\nsaludar('Ana')    # Hola, Ana\nsaludar('Luis')   # Hola, Luis" },
    { tipo: 'explicacion', titulo: 'Retornar valores con return', texto: '`return` devuelve un valor desde la función. La función termina en el return, cualquier código después no se ejecuta.' },
    { tipo: 'ejemplo', titulo: 'Función con return', descripcion: 'Devolviendo resultados:', codigo: "def suma(a, b):\n    return a + b\n\nresultado = suma(3, 5)\nprint(resultado)  # 8\nprint(suma(10, 20))  # 30" },
    { tipo: 'error-comun', titulo: 'Olvidar los paréntesis al llamar', codigoMal: 'def di_hola():\n    print("Hola")\ndi_hola', problema: 'Sin paréntesis no se llama la función, solo se referencia.', codigoBien: 'di_hola()', solucion: 'Siempre usa paréntesis para llamar una función.' },
    { tipo: 'resumen', puntos: ['def define una función', 'Los parámetros van entre paréntesis', 'return devuelve un valor', 'Las funciones permiten reutilizar código'] },
  ],
  ejercicios: [
    {
      id: 'no-05-01-01',
      titulo: 'Mi primera función',
      descripcion: 'Define una función llamada `saludar` que imprima "Hola Mundo!", luego llámala.',
      starter: '# Define la función y llámala\n',
      pistas: ["def saludar():\n    print('Hola Mundo!')\nsaludar()"],
      explicacion: "def crea la función y luego la llamas con su nombre y paréntesis.",
      solucionOficial: "def saludar():\n    print('Hola Mundo!')\nsaludar()",
      validate: { type: 'output', expected: 'Hola Mundo!' },
    },
    {
      id: 'no-05-01-02',
      titulo: 'Función que suma',
      descripcion: 'Define una función `sumar(a, b)` que devuelva a + b. Llámala con 5 y 3 e imprime el resultado.',
      starter: '# Define sumar y úsala\n',
      pistas: ["def sumar(a, b):\n    return a + b\nprint(sumar(5, 3))"],
      explicacion: "return devuelve el valor para que puedas usarlo fuera de la función.",
      solucionOficial: 'def sumar(a, b):\n    return a + b\nprint(sumar(5, 3))',
      validate: { type: 'output', expected: '8' },
    },
  ],
  cuestionario: [
    {
      id: 'no-05-01-q1',
      pregunta: '¿Qué palabra clave se usa para definir una función?',
      opciones: ['function', 'def', 'define', 'func'],
      correcta: 1,
      explicacion: 'En Python se usa `def` para definir funciones.',
    },
    {
      id: 'no-05-01-q2',
      pregunta: '¿Qué hace `return` en una función?',
      opciones: ['Imprime un valor', 'Termina la función y devuelve un valor', 'Repite la función', 'Pausa la función'],
      correcta: 1,
      explicacion: 'return termina la función y opcionalmente devuelve un valor.',
    },
  ],
};

import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-04-01',
  titulo: 'Funciones como objetos',
  descripcion: 'Aprende que las funciones son objetos de primera clase: pueden ser asignadas, pasadas como argumento y devueltas.',
  duracionMinutos: 10,
  conceptosClave: ['funciones como objetos', 'funciones de orden superior', 'callable', '__call__'],
  contenido: [
    { tipo: 'introduccion', texto: 'En Python, las funciones son objetos de primera clase. Esto significa que puedes asignarlas a variables, pasarlas como argumentos y retornarlas desde otras funciones.' },
    { tipo: 'explicacion', titulo: 'Función como objeto', texto: 'Puedes asignar una función a una variable sin llamarla (sin paréntesis). La variable se convierte en un alias de la función.' },
    { tipo: 'ejemplo', titulo: 'Asignar función', descripcion: 'Funciones como valores:', codigo: 'def saludar():\n    return "Hola!"\n\nmi_funcion = saludar  # Sin () — no se llama\nprint(mi_funcion())   # Hola!\nprint(saludar())      # Hola!' },
    { tipo: 'explicacion', titulo: 'Pasar función como argumento', texto: 'Puedes pasar una función a otra función. Esto se llama función de orden superior (higher-order function).' },
    { tipo: 'ejemplo', titulo: 'Función como argumento', descripcion: 'Pasando funciones a otras funciones:', codigo: 'def aplicar(func, valor):\n    return func(valor)\n\ndef cuadrado(n):\n    return n ** 2\n\ndef cubo(n):\n    return n ** 3\n\nprint(aplicar(cuadrado, 5))  # 25\nprint(aplicar(cubo, 5))      # 125' },
    { tipo: 'explicacion', titulo: 'Retornar funciones', texto: 'Una función puede devolver otra función. Esto es la base de los decoradores.' },
    { tipo: 'ejemplo', titulo: 'Retornar función', descripcion: 'Fábrica de funciones:', codigo: 'def crear_multiplicador(factor):\n    def multiplicar(n):\n        return n * factor\n    return multiplicar\n\ndoble = crear_multiplicador(2)\ntriple = crear_multiplicador(3)\n\nprint(doble(5))   # 10\nprint(triple(5))  # 15' },
    { tipo: 'resumen', puntos: ['Las funciones pueden asignarse a variables', 'Pueden pasarse como argumentos', 'Pueden retornarse desde otras funciones', 'Son objetos de primera clase'] },
  ],
  ejercicios: [
    {
      id: 'av-04-01-01',
      titulo: 'Asignar función',
      descripcion: 'Define `decir_hola()` que retorne "Hola!". Asígnala a `f` y llama a `f()`.',
      starter: '# Define y asigna\n',
      pistas: ["def decir_hola():\n    return 'Hola!'\n\nf = decir_hola\nprint(f())"],
      explicacion: "f = decir_hola (sin paréntesis) asigna la función, no la llama.",
      solucionOficial: "def decir_hola():\n    return 'Hola!'\n\nf = decir_hola\nprint(f())",
      validate: { type: 'output', expected: 'Hola!' },
    },
    {
      id: 'av-04-01-02',
      titulo: 'Función como argumento',
      descripcion: 'Define `ejecutar(func, x)` que llame func(x). Define `doble(n)` que retorne n*2. Pasa doble a ejecutar con 7.',
      starter: '# Define y prueba\n',
      pistas: ["def ejecutar(func, x):\n    return func(x)\n\ndef doble(n):\n    return n * 2\n\nprint(ejecutar(doble, 7))"],
      explicacion: "ejecutar recibe una función como primer argumento y la llama internamente.",
      solucionOficial: 'def ejecutar(func, x):\n    return func(x)\n\ndef doble(n):\n    return n * 2\n\nprint(ejecutar(doble, 7))',
      validate: { type: 'output', expected: '14' },
    },
  ],
  cuestionario: [
    {
      id: 'av-04-01-q1',
      pregunta: '¿Qué significa que las funciones sean objetos de primera clase?',
      opciones: ['Son más rápidas', 'Pueden asignarse a variables, pasarse y retornarse', 'Solo pueden llamarse', 'Son tipos de datos especiales'],
      correcta: 1,
      explicacion: 'Ser de primera clase significa que las funciones pueden tratarse como cualquier otro objeto.',
    },
    {
      id: 'av-04-01-q2',
      pregunta: '¿Qué imprime?\n```\ndef f():\n    return 42\n\ng = f\nprint(g())\n```',
      opciones: ['f', '42', 'g', 'Error'],
      correcta: 1,
      explicacion: 'g es un alias de f, así que g() retorna 42.',
    },
  ],
};

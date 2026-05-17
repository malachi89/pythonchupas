import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'no-05-03',
  titulo: 'Ámbito de variables y buenas prácticas',
  descripcion: 'Aprende sobre el ámbito (scope) de las variables y buenas prácticas para escribir funciones.',
  duracionMinutos: 10,
  conceptosClave: ['ámbito local', 'ámbito global', 'scope', 'buenas prácticas', 'docstrings'],
  contenido: [
    { tipo: 'introduccion', texto: 'No todas las variables son accesibles desde cualquier parte del código. El ámbito (scope) determina dónde existe una variable. Entenderlo es clave para escribir funciones correctas.' },
    { tipo: 'explicacion', titulo: 'Variables locales', texto: 'Las variables creadas dentro de una función son locales: solo existen dentro de esa función. No puedes acceder a ellas desde fuera.' },
    { tipo: 'ejemplo', titulo: 'Ámbito local', descripcion: 'Variable que solo existe en la función:', codigo: "def mi_funcion():\n    x = 10  # local\n    print(x)\n\nmi_funcion()  # 10\nprint(x)      # NameError: x no está definida" },
    { tipo: 'explicacion', titulo: 'Variables globales', texto: 'Las variables creadas fuera de cualquier función son globales. Pueden accederse desde cualquier parte, pero modificarlas dentro de una función requiere la palabra `global`.' },
    { tipo: 'ejemplo', titulo: 'Variable global', descripcion: 'Accediendo a una variable global:', codigo: 'contador = 0\n\ndef incrementar():\n    global contador\n    contador += 1\n\nincrementar()\nprint(contador)  # 1' },
    { tipo: 'explicacion', titulo: 'Buenas prácticas', texto: 'Usa funciones pequeñas que hagan una sola cosa. Pon nombres descriptivos. Usa docstrings ("""triples comillas""") para documentar qué hace la función.' },
    { tipo: 'ejemplo', titulo: 'Función bien escrita', descripcion: 'Buenas prácticas en acción:', codigo: "def calcular_imc(peso, altura):\n    '''Calcula el Índice de Masa Corporal'''\n    return peso / (altura ** 2)\n\nimc = calcular_imc(70, 1.75)\nprint(round(imc, 1))  # 22.9" },
    { tipo: 'resumen', puntos: ['Variables locales solo existen dentro de su función', 'Variables globales existen en todo el programa', 'Usa global solo cuando sea necesario', 'Funciones pequeñas y nombres descriptivos'] },
  ],
  ejercicios: [
    {
      id: 'no-05-03-01',
      titulo: 'Variable local',
      descripcion: 'Define una función `mostrar()` que cree una variable `mensaje = "Hola"` y la imprima. Llama la función.',
      starter: '# Define mostrar() y llámala\n',
      pistas: ["def mostrar():\n    mensaje = 'Hola'\n    print(mensaje)\nmostrar()"],
      explicacion: "mensaje es una variable local dentro de mostrar().",
      solucionOficial: "def mostrar():\n    mensaje = 'Hola'\n    print(mensaje)\nmostrar()",
      validate: { type: 'output', expected: 'Hola' },
    },
    {
      id: 'no-05-03-02',
      titulo: 'Función con docstring',
      descripcion: 'Define una función `cuadrado(n)` que devuelva n**2. Incluye un docstring. Llámala con 5 e imprime.',
      starter: '# Define cuadrado y llámala\n',
      pistas: ["def cuadrado(n):\n    '''Eleva n al cuadrado'''\n    return n ** 2\nprint(cuadrado(5))"],
      explicacion: "Los docstrings documentan qué hace la función.",
      solucionOficial: "def cuadrado(n):\n    '''Eleva n al cuadrado'''\n    return n ** 2\nprint(cuadrado(5))",
      validate: { type: 'output', expected: '25' },
    },
  ],
  cuestionario: [
    {
      id: 'no-05-03-q1',
      pregunta: '¿Dónde existe una variable creada dentro de una función?',
      opciones: ['En todo el programa', 'Solo dentro de esa función', 'En las funciones anidadas', 'En el módulo completo'],
      correcta: 1,
      explicacion: 'Las variables creadas dentro de una función son locales a esa función.',
    },
    {
      id: 'no-05-03-q2',
      pregunta: '¿Qué palabra clave necesitas para modificar una variable global dentro de una función?',
      opciones: ['global', 'extern', 'public', 'nonlocal'],
      correcta: 0,
      explicacion: 'global permite modificar una variable global dentro de una función.',
    },
  ],
};

import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-04-02',
  titulo: 'Decoradores: envolviendo funciones',
  descripcion: 'Aprende a crear decoradores para extender el comportamiento de funciones.',
  duracionMinutos: 10,
  conceptosClave: ['decorador', '@sintaxis', 'wrapper', 'funciones anidadas', 'extender comportamiento'],
  contenido: [
    { tipo: 'introduccion', texto: 'Un decorador es una función que envuelve otra función para extender su comportamiento sin modificar su código. Es uno de los patrones más elegantes de Python.' },
    { tipo: 'explicacion', titulo: 'Cómo funciona un decorador', texto: 'Un decorador es una función que recibe una función y devuelve una nueva función (wrapper). El wrapper ejecuta código adicional antes o después de la función original.' },
    { tipo: 'ejemplo', titulo: 'Decorador básico', descripcion: 'Creando un decorador simple:', codigo: 'def decorador(func):\n    def wrapper():\n        print("Antes de la función")\n        func()\n        print("Después de la función")\n    return wrapper\n\ndef saludar():\n    print("Hola!")\n\nsaludar = decorador(saludar)\nsaludar()\n# Antes de la función\n# Hola!\n# Después de la función' },
    { tipo: 'explicacion', titulo: 'Sintaxis con @', texto: 'Python ofrece una sintaxis más limpia usando `@nombre_del_decorador` justo antes de la definición de la función.' },
    { tipo: 'ejemplo', titulo: 'Usando @', descripcion: 'La forma elegante con decoradores:', codigo: 'def decorador(func):\n    def wrapper():\n        print("Antes")\n        func()\n        print("Después")\n    return wrapper\n\n@decorador\ndef saludar():\n    print("Hola!")\n\nsaludar()' },
    { tipo: 'explicacion', titulo: 'Decorador con argumentos', texto: 'Si la función decorada recibe argumentos, el wrapper debe aceptarlos con *args y **kwargs y pasarlos a la función original.' },
    { tipo: 'ejemplo', titulo: 'Decorador con args', descripcion: 'Manejando argumentos:', codigo: 'def decorador(func):\n    def wrapper(*args, **kwargs):\n        print(f"Llamando a {func.__name__}")\n        resultado = func(*args, **kwargs)\n        print(f"Resultado: {resultado}")\n        return resultado\n    return wrapper\n\n@decorador\ndef suma(a, b):\n    return a + b\n\nsuma(3, 5)\n# Llamando a suma\n# Resultado: 8' },
    { tipo: 'resumen', puntos: ['Decorador: función que envuelve otra función', '@decorador es azúcar sintáctico', 'El wrapper debe aceptar *args y **kwargs', 'Útil para logging, timing, validación'] },
  ],
  ejercicios: [
    {
      id: 'av-04-02-01',
      titulo: 'Decorador simple',
      descripcion: 'Crea un decorador `decorar` que haga que la función decorada imprima "Inicio" antes y "Fin" después.',
      starter: "# Define el decorador\n",
      pistas: ["def decorar(func):\n    def wrapper():\n        print('Inicio')\n        func()\n        print('Fin')\n    return wrapper\n\n@decorar\ndef prueba():\n    print('Ejecutando')\n\nprueba()"],
      explicacion: "El wrapper se ejecuta y llama a func() entre los prints.",
      solucionOficial: "def decorar(func):\n    def wrapper():\n        print('Inicio')\n        func()\n        print('Fin')\n    return wrapper\n\n@decorar\ndef prueba():\n    print('Ejecutando')\n\nprueba()",
      validate: { type: 'output', expected: 'Inicio\nEjecutando\nFin' },
    },
    {
      id: 'av-04-02-02',
      titulo: 'Decorador con args',
      descripcion: 'Crea un decorador `mostrar_llamada` que imprima "Llamando a..." antes de ejecutar la función decorada.',
      starter: "# Define el decorador\n",
      pistas: ["def mostrar_llamada(func):\n    def wrapper(*args, **kwargs):\n        print(f'Llamando a {func.__name__}')\n        return func(*args, **kwargs)\n    return wrapper\n\n@mostrar_llamada\ndef suma(a, b):\n    return a + b\n\nprint(suma(3, 5))"],
      explicacion: "*args y **kwargs capturan cualquier argumento y los pasan a func.",
      solucionOficial: "def mostrar_llamada(func):\n    def wrapper(*args, **kwargs):\n        print(f'Llamando a {func.__name__}')\n        return func(*args, **kwargs)\n    return wrapper\n\n@mostrar_llamada\ndef suma(a, b):\n    return a + b\n\nprint(suma(3, 5))",
      validate: { type: 'output', expected: 'Llamando a suma\n8' },
    },
  ],
  cuestionario: [
    {
      id: 'av-04-02-q1',
      pregunta: '¿Qué retorna un decorador?',
      opciones: ['La función original', 'Una nueva función (wrapper)', 'El resultado de la función', 'None'],
      correcta: 1,
      explicacion: 'Un decorador retorna una nueva función que envuelve a la original.',
    },
    {
      id: 'av-04-02-q2',
      pregunta: '¿Qué sintaxis usa Python para aplicar decoradores?',
      opciones: ['#decorador', '$decorador', '@decorador', '&decorador'],
      correcta: 2,
      explicacion: 'La sintaxis es @nombre_del_decorador antes de la definición de la función.',
    },
  ],
};

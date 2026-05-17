import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-01-02',
  titulo: '*args y **kwargs: parámetros variables',
  descripcion: 'Aprende a crear funciones que acepten cualquier número de argumentos con *args y **kwargs.',
  duracionMinutos: 10,
  conceptosClave: ['*args', '**kwargs', 'argumentos variables', 'empaquetado', 'desempaquetado'],
  contenido: [
    { tipo: 'introduccion', texto: 'A veces no sabes cuántos argumentos recibirá tu función. Con `*args` y `**kwargs` puedes aceptar cualquier cantidad de argumentos posicionales o nombrados.' },
    { tipo: 'explicacion', titulo: '*args — argumentos posicionales variables', texto: '`*args` recoge todos los argumentos posicionales adicionales en una tupla. El nombre `args` es convención, pero lo importante es el asterisco.' },
    { tipo: 'ejemplo', titulo: 'Usando *args', descripcion: 'Sumando cualquier cantidad de números:', codigo: 'def suma(*args):\n    total = 0\n    for n in args:\n        total += n\n    return total\n\nprint(suma(1, 2, 3))       # 6\nprint(suma(1, 2, 3, 4, 5)) # 15' },
    { tipo: 'explicacion', titulo: '**kwargs — argumentos nombrados variables', texto: '`**kwargs` recoge todos los argumentos nombrados adicionales en un diccionario. Las claves son los nombres y los valores son los argumentos.' },
    { tipo: 'ejemplo', titulo: 'Usando **kwargs', descripcion: 'Procesando argumentos nombrados:', codigo: "def mostrar_info(**kwargs):\n    for clave, valor in kwargs.items():\n        print(f'{clave}: {valor}')\n\nmostrar_info(nombre='Ana', edad=25, ciudad='Madrid')\n# nombre: Ana\n# edad: 25\n# ciudad: Madrid" },
    { tipo: 'explicacion', titulo: 'Desempaquetar con * y **', texto: 'También puedes usar * para desempaquetar listas y ** para diccionarios al llamar funciones.' },
    { tipo: 'ejemplo', titulo: 'Desempaquetado', descripcion: 'Pasando listas y diccionarios a funciones:', codigo: 'def sumar_tres(a, b, c):\n    return a + b + c\n\nnums = [1, 2, 3]\nprint(sumar_tres(*nums))  # 6\n\ndatos = {"a": 10, "b": 20, "c": 30}\nprint(sumar_tres(**datos))  # 60' },
    { tipo: 'resumen', puntos: ['*args captura argumentos posicionales extras en una tupla', '**kwargs captura argumentos nombrados extras en un dict', '*lista desempaqueta una lista al llamar', '**dict desempaqueta un diccionario al llamar'] },
  ],
  ejercicios: [
    {
      id: 'in-01-02-01',
      titulo: 'Multiplicar todos',
      descripcion: 'Define una función `multiplicar(*args)` que multiplique todos los números recibidos. Llámala con 2, 3, 4.',
      starter: '# Define multiplicar y llámala\n',
      pistas: ["def multiplicar(*args):\n    total = 1\n    for n in args:\n        total *= n\n    return total\nprint(multiplicar(2, 3, 4))"],
      explicacion: "*args empaqueta los argumentos en una tupla para iterar.",
      solucionOficial: 'def multiplicar(*args):\n    total = 1\n    for n in args:\n        total *= n\n    return total\nprint(multiplicar(2, 3, 4))',
      validate: { type: 'output', expected: '24' },
    },
    {
      id: 'in-01-02-02',
      titulo: 'Desempaquetar lista',
      descripcion: 'Define `sumar(a, b, c)` que retorne a+b+c. Crea `nums = [4, 5, 6]` y llama sumar desempaquetando nums.',
      starter: 'def sumar(a, b, c):\n    return a + b + c\nnums = [4, 5, 6]\n# Llama sumar con *nums\n',
      pistas: ["print(sumar(*nums))"],
      explicacion: "*nums desempaqueta la lista en argumentos individuales.",
      solucionOficial: 'def sumar(a, b, c):\n    return a + b + c\nnums = [4, 5, 6]\nprint(sumar(*nums))',
      validate: { type: 'output', expected: '15' },
    },
  ],
  cuestionario: [
    {
      id: 'in-01-02-q1',
      pregunta: '¿Qué tipo de dato es `args` en `def f(*args):`?',
      opciones: ['Lista', 'Tupla', 'Diccionario', 'Set'],
      correcta: 1,
      explicacion: '*args captura los argumentos extras en una tupla.',
    },
    {
      id: 'in-01-02-q2',
      pregunta: '¿Qué tipo de dato es `kwargs` en `def f(**kwargs):`?',
      opciones: ['Lista', 'Tupla', 'Diccionario', 'Set'],
      correcta: 2,
      explicacion: '**kwargs captura argumentos nombrados en un diccionario.',
    },
  ],
};

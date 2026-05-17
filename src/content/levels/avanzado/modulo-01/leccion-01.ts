import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-01-01',
  titulo: 'Clases básicas y el método __init__',
  descripcion: 'Aprende a crear clases y objetos en Python, el corazón de la Programación Orientada a Objetos.',
  duracionMinutos: 10,
  conceptosClave: ['clase', 'objeto', '__init__', 'self', 'instancia', 'atributos'],
  contenido: [
    { tipo: 'introduccion', texto: 'La Programación Orientada a Objetos (POO) organiza el código en clases que representan conceptos del mundo real. Una clase es como un molde, y los objetos son las piezas creadas con ese molde.' },
    { tipo: 'explicacion', titulo: 'Clases y objetos', texto: 'Una clase define la estructura (atributos) y comportamiento (métodos) de un tipo de objeto. Con `class Nombre:` creas una clase. El método `__init__` se ejecuta al crear un objeto (constructor).' },
    { tipo: 'ejemplo', titulo: 'Clase básica', descripcion: 'Definiendo una clase y creando objetos:', codigo: "class Gato:\n    def __init__(self, nombre, edad):\n        self.nombre = nombre\n        self.edad = edad\n\nvitola = Gato('Vitola', 7)\nprint(vitola.nombre)  # Vitola\nprint(vitola.edad)    # 7" },
    { tipo: 'explicacion', titulo: 'El parámetro self', texto: '`self` se refiere al objeto actual. Todos los métodos de instancia reciben `self` como primer parámetro. A través de `self` accedes a los atributos y métodos del objeto.' },
    { tipo: 'error-comun', titulo: 'Olvidar self', codigoMal: 'class Gato:\n    def __init__(self, nombre):\n        nombre = nombre  # No asigna al objeto', problema: 'Sin self.nombre, la variable es local al método y no se guarda en el objeto.', codigoBien: 'class Gato:\n    def __init__(self, nombre):\n        self.nombre = nombre', solucion: 'Usa self.nombre para asignar atributos al objeto.' },
    { tipo: 'resumen', puntos: ['class define una clase', '__init__ es el constructor', 'self es la referencia al objeto actual', 'Los objetos se crean con NombreClase()'] },
  ],
  ejercicios: [
    {
      id: 'av-01-01-01',
      titulo: 'Crear clase Persona',
      descripcion: 'Define una clase `Persona` con __init__ que reciba nombre y edad. Crea una instancia con nombre "Ana" y edad 25, imprime el nombre.',
      starter: '# Define la clase Persona\n',
      pistas: ["class Persona:\n    def __init__(self, nombre, edad):\n        self.nombre = nombre\n        self.edad = edad\n\np = Persona('Ana', 25)\nprint(p.nombre)"],
      explicacion: "__init__ inicializa los atributos del objeto. self.nombre guarda el nombre en el objeto.",
      solucionOficial: "class Persona:\n    def __init__(self, nombre, edad):\n        self.nombre = nombre\n        self.edad = edad\n\np = Persona('Ana', 25)\nprint(p.nombre)",
      validate: { type: 'output', expected: 'Ana' },
    },
    {
      id: 'av-01-01-02',
      titulo: 'Clase Rectángulo',
      descripcion: 'Define una clase `Rectangulo` con __init__(base, altura). Crea un rectángulo de base 5 y altura 3, imprime la base.',
      starter: '# Define Rectangulo y úsala\n',
      pistas: ["class Rectangulo:\n    def __init__(self, base, altura):\n        self.base = base\n        self.altura = altura\n\nr = Rectangulo(5, 3)\nprint(r.base)"],
      explicacion: "Los atributos se asignan con self.atributo = valor en __init__.",
      solucionOficial: "class Rectangulo:\n    def __init__(self, base, altura):\n        self.base = base\n        self.altura = altura\n\nr = Rectangulo(5, 3)\nprint(r.base)",
      validate: { type: 'output', expected: '5' },
    },
  ],
  cuestionario: [
    {
      id: 'av-01-01-q1',
      pregunta: '¿Qué representa `self` dentro de un método de clase?',
      opciones: ['La clase misma', 'El objeto actual', 'El módulo', 'Ninguna de las anteriores'],
      correcta: 1,
      explicacion: 'self es la referencia al objeto (instancia) actual.',
    },
    {
      id: 'av-01-01-q2',
      pregunta: '¿Cuándo se ejecuta el método __init__?',
      opciones: ['Al definir la clase', 'Al crear un objeto (instanciar)', 'Al llamar a un método', 'Al importar el módulo'],
      correcta: 1,
      explicacion: '__init__ se ejecuta automáticamente cuando creas un objeto.',
    },
  ],
};

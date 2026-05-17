import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-01-02',
  titulo: 'Métodos y atributos de clase',
  descripcion: 'Aprende a agregar métodos a las clases y a usar atributos de clase y métodos estáticos.',
  duracionMinutos: 10,
  conceptosClave: ['métodos de instancia', 'atributos de clase', '@staticmethod', '@classmethod'],
  contenido: [
    { tipo: 'introduccion', texto: 'Las clases pueden tener métodos (funciones del objeto) que operan sobre sus datos. También hay atributos compartidos por todos los objetos de la clase.' },
    { tipo: 'explicacion', titulo: 'Métodos de instancia', texto: 'Los métodos de instancia reciben `self` como primer argumento y pueden acceder y modificar los atributos del objeto.' },
    { tipo: 'ejemplo', titulo: 'Métodos de instancia', descripcion: 'Clase con métodos:', codigo: "class Gato:\n    def __init__(self, nombre):\n        self.nombre = nombre\n\n    def maullar(self):\n        return f'{self.nombre} dice: ¡Miau!'\n\n    def cumplir_anios(self):\n        self.edad += 1\n\nvitola = Gato('Vitola')\nprint(vitola.maullar())  # Vitola dice: ¡Miau!" },
    { tipo: 'explicacion', titulo: 'Atributos de clase', texto: 'Los atributos de clase se definen fuera de __init__ y son compartidos por todas las instancias. Se acceden con `Clase.atributo` o `self.atributo`.' },
    { tipo: 'ejemplo', titulo: 'Atributo de clase', descripcion: 'Compartiendo datos entre instancias:', codigo: "class Gato:\n    especie = 'Felis catus'  # Atributo de clase\n\n    def __init__(self, nombre):\n        self.nombre = nombre\n\nprint(Gato.especie)  # Felis catus\nv = Gato('Vitola')\nprint(v.especie)     # Felis catus" },
    { tipo: 'explicacion', titulo: 'Métodos estáticos y de clase', texto: '`@staticmethod` no recibe self ni cls, es como una función normal dentro de la clase. `@classmethod` recibe cls (la clase) en lugar de self.' },
    { tipo: 'ejemplo', titulo: 'Static y classmethod', descripcion: 'Métodos especiales:', codigo: "class Calculadora:\n    @staticmethod\n    def sumar(a, b):\n        return a + b\n\n    @classmethod\n    def crear_desde_string(cls, texto):\n        # Lógica de creación alternativa\n        pass\n\nprint(Calculadora.sumar(3, 4))  # 7" },
    { tipo: 'resumen', puntos: ['self permite acceder a atributos y métodos del objeto', 'Atributos de clase son compartidos por todas las instancias', '@staticmethod para métodos sin self', 'Los métodos encapsulan el comportamiento del objeto'] },
  ],
  ejercicios: [
    {
      id: 'av-01-02-01',
      titulo: 'Método en clase',
      descripcion: 'Agrega a la clase `Perro` un método `ladrar()` que retorne "Guau!". Crea un perro y llama al método.',
      starter: "class Perro:\n    def __init__(self, nombre):\n        self.nombre = nombre\n    # Agrega el método ladrar\n",
      pistas: ["    def ladrar(self):\n        return 'Guau!'\n\np = Perro('Rex')\nprint(p.ladrar())"],
      explicacion: "Los métodos de instancia reciben self y pueden acceder a los atributos del objeto.",
      solucionOficial: "class Perro:\n    def __init__(self, nombre):\n        self.nombre = nombre\n    def ladrar(self):\n        return 'Guau!'\n\np = Perro('Rex')\nprint(p.ladrar())",
      validate: { type: 'output', expected: 'Guau!' },
    },
    {
      id: 'av-01-02-02',
      titulo: 'Atributo de clase',
      descripcion: 'Define una clase `Contador` con un atributo de clase `total = 0`. En __init__, incrementa Contador.total en 1. Crea dos instancias e imprime Contador.total.',
      starter: '# Define la clase Contador\n',
      pistas: ["class Contador:\n    total = 0\n    def __init__(self):\n        Contador.total += 1\n\nc1 = Contador()\nc2 = Contador()\nprint(Contador.total)"],
      explicacion: "El atributo de clase es compartido y se incrementa con cada nueva instancia.",
      solucionOficial: "class Contador:\n    total = 0\n    def __init__(self):\n        Contador.total += 1\n\nc1 = Contador()\nc2 = Contador()\nprint(Contador.total)",
      validate: { type: 'output', expected: '2' },
    },
  ],
  cuestionario: [
    {
      id: 'av-01-02-q1',
      pregunta: '¿Qué recibe un método de instancia como primer parámetro?',
      opciones: ['cls', 'self', 'instance', 'Nada'],
      correcta: 1,
      explicacion: 'self es el primer parámetro de los métodos de instancia.',
    },
    {
      id: 'av-01-02-q2',
      pregunta: '¿Para qué sirve @staticmethod?',
      opciones: ['Crea un método que recibe la clase', 'Crea un método que no recibe self ni cls', 'Hace el método privado', 'Convierte el método en atributo'],
      correcta: 1,
      explicacion: '@staticmethod define un método que no recibe self ni cls, como una función normal dentro de la clase.',
    },
  ],
};

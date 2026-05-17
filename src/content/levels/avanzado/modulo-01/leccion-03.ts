import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-01-03',
  titulo: 'Herencia en Python',
  descripcion: 'Aprende a crear jerarquías de clases mediante herencia, reutilizando y extendiendo código.',
  duracionMinutos: 10,
  conceptosClave: ['herencia', 'super()', 'clase padre', 'clase hija', 'polimorfismo', 'sobrescritura'],
  contenido: [
    { tipo: 'introduccion', texto: 'La herencia permite crear una clase nueva basada en una existente. La clase hija hereda todos los atributos y métodos de la clase padre y puede agregar o modificar comportamientos.' },
    { tipo: 'explicacion', titulo: 'Herencia básica', texto: 'Para heredar, pones el nombre de la clase padre entre paréntesis: `class Hija(Padre):`. La hija hereda todo de la clase padre.' },
    { tipo: 'ejemplo', titulo: 'Herencia simple', descripcion: 'Clase que hereda de otra:', codigo: "class Animal:\n    def __init__(self, nombre):\n        self.nombre = nombre\n\n    def saludar(self):\n        return f'Soy {self.nombre}'\n\nclass Perro(Animal):\n    def ladrar(self):\n        return 'Guau!'\n\nrex = Perro('Rex')\nprint(rex.saludar())  # Soy Rex (heredado)\nprint(rex.ladrar())   # Guau! (propio)" },
    { tipo: 'explicacion', titulo: 'Sobrescritura y super()', texto: 'Puedes sobrescribir métodos de la clase padre. Con `super()` llamas al método de la clase padre, lo que evita duplicar código.' },
    { tipo: 'ejemplo', titulo: 'Super y sobrescritura', descripcion: 'Extendiendo el constructor del padre:', codigo: "class Gato(Animal):\n    def __init__(self, nombre, vidas=7):\n        super().__init__(nombre)  # Llama al __init__ de Animal\n        self.vidas = vidas\n\n    def saludar(self):  # Sobrescritura\n        return f'{super().saludar()} y tengo {self.vidas} vidas'\n\nvitola = Gato('Vitola')\nprint(vitola.saludar())" },
    { tipo: 'explicacion', titulo: 'Polimorfismo', texto: 'El polimorfismo permite tratar objetos de diferentes clases de manera uniforme si comparten una interfaz común (clase padre).' },
    { tipo: 'ejemplo', titulo: 'Polimorfismo', descripcion: 'Usando el mismo método en diferentes clases:', codigo: "class Perro(Animal):\n    def hacer_sonido(self):\n        return 'Guau'\n\nclass Gato(Animal):\n    def hacer_sonido(self):\n        return 'Miau'\n\nanimales = [Perro('Rex'), Gato('Vitola')]\nfor a in animales:\n    print(a.hacer_sonido())" },
    { tipo: 'resumen', puntos: ['Herencia: class Hija(Padre):', 'super() llama métodos de la clase padre', 'Puedes sobrescribir métodos en la hija', 'Polimorfismo: tratar objetos distintos de forma uniforme'] },
  ],
  ejercicios: [
    {
      id: 'av-01-03-01',
      titulo: 'Herencia básica',
      descripcion: 'Define una clase `Animal` con __init__(nombre). Crea una clase `Pajaro` que herede de Animal y tenga un método `volar()` que retorne "Volando!".',
      starter: "# Define Animal y Pajaro\n",
      pistas: ["class Animal:\n    def __init__(self, nombre):\n        self.nombre = nombre\n\nclass Pajaro(Animal):\n    def volar(self):\n        return 'Volando!'\n\np = Pajaro('Twitter')\nprint(p.volar())"],
      explicacion: "Pajaro hereda de Animal y agrega un método propio volar().",
      solucionOficial: "class Animal:\n    def __init__(self, nombre):\n        self.nombre = nombre\n\nclass Pajaro(Animal):\n    def volar(self):\n        return 'Volando!'\n\np = Pajaro('Twitter')\nprint(p.volar())",
      validate: { type: 'output', expected: 'Volando!' },
    },
    {
      id: 'av-01-03-02',
      titulo: 'Super en herencia',
      descripcion: "Define `Empleado` con __init__(nombre, salario). Crea `Gerente` que herede y agregue `bono`. Usa super().__init__ en el constructor.",
      starter: '# Define Empleado y Gerente\n',
      pistas: ["class Empleado:\n    def __init__(self, nombre, salario):\n        self.nombre = nombre\n        self.salario = salario\n\nclass Gerente(Empleado):\n    def __init__(self, nombre, salario, bono):\n        super().__init__(nombre, salario)\n        self.bono = bono\n\njefe = Gerente('Ana', 50000, 10000)\nprint(jefe.nombre, jefe.salario, jefe.bono)"],
      explicacion: "super().__init__() llama al constructor de la clase padre.",
      solucionOficial: "class Empleado:\n    def __init__(self, nombre, salario):\n        self.nombre = nombre\n        self.salario = salario\n\nclass Gerente(Empleado):\n    def __init__(self, nombre, salario, bono):\n        super().__init__(nombre, salario)\n        self.bono = bono\n\njefe = Gerente('Ana', 50000, 10000)\nprint(jefe.nombre, jefe.salario, jefe.bono)",
      validate: { type: 'output', expected: 'Ana 50000 10000' },
    },
  ],
  cuestionario: [
    {
      id: 'av-01-03-q1',
      pregunta: '¿Para qué sirve `super()` en una clase hija?',
      opciones: ['Crear un objeto de la clase padre', 'Llamar métodos de la clase padre', 'Eliminar la clase hija', 'Convertir la clase en padre'],
      correcta: 1,
      explicacion: 'super() permite acceder a los métodos de la clase padre.',
    },
    {
      id: 'av-01-03-q2',
      pregunta: '¿Qué es el polimorfismo?',
      opciones: ['Crear múltiples clases', 'Tratar objetos distintos de forma uniforme si comparten interface', 'Eliminar métodos heredados', 'Cambiar el tipo de un objeto'],
      correcta: 1,
      explicacion: 'Polimorfismo: usar el mismo método en diferentes clases con comportamientos distintos.',
    },
  ],
};

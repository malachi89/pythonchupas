import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-06-03',
  titulo: 'Proyecto final: combinando todo lo aprendido',
  descripcion: 'Un proyecto completo que integra todos los conceptos del curso.',
  duracionMinutos: 10,
  conceptosClave: ['proyecto integrador', 'sistema completo', 'clases', 'organización'],
  contenido: [
    { tipo: 'introduccion', texto: 'Este es tu desafío final: crear un sistema de gestión que integre funciones, clases, estructuras de datos y manejo de errores. ¡Todo lo que has aprendido!' },
    { tipo: 'explicacion', titulo: 'Sistema de gestión de tareas', texto: 'Vas a construir un sistema simple de gestión de tareas (todo list). La meta es ver cómo todos los conceptos trabajan juntos.' },
    { tipo: 'ejemplo', titulo: 'Clase Tarea', descripcion: 'El modelo de datos:', codigo: "class Tarea:\n    def __init__(self, titulo, prioridad='media'):\n        self.titulo = titulo\n        self.prioridad = prioridad\n        self.completada = False\n\n    def marcar_completada(self):\n        self.completada = True\n\n    def __str__(self):\n        estado = '✓' if self.completada else '✗'\n        return f'[{estado}] {self.titulo} ({self.prioridad})'" },
    { tipo: 'explicacion', titulo: 'El gestor de tareas', texto: 'El gestor usa listas, diccionarios, manejo de errores y métodos para organizar las tareas.' },
    { tipo: 'ejemplo', titulo: 'Gestor de Tareas', descripcion: 'Clase principal del sistema:', codigo: "class GestorTareas:\n    def __init__(self):\n        self.tareas = []\n\n    def agregar(self, titulo, prioridad='media'):\n        self.tareas.append(Tarea(titulo, prioridad))\n\n    def listar(self, solo_pendientes=False):\n        for t in self.tareas:\n            if not solo_pendientes or not t.completada:\n                print(t)\n\n    def completar(self, indice):\n        try:\n            self.tareas[indice].marcar_completada()\n        except IndexError:\n            print('Índice inválido')\n\n    def tareas_por_prioridad(self):\n        prioridades = {}\n        for t in self.tareas:\n            prioridades[t.prioridad] = \\\n                prioridades.get(t.prioridad, 0) + 1\n        return prioridades" },
    { tipo: 'explicacion', titulo: 'Usando el sistema', texto: 'Poniendo todo a trabajar junto.' },
    { tipo: 'ejemplo', titulo: 'Demo del sistema', descripcion: 'Probando el gestor completo:', codigo: "gestor = GestorTareas()\ngestor.agregar('Estudiar Python', 'alta')\ngestor.agregar('Hacer ejercicio', 'media')\ngestor.agregar('Leer un libro', 'baja')\ngestor.completar(0)\ngestor.listar()\nprint()\nprint('Prioridades:', gestor.tareas_por_prioridad())" },
    { tipo: 'nota', texto: 'Este proyecto final demuestra cómo clases, listas, diccionarios, try/except y métodos trabajan juntos en una aplicación real.' },
    { tipo: 'resumen', puntos: ['Un proyecto real combina clases, listas, dicts y errores', 'La organización del código es tan importante como la funcionalidad', 'Has recorrido un largo camino desde print("Hola Mundo")', '¡Sigue practicando y construyendo!'] },
  ],
  ejercicios: [
    {
      id: 'av-06-03-01',
      titulo: 'Clase Tarea simple',
      descripcion: 'Define una clase `Tarea` con __init__(self, titulo). Crea una tarea "Aprender Python" e imprime su título.',
      starter: '# Define la clase Tarea\n',
      pistas: ["class Tarea:\n    def __init__(self, titulo):\n        self.titulo = titulo\n\nt = Tarea('Aprender Python')\nprint(t.titulo)"],
      explicacion: "El constructor __init__ asigna el título al atributo del objeto.",
      solucionOficial: "class Tarea:\n    def __init__(self, titulo):\n        self.titulo = titulo\n\nt = Tarea('Aprender Python')\nprint(t.titulo)",
      validate: { type: 'output', expected: 'Aprender Python' },
    },
    {
      id: 'av-06-03-02',
      titulo: 'Gestor con lista',
      descripcion: 'Define una función `agregar_tarea(lista, tarea)` que agregue una tarea a la lista. Agrega "Comprar pan" y muestra la lista.',
      starter: '# Define la función y úsala\n',
      pistas: ["def agregar_tarea(lista, tarea):\n    lista.append(tarea)\n\ntareas = []\nagregar_tarea(tareas, 'Comprar pan')\nprint(tareas)"],
      explicacion: "append() agrega al final de la lista.",
      solucionOficial: "def agregar_tarea(lista, tarea):\n    lista.append(tarea)\n\ntareas = []\nagregar_tarea(tareas, 'Comprar pan')\nprint(tareas)",
      validate: { type: 'output', expected: "['Comprar pan']" },
    },
  ],
  cuestionario: [
    {
      id: 'av-06-03-q1',
      pregunta: '¿Qué has aprendido en este curso desde la primera lección?',
      opciones: ['Solo print()', 'Desde print() hasta clases y proyectos', 'Solo condicionales', 'Solo funciones'],
      correcta: 1,
      explicacion: 'Has recorrido desde lo más básico (print) hasta programación orientada a objetos y proyectos completos.',
    },
    {
      id: 'av-06-03-q2',
      pregunta: '¿Cuál es el siguiente paso después de este curso?',
      opciones: ['Dejar de programar', 'Practicar con proyectos reales', 'Solo ver videos', 'Nada más'],
      correcta: 1,
      explicacion: 'La mejor forma de seguir aprendiendo es construir proyectos personales y practicar regularmente.',
    },
  ],
};

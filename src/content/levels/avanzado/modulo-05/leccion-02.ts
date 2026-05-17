import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-05-02',
  titulo: 'Listas enlazadas',
  descripcion: 'Aprende a implementar una lista enlazada simple en Python.',
  duracionMinutos: 10,
  conceptosClave: ['nodo', 'lista enlazada', 'puntero', 'inserción'],
  contenido: [
    { tipo: 'introduccion', texto: 'Las listas enlazadas son estructuras donde cada elemento (nodo) contiene un valor y un puntero al siguiente nodo. Son la base de muchas estructuras de datos avanzadas.' },
    { tipo: 'explicacion', titulo: 'Estructura de un nodo', texto: 'Un nodo tiene dos partes: el valor que almacena y una referencia al siguiente nodo (o None si es el último). La lista se recorre siguiendo estas referencias.' },
    { tipo: 'ejemplo', titulo: 'Clase Nodo', descripcion: 'Definiendo un nodo:', codigo: 'class Nodo:\n    def __init__(self, valor):\n        self.valor = valor\n        self.siguiente = None\n\n# Crear nodos\nnodo1 = Nodo(1)\nnodo2 = Nodo(2)\nnodo3 = Nodo(3)\n\n# Enlazar\nnodo1.siguiente = nodo2\nnodo2.siguiente = nodo3' },
    { tipo: 'explicacion', titulo: 'Recorrer la lista', texto: 'Para recorrer la lista, empiezas por la cabeza (head) y vas siguiendo los punteros "siguiente" hasta llegar a None.' },
    { tipo: 'ejemplo', titulo: 'Recorrer lista', descripcion: 'Imprimiendo todos los valores:', codigo: 'def imprimir_lista(cabeza):\n    actual = cabeza\n    while actual:\n        print(actual.valor, end=" -> ")\n        actual = actual.siguiente\n    print("None")\n\nimprimir_lista(nodo1)  # 1 -> 2 -> 3 -> None' },
    { tipo: 'explicacion', titulo: 'Clase ListaEnlazada completa', texto: 'Puedes crear una clase que maneje toda la lógica de inserción, búsqueda y eliminación.' },
    { tipo: 'ejemplo', titulo: 'ListaEnlazada', descripcion: 'Implementación básica:', codigo: 'class ListaEnlazada:\n    def __init__(self):\n        self.cabeza = None\n\n    def insertar(self, valor):\n        nuevo = Nodo(valor)\n        nuevo.siguiente = self.cabeza\n        self.cabeza = nuevo\n\n    def imprimir(self):\n        actual = self.cabeza\n        while actual:\n            print(actual.valor, end=" -> ")\n            actual = actual.siguiente\n        print("None")\n\nlista = ListaEnlazada()\nlista.insertar(3)\nlista.insertar(2)\nlista.insertar(1)\nlista.imprimir()  # 1 -> 2 -> 3 -> None' },
    { tipo: 'resumen', puntos: ['Cada nodo guarda un valor y un puntero al siguiente', 'La cabeza (head) es el primer nodo', 'Recorrer: seguir punteros hasta None', 'Inserción eficiente al inicio O(1)'] },
  ],
  ejercicios: [
    {
      id: 'av-05-02-01',
      titulo: 'Crear y enlazar nodos',
      descripcion: 'Crea tres nodos con valores 10, 20, 30. Enlázalos en orden. Imprime el valor del segundo nodo (accediendo desde el primero).',
      starter: '# Crea los nodos\n',
      pistas: ["class Nodo:\n    def __init__(self, valor):\n        self.valor = valor\n        self.siguiente = None\n\nn1 = Nodo(10)\nn2 = Nodo(20)\nn3 = Nodo(30)\nn1.siguiente = n2\nn2.siguiente = n3\nprint(n1.siguiente.valor)"],
      explicacion: "n1.siguiente es n2, y n2.valor es 20.",
      solucionOficial: "class Nodo:\n    def __init__(self, valor):\n        self.valor = valor\n        self.siguiente = None\n\nn1 = Nodo(10)\nn2 = Nodo(20)\nn3 = Nodo(30)\nn1.siguiente = n2\nn2.siguiente = n3\nprint(n1.siguiente.valor)",
      validate: { type: 'output', expected: '20' },
    },
    {
      id: 'av-05-02-02',
      titulo: 'Recorrer lista enlazada',
      descripcion: 'Usando la clase Nodo, crea nodos con valores 5, 15, 25. Enlázalos en orden y escribe una función `recorrer(cabeza)` que imprima cada valor en una línea.',
      starter: '# Crea nodos y función para recorrer\n',
      pistas: ["class Nodo:\n    def __init__(self, valor):\n        self.valor = valor\n        self.siguiente = None\n\ndef recorrer(cabeza):\n    actual = cabeza\n    while actual:\n        print(actual.valor)\n        actual = actual.siguiente\n\nn1 = Nodo(5)\nn2 = Nodo(15)\nn3 = Nodo(25)\nn1.siguiente = n2\nn2.siguiente = n3\nrecorrer(n1)"],
      explicacion: "El while recorre la lista siguiendo los punteros 'siguiente' hasta llegar a None.",
      solucionOficial: "class Nodo:\n    def __init__(self, valor):\n        self.valor = valor\n        self.siguiente = None\n\ndef recorrer(cabeza):\n    actual = cabeza\n    while actual:\n        print(actual.valor)\n        actual = actual.siguiente\n\nn1 = Nodo(5)\nn2 = Nodo(15)\nn3 = Nodo(25)\nn1.siguiente = n2\nn2.siguiente = n3\nrecorrer(n1)",
      validate: { type: 'output', expected: '5\n15\n25' },
    },
  ],
  cuestionario: [
    {
      id: 'av-05-02-q1',
      pregunta: '¿Qué contiene un nodo de una lista enlazada simple?',
      opciones: ['Solo el valor', 'El valor y el índice', 'El valor y referencia al siguiente', 'El valor y el nodo anterior'],
      correcta: 2,
      explicacion: 'Un nodo tiene un valor y una referencia (puntero) al siguiente nodo.',
    },
    {
      id: 'av-05-02-q2',
      pregunta: '¿Cómo se llama el primer nodo de una lista enlazada?',
      opciones: ['Primero', 'Inicio', 'Cabeza (head)', 'Raíz'],
      correcta: 2,
      explicacion: 'El primer nodo se llama cabeza (head).',
    },
  ],
};

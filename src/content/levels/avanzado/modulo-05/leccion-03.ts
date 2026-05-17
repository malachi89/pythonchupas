import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-05-03',
  titulo: 'Árboles binarios básicos',
  descripcion: 'Introducción a los árboles binarios y cómo recorrerlos.',
  duracionMinutos: 10,
  conceptosClave: ['árbol', 'nodo raíz', 'nodo hoja', 'subárbol izquierdo', 'subárbol derecho', 'recorrido inorden'],
  contenido: [
    { tipo: 'introduccion', texto: 'Un árbol binario es una estructura donde cada nodo tiene hasta dos hijos: izquierdo y derecho. Es la base de estructuras como árboles de búsqueda y montículos.' },
    { tipo: 'explicacion', titulo: 'Estructura de un árbol binario', texto: 'Cada nodo tiene un valor, un hijo izquierdo y un hijo derecho (cualquiera puede ser None). El nodo superior se llama raíz y los nodos sin hijos se llaman hojas.' },
    { tipo: 'ejemplo', titulo: 'Crear un árbol', descripcion: 'Definiendo la clase NodoArbol:', codigo: 'class NodoArbol:\n    def __init__(self, valor):\n        self.valor = valor\n        self.izquierdo = None\n        self.derecho = None\n\n# Construir árbol manual:\n#     1\n#    / \\\n#   2   3\n#  /\n# 4\nraiz = NodoArbol(1)\nraiz.izquierdo = NodoArbol(2)\nraiz.derecho = NodoArbol(3)\nraiz.izquierdo.izquierdo = NodoArbol(4)' },
    { tipo: 'explicacion', titulo: 'Recorrido inorden', texto: 'Hay varias formas de recorrer un árbol. El inorden visita: izquierdo, raíz, derecho. Da los valores en orden ascendente si es un árbol de búsqueda.' },
    { tipo: 'ejemplo', titulo: 'Recorrido inorden recursivo', descripcion: 'Visitando en orden:', codigo: 'def inorden(nodo):\n    if nodo:\n        inorden(nodo.izquierdo)\n        print(nodo.valor, end=" ")\n        inorden(nodo.derecho)\n\ninorden(raiz)  # 4 2 1 3' },
    { tipo: 'explicacion', titulo: 'Preorden y postorden', texto: 'Preorden: raíz, izquierdo, derecho (útil para copiar). Postorden: izquierdo, derecho, raíz (útil para eliminar).' },
    { tipo: 'ejemplo', titulo: 'Recorridos', descripcion: 'Los tres recorridos básicos:', codigo: 'def preorden(nodo):\n    if nodo:\n        print(nodo.valor, end=" ")\n        preorden(nodo.izquierdo)\n        preorden(nodo.derecho)\n\ndef postorden(nodo):\n    if nodo:\n        postorden(nodo.izquierdo)\n        postorden(nodo.derecho)\n        print(nodo.valor, end=" ")\n\nprint("Preorden:", end=" ")\npreorden(raiz)   # 1 2 4 3\nprint("\\nPostorden:", end=" ")\npostorden(raiz)  # 4 2 3 1' },
    { tipo: 'resumen', puntos: ['Árbol binario: cada nodo tiene 0-2 hijos', 'Raíz: nodo superior, Hojas: nodos sin hijos', 'Inorden: izq-raíz-der', 'Preorden: raíz-izq-der, Postorden: izq-der-raíz'] },
  ],
  ejercicios: [
    {
      id: 'av-05-03-01',
      titulo: 'Crear árbol simple',
      descripcion: 'Crea un árbol con raíz 5, izquierdo 3, derecho 8. Imprime el valor del hijo derecho.',
      starter: '# Crea el árbol\n',
      pistas: ["class NodoArbol:\n    def __init__(self, valor):\n        self.valor = valor\n        self.izquierdo = None\n        self.derecho = None\n\nraiz = NodoArbol(5)\nraiz.izquierdo = NodoArbol(3)\nraiz.derecho = NodoArbol(8)\nprint(raiz.derecho.valor)"],
      explicacion: "raiz.derecho es el nodo con valor 8, y .valor accede a ese valor.",
      solucionOficial: "class NodoArbol:\n    def __init__(self, valor):\n        self.valor = valor\n        self.izquierdo = None\n        self.derecho = None\n\nraiz = NodoArbol(5)\nraiz.izquierdo = NodoArbol(3)\nraiz.derecho = NodoArbol(8)\nprint(raiz.derecho.valor)",
      validate: { type: 'output', expected: '8' },
    },
  ],
  cuestionario: [
    {
      id: 'av-05-03-q1',
      pregunta: '¿Cuántos hijos puede tener un nodo en un árbol binario?',
      opciones: ['1', '2', 'Hasta 2', 'Ilimitados'],
      correcta: 2,
      explicacion: 'En un árbol binario, cada nodo puede tener 0, 1 o 2 hijos.',
    },
    {
      id: 'av-05-03-q2',
      pregunta: '¿Qué orden sigue el recorrido inorden?',
      opciones: ['Raíz, izquierdo, derecho', 'Izquierdo, raíz, derecho', 'Izquierdo, derecho, raíz', 'Derecho, raíz, izquierdo'],
      correcta: 1,
      explicacion: 'Inorden: izquierdo, raíz, derecho.',
    },
  ],
};

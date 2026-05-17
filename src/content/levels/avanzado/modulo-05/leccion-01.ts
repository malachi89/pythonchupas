import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-05-01',
  titulo: 'Pilas y colas',
  descripcion: 'Aprende a implementar pilas (LIFO) y colas (FIFO) en Python.',
  duracionMinutos: 10,
  conceptosClave: ['pila', 'stack', 'LIFO', 'cola', 'queue', 'FIFO', 'deque'],
  contenido: [
    { tipo: 'introduccion', texto: 'Las pilas y colas son estructuras de datos fundamentales. Las pilas siguen LIFO (último en entrar, primero en salir) y las colas FIFO (primero en entrar, primero en salir).' },
    { tipo: 'explicacion', titulo: 'Pilas (Stacks) — LIFO', texto: 'Una pila es como una pila de platos: el último que pones es el primero que sacas. En Python, puedes usar una lista como pila con `append()` para apilar y `pop()` para desapilar.' },
    { tipo: 'ejemplo', titulo: 'Pila con lista', descripcion: 'Simulando una pila:', codigo: 'pila = []\npila.append(1)  # Apilar\npila.append(2)\npila.append(3)\nprint(pila.pop())  # 3 (último)\nprint(pila.pop())  # 2\nprint(pila)        # [1]' },
    { tipo: 'explicacion', titulo: 'Colas (Queues) — FIFO', texto: 'Una cola es como una fila de personas: el primero en llegar es el primero en salir. Usar lista.pop(0) es ineficiente. Lo mejor es usar `collections.deque`.' },
    { tipo: 'ejemplo', titulo: 'Cola con deque', descripcion: 'Usando deque para colas:', codigo: 'from collections import deque\n\ncola = deque()\ncola.append(1)  # Encolar\ncola.append(2)\ncola.append(3)\nprint(cola.popleft())  # 1 (primero)\nprint(cola.popleft())  # 2\nprint(list(cola))      # [3]' },
    { tipo: 'explicacion', titulo: 'Deque: el mejor de ambos mundos', texto: '`deque` (double-ended queue) permite agregar y quitar eficientemente por ambos extremos. Úsalo siempre para pilas y colas cuando necesites rendimiento.' },
    { tipo: 'ejemplo', titulo: 'Deque completo', descripcion: 'Operaciones con deque:', codigo: 'from collections import deque\n\nd = deque([1, 2, 3])\nd.append(4)        # Agregar derecha\nd.appendleft(0)    # Agregar izquierda\nprint(d)           # deque([0, 1, 2, 3, 4])\nprint(d.pop())     # 4 (saca derecha)\nprint(d.popleft()) # 0 (saca izquierda)' },
    { tipo: 'resumen', puntos: ['Pila (LIFO): append/pop en lista', 'Cola (FIFO): append/popleft en deque', 'deque es eficiente para ambos extremos', 'deque > lista cuando necesitas colas'] },
  ],
  ejercicios: [
    {
      id: 'av-05-01-01',
      titulo: 'Pila simple',
      descripcion: 'Usa una lista como pila. Apila 1, 2, 3 y luego desapila e imprime el último elemento.',
      starter: '# Usa una lista como pila\n',
      pistas: ["pila = []\npila.append(1)\npila.append(2)\npila.append(3)\nprint(pila.pop())"],
      explicacion: "pop() en una lista siempre saca el último elemento (LIFO).",
      solucionOficial: 'pila = []\npila.append(1)\npila.append(2)\npila.append(3)\nprint(pila.pop())',
      validate: { type: 'output', expected: '3' },
    },
    {
      id: 'av-05-01-02',
      titulo: 'Cola con deque',
      descripcion: 'Usa deque como cola. Encola "a", "b", "c" y desencola e imprime el primer elemento.',
      starter: 'from collections import deque\n# Usa deque como cola\n',
      pistas: ["cola = deque()\ncola.append('a')\ncola.append('b')\ncola.append('c')\nprint(cola.popleft())"],
      explicacion: "popleft() saca el primer elemento (FIFO).",
      solucionOficial: "from collections import deque\ncola = deque()\ncola.append('a')\ncola.append('b')\ncola.append('c')\nprint(cola.popleft())",
      validate: { type: 'output', expected: 'a' },
    },
  ],
  cuestionario: [
    {
      id: 'av-05-01-q1',
      pregunta: '¿Qué principio sigue una pila?',
      opciones: ['FIFO', 'LIFO', 'Random', 'Ordenado'],
      correcta: 1,
      explicacion: 'LIFO: Last In, First Out (último en entrar, primero en salir).',
    },
    {
      id: 'av-05-01-q2',
      pregunta: '¿Qué estructura de datos es más eficiente para una cola FIFO?',
      opciones: ['list', 'deque', 'set', 'dict'],
      correcta: 1,
      explicacion: 'deque es más eficiente que list para operaciones en ambos extremos.',
    },
  ],
};

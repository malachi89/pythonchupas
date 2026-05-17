import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-06-02',
  titulo: 'Desafíos de algoritmos y estructuras',
  descripcion: 'Resuelve desafíos más avanzados combinando algoritmos y estructuras de datos.',
  duracionMinutos: 10,
  conceptosClave: ['anagramas', 'frecuencias', 'ordenamiento avanzado', 'búsqueda', 'eficiencia'],
  contenido: [
    { tipo: 'introduccion', texto: 'Estos desafíos requieren combinar múltiples conceptos: diccionarios para conteo, algoritmos de búsqueda y manipulación de strings.' },
    { tipo: 'explicacion', titulo: 'Anagramas', texto: 'Dos palabras son anagramas si tienen las mismas letras en diferente orden. Puedes verificarlo ordenando las letras o contando frecuencias.' },
    { tipo: 'ejemplo', titulo: 'Verificar anagramas', descripcion: 'Dos formas de detectar anagramas:', codigo: "def son_anagramas(p1, p2):\n    return sorted(p1) == sorted(p2)\n\ndef son_anagramas_frec(p1, p2):\n    from collections import Counter\n    return Counter(p1) == Counter(p2)\n\nprint(son_anagramas('roma', 'amor'))  # True\nprint(son_anagramas('hola', 'adios')) # False" },
    { tipo: 'explicacion', titulo: 'Encontrar duplicados', texto: 'Encontrar elementos duplicados en una lista es un problema clásico. La solución eficiente usa un set.' },
    { tipo: 'ejemplo', titulo: 'Duplicados', descripcion: 'Detectando duplicados:', codigo: 'def tiene_duplicados(lista):\n    return len(lista) != len(set(lista))\n\ndef encontrar_duplicados(lista):\n    vistos = set()\n    duplicados = set()\n    for item in lista:\n        if item in vistos:\n            duplicados.add(item)\n        else:\n            vistos.add(item)\n    return list(duplicados)\n\nprint(encontrar_duplicados([1, 2, 3, 2, 4, 3]))  # [2, 3]' },
    { tipo: 'explicacion', titulo: 'FizzBuzz', texto: 'El clásico FizzBuzz: imprime números del 1 al n. Para múltiplos de 3 imprime "Fizz", de 5 "Buzz", de ambos "FizzBuzz".' },
    { tipo: 'ejemplo', titulo: 'FizzBuzz', descripcion: 'Implementación clásica:', codigo: 'def fizzbuzz(n):\n    for i in range(1, n + 1):\n        if i % 15 == 0:\n            print("FizzBuzz")\n        elif i % 3 == 0:\n            print("Fizz")\n        elif i % 5 == 0:\n            print("Buzz")\n        else:\n            print(i)\n\nfizzbuzz(15)' },
    { tipo: 'resumen', puntos: ['Anagramas: sorted() o Counter() para comparar', 'Duplicados: set para detección eficiente', 'FizzBuzz: desafío clásico de entrevistas', 'Counter del módulo collections es muy útil'] },
  ],
  ejercicios: [
    {
      id: 'av-06-02-01',
      titulo: '¿Son anagramas?',
      descripcion: "Implementa una función `son_anagramas(a, b)` que retorne True si tienen las mismas letras. Prueba con 'listen' y 'silent'.",
      starter: "# Implementa son_anagramas\n",
      pistas: ["def son_anagramas(a, b):\n    return sorted(a) == sorted(b)\n\nprint(son_anagramas('listen', 'silent'))"],
      explicacion: "sorted() ordena las letras, si son iguales, son anagramas.",
      solucionOficial: "def son_anagramas(a, b):\n    return sorted(a) == sorted(b)\n\nprint(son_anagramas('listen', 'silent'))",
      validate: { type: 'output', expected: 'True' },
    },
    {
      id: 'av-06-02-02',
      titulo: 'FizzBuzz básico',
      descripcion: 'Implementa fizzbuzz hasta 5. Debe imprimir 1, 2, Fizz, 4, Buzz.',
      starter: '# Implementa FizzBuzz\n',
      pistas: ["for i in range(1, 6):\n    if i % 15 == 0:\n        print('FizzBuzz')\n    elif i % 3 == 0:\n        print('Fizz')\n    elif i % 5 == 0:\n        print('Buzz')\n    else:\n        print(i)"],
      explicacion: "FizzBuzz: 3 → Fizz, 5 → Buzz, 15 → FizzBuzz.",
      solucionOficial: "for i in range(1, 6):\n    if i % 15 == 0:\n        print('FizzBuzz')\n    elif i % 3 == 0:\n        print('Fizz')\n    elif i % 5 == 0:\n        print('Buzz')\n    else:\n        print(i)",
      validate: { type: 'output', expected: '1\n2\nFizz\n4\nBuzz' },
    },
  ],
  cuestionario: [
    {
      id: 'av-06-02-q1',
      pregunta: '¿Qué import necesitas para usar Counter?',
      opciones: ['import counter', 'from collections import Counter', 'from itertools import Counter', 'import collections'],
      correcta: 1,
      explicacion: 'Counter está en el módulo collections: from collections import Counter.',
    },
    {
      id: 'av-06-02-q2',
      pregunta: '¿Qué imprime FizzBuzz para 3?',
      opciones: ['3', 'Fizz', 'Buzz', 'FizzBuzz'],
      correcta: 1,
      explicacion: '3 es múltiplo de 3, así que imprime "Fizz".',
    },
  ],
};

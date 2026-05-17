import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-02-02',
  titulo: 'Métodos de diccionarios',
  descripcion: 'Aprende a usar keys(), values(), items(), pop() y otros métodos esenciales de diccionarios.',
  duracionMinutos: 10,
  conceptosClave: ['keys()', 'values()', 'items()', 'pop()', 'update()', 'del'],
  contenido: [
    { tipo: 'introduccion', texto: 'Los diccionarios tienen métodos que te permiten iterar sobre sus claves, valores o pares, así como eliminar y fusionar elementos.' },
    { tipo: 'explicacion', titulo: 'Iterar sobre diccionarios', texto: '`keys()` devuelve las claves, `values()` los valores, e `items()` devuelve pares (clave, valor) como tuplas. Son ideales para bucles.' },
    { tipo: 'ejemplo', titulo: 'Iterando', descripcion: 'Recorriendo un diccionario:', codigo: "persona = {'nombre': 'Ana', 'edad': 25, 'ciudad': 'Madrid'}\n\nfor clave in persona.keys():\n    print(clave)\n\nfor valor in persona.values():\n    print(valor)\n\nfor clave, valor in persona.items():\n    print(f'{clave}: {valor}')" },
    { tipo: 'explicacion', titulo: 'Eliminar elementos', texto: '`pop(clave)` elimina y devuelve el valor. `del dict[clave]` elimina sin devolver. `popitem()` elimina y devuelve el último par agregado.' },
    { tipo: 'ejemplo', titulo: 'Eliminar del diccionario', descripcion: 'Diferentes formas de eliminar:', codigo: "d = {'a': 1, 'b': 2, 'c': 3}\nvalor = d.pop('a')\nprint(valor)  # 1\nprint(d)      # {'b': 2, 'c': 3}\n\ndel d['b']\nprint(d)  # {'c': 3}" },
    { tipo: 'explicacion', titulo: 'Fusionar con update()', texto: '`update(otro_dict)` agrega los pares de otro diccionario. Si hay claves repetidas, se sobrescriben.' },
    { tipo: 'ejemplo', titulo: 'update()', descripcion: 'Fusionando diccionarios:', codigo: "d1 = {'a': 1, 'b': 2}\nd2 = {'c': 3, 'd': 4}\nd1.update(d2)\nprint(d1)  # {'a': 1, 'b': 2, 'c': 3, 'd': 4}" },
    { tipo: 'resumen', puntos: ['keys(), values(), items() para iterar', 'pop(clave) elimina y devuelve', 'del dict[clave] elimina', 'update() fusiona diccionarios'] },
  ],
  ejercicios: [
    {
      id: 'in-02-02-01',
      titulo: 'Iterar items',
      descripcion: "Crea `d = {'x': 10, 'y': 20}` e imprime cada clave y valor con un for.",
      starter: "d = {'x': 10, 'y': 20}\n# Itera e imprime\n",
      pistas: ["for k, v in d.items():\n    print(k, v)"],
      explicacion: "items() devuelve pares (clave, valor) para iterar.",
      solucionOficial: "d = {'x': 10, 'y': 20}\nfor k, v in d.items():\n    print(k, v)",
      validate: { type: 'output', expected: 'x 10\ny 20' },
    },
    {
      id: 'in-02-02-02',
      titulo: 'Usar pop',
      descripcion: "Crea `d = {'a': 1, 'b': 2, 'c': 3}`, elimina 'a' con pop e imprime el diccionario.",
      starter: "d = {'a': 1, 'b': 2, 'c': 3}\n# Elimina 'a' con pop\n",
      pistas: ["d.pop('a')\nprint(d)"],
      explicacion: "pop() elimina la clave y devuelve su valor.",
      solucionOficial: "d = {'a': 1, 'b': 2, 'c': 3}\nd.pop('a')\nprint(d)",
      validate: { type: 'output', expected: "{'b': 2, 'c': 3}" },
    },
  ],
  cuestionario: [
    {
      id: 'in-02-02-q1',
      pregunta: '¿Qué devuelve `dict.items()`?',
      opciones: ['Lista de claves', 'Lista de valores', 'Pares (clave, valor) como tuplas', 'Lista de tuplas (valor, clave)'],
      correcta: 2,
      explicacion: 'items() devuelve una vista de pares (clave, valor).',
    },
    {
      id: 'in-02-02-q2',
      pregunta: '¿Qué hace `update()` en un diccionario?',
      opciones: ['Ordena el diccionario', 'Fusiona otro diccionario', 'Elimina elementos duplicados', 'Invierte claves y valores'],
      correcta: 1,
      explicacion: 'update() agrega o sobrescribe pares de otro diccionario.',
    },
  ],
};

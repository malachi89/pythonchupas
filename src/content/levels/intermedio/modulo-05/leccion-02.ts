import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-05-02',
  titulo: 'Sets: colecciones sin duplicados',
  descripcion: 'Aprende a usar sets para almacenar elementos únicos y realizar operaciones de conjuntos.',
  duracionMinutos: 10,
  conceptosClave: ['set', 'conjunto', 'elementos únicos', 'operaciones de conjuntos', 'unión', 'intersección'],
  contenido: [
    { tipo: 'introduccion', texto: 'Los sets (conjuntos) son colecciones desordenadas de elementos únicos. Son ideales para eliminar duplicados y realizar operaciones matemáticas de conjuntos.' },
    { tipo: 'explicacion', titulo: 'Crear sets', texto: 'Se crean con llaves `{}` o con `set()`. No pueden contener elementos duplicados: si agregas un duplicado, se ignora. Para un set vacío, debes usar `set()` porque `{}` crea un diccionario.' },
    { tipo: 'ejemplo', titulo: 'Creando sets', descripcion: 'Sets básicos:', codigo: "frutas = {'manzana', 'pera', 'uva', 'manzana'}\nprint(frutas)  # {'pera', 'uva', 'manzana'} (orden variable, sin duplicados)\n\nset_vacio = set()\nprint(type(set_vacio))  # <class 'set'>" },
    { tipo: 'explicacion', titulo: 'Operaciones de conjuntos', texto: 'Los sets soportan operaciones matemáticas: unión (`|`), intersección (`&`), diferencia (`-`) y diferencia simétrica (`^`).' },
    { tipo: 'tabla-visual', titulo: 'Operaciones con sets', cabeceras: ['Operación', 'Símbolo', 'Descripción'], filas: [['Unión', 'A | B', 'Elementos de A o B'], ['Intersección', 'A & B', 'Elementos en A y B'], ['Diferencia', 'A - B', 'Elementos en A pero no en B'], ['Dif. simétrica', 'A ^ B', 'Elementos en A o B, pero no en ambos']] },
    { tipo: 'ejemplo', titulo: 'Operaciones con sets', descripcion: 'Aplicando operaciones:', codigo: 'a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a | b)  # {1, 2, 3, 4, 5, 6}\nprint(a & b)  # {3, 4}\nprint(a - b)  # {1, 2}\nprint(a ^ b)  # {1, 2, 5, 6}' },
    { tipo: 'explicacion', titulo: 'Métodos de sets', texto: 'add(), remove(), discard() y pop() permiten modificar sets. discard() no da error si el elemento no existe.' },
    { tipo: 'ejemplo', titulo: 'Métodos básicos', descripcion: 'Trabajando con sets:', codigo: "s = {1, 2, 3}\ns.add(4)\nprint(s)           # {1, 2, 3, 4}\ns.discard(2)       # Elimina 2 si existe\nprint(s)           # {1, 3, 4}\ns.discard(99)      # No da error" },
    { tipo: 'resumen', puntos: ['Sets son colecciones sin duplicados', '| unión, & intersección, - diferencia', 'add() agrega, discard() elimina sin error', 'No tienen orden definido'] },
  ],
  ejercicios: [
    {
      id: 'in-05-02-01',
      titulo: 'Eliminar duplicados',
      descripcion: 'Crea una lista `nums = [1, 2, 2, 3, 3, 3, 4]` y conviértela a set. Luego conviértelo de vuelta a lista.',
      starter: 'nums = [1, 2, 2, 3, 3, 3, 4]\n# Elimina duplicados\n',
      pistas: ["print(list(set(nums)))"],
      explicacion: "set() elimina duplicados y list() lo vuelve a convertir en lista.",
      solucionOficial: 'nums = [1, 2, 2, 3, 3, 3, 4]\nprint(list(set(nums)))',
      validate: { type: 'contains', strings: ['1', '2', '3', '4'] },
    },
    {
      id: 'in-05-02-02',
      titulo: 'Intersección de sets',
      descripcion: "Crea `a = {1, 2, 3, 4}` y `b = {3, 4, 5, 6}`. Imprime la intersección (elementos comunes).",
      starter: 'a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\n# Imprime intersección\n',
      pistas: ["print(a & b)"],
      explicacion: "& devuelve los elementos presentes en ambos sets.",
      solucionOficial: 'a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a & b)',
      validate: { type: 'output', expected: '{3, 4}' },
    },
  ],
  cuestionario: [
    {
      id: 'in-05-02-q1',
      pregunta: '¿Qué imprime?\n```\nprint(len({1, 2, 2, 3}))\n```',
      opciones: ['4', '3', '2', 'Error'],
      correcta: 1,
      explicacion: 'Los duplicados se eliminan: {1, 2, 3} tiene 3 elementos.',
    },
    {
      id: 'in-05-02-q2',
      pregunta: '¿Qué operación de sets encuentra elementos en común?',
      opciones: ['| (unión)', '& (intersección)', '- (diferencia)', '^ (dif. simétrica)'],
      correcta: 1,
      explicacion: '& (intersección) encuentra elementos presentes en ambos sets.',
    },
  ],
};

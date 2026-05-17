import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'no-02-02',
  titulo: 'For con listas y strings',
  descripcion: 'Aprende a iterar sobre listas y strings usando bucles for.',
  duracionMinutos: 10,
  conceptosClave: ['for con listas', 'for con strings', 'iteración de secuencias'],
  contenido: [
    { tipo: 'introduccion', texto: 'El bucle `for` no solo sirve con `range()`. Puedes iterar directamente sobre cualquier secuencia: listas, strings, tuplas y más.' },
    { tipo: 'explicacion', titulo: 'For con listas', texto: 'Puedes recorrer cada elemento de una lista directamente, sin necesidad de índices. El for asigna cada elemento a la variable del bucle.' },
    { tipo: 'ejemplo', titulo: 'Iterar lista', descripcion: 'Recorriendo una lista de nombres:', codigo: "nombres = ['Ana', 'Luis', 'Carlos']\nfor nombre in nombres:\n    print(nombre)\n# Ana, Luis, Carlos" },
    { tipo: 'explicacion', titulo: 'For con strings', texto: 'Los strings son secuencias de caracteres, así que puedes iterar sobre cada letra.' },
    { tipo: 'ejemplo', titulo: 'Iterar string', descripcion: 'Recorriendo cada letra:', codigo: "for letra in 'Python':\n    print(letra)\n# P, y, t, h, o, n" },
    { tipo: 'explicacion', titulo: 'Usar índices con enumerate()', texto: 'A veces necesitas tanto el valor como su posición. `enumerate()` te da ambos en cada iteración.' },
    { tipo: 'ejemplo', titulo: 'enumerate', descripcion: 'Índice y valor juntos:', codigo: "frutas = ['manzana', 'pera', 'uva']\nfor i, fruta in enumerate(frutas):\n    print(i, fruta)\n# 0 manzana, 1 pera, 2 uva" },
    { tipo: 'resumen', puntos: ['for recorre directamente listas y strings', 'La variable del bucle toma cada valor', 'Los strings iteran letra por letra', 'enumerate() da el índice y el valor'] },
  ],
  ejercicios: [
    {
      id: 'no-02-02-01',
      titulo: 'Iterar una lista',
      descripcion: "Crea `colores = ['rojo', 'verde', 'azul']` e imprime cada color con un for.",
      starter: "colores = ['rojo', 'verde', 'azul']\n# Itera sobre colores\n",
      pistas: ["for color in colores:\n    print(color)"],
      explicacion: "El for recorre cada elemento de la lista automáticamente.",
      solucionOficial: "colores = ['rojo', 'verde', 'azul']\nfor color in colores:\n    print(color)",
      validate: { type: 'output', expected: 'rojo\nverde\nazul' },
    },
    {
      id: 'no-02-02-02',
      titulo: 'Iterar un string',
      descripcion: "Usa un for para imprimir cada letra de 'Python' en una línea.",
      starter: "# Itera sobre 'Python'\n",
      pistas: ["for letra in 'Python':\n    print(letra)"],
      explicacion: "Los strings son secuencias iterables carácter por carácter.",
      solucionOficial: "for letra in 'Python':\n    print(letra)",
      validate: { type: 'output', expected: 'P\ny\nt\nh\no\nn' },
    },
  ],
  cuestionario: [
    {
      id: 'no-02-02-q1',
      pregunta: "¿Qué imprime?\n```\nfor x in [10, 20, 30]:\n    print(x)\n```",
      opciones: ['10, 20, 30', '10\\n20\\n30', '10 20 30', 'Error'],
      correcta: 1,
      explicacion: 'Cada elemento se imprime en su propia línea.',
    },
    {
      id: 'no-02-02-q2',
      pregunta: "¿Qué devuelve enumerate() en cada iteración?",
      opciones: ['Solo el índice', 'Solo el valor', 'Una tupla (índice, valor)', 'Nada'],
      correcta: 2,
      explicacion: 'enumerate() devuelve pares (índice, valor) en cada iteración.',
    },
  ],
};

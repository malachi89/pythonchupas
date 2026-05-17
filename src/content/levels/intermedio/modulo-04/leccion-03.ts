import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-04-03',
  titulo: 'Expresiones avanzadas en F-Strings',
  descripcion: 'Domina los f-strings con expresiones complejas, diccionarios, condicionales y debugging.',
  duracionMinutos: 10,
  conceptosClave: ['expresiones complejas', 'diccionarios en f-strings', 'condicionales ternarios', 'debugging con ='],
  contenido: [
    { tipo: 'introduccion', texto: 'Los f-strings pueden contener expresiones avanzadas como llamadas a funciones, condicionales ternarios, acceso a diccionarios y más.' },
    { tipo: 'explicacion', titulo: 'Diccionarios y listas en f-strings', texto: 'Puedes acceder directamente a elementos de listas y diccionarios dentro de los f-strings.' },
    { tipo: 'ejemplo', titulo: 'Acceso a colecciones', descripcion: 'Usando listas y diccionarios:', codigo: "persona = {'nombre': 'Ana', 'edad': 25}\nprint(f'{persona[\"nombre\"]} tiene {persona[\"edad\"]} años')\n# Ana tiene 25 años\n\ncolores = ['rojo', 'verde', 'azul']\nprint(f'El primer color es {colores[0]}')" },
    { tipo: 'explicacion', titulo: 'Condicional ternario en f-string', texto: 'Puedes usar condicionales ternarios dentro de las llaves para mostrar diferentes valores según una condición.' },
    { tipo: 'ejemplo', titulo: 'Ternario en f-string', descripcion: 'Condicional dentro del formato:', codigo: "edad = 17\nprint(f'Estado: {\"Mayor\" if edad >= 18 else \"Menor\"} de edad')\n# Estado: Menor de edad" },
    { tipo: 'explicacion', titulo: 'Debugging con =', texto: 'En Python 3.8+ puedes usar `{variable=}` en f-strings para imprimir el nombre y valor de la variable. Es muy útil para depuración.' },
    { tipo: 'ejemplo', titulo: 'Debugging con f-strings', descripcion: 'Usando = para depurar:', codigo: 'x = 10\ny = 20\nprint(f"{x=}, {y=}")  # x=10, y=20\nprint(f"{x + y=}")      # x + y=30' },
    { tipo: 'resumen', puntos: ['Accede a dict[clave] y lista[índice] en f-strings', 'Usa ternarios: {"Sí" if cond else "No"}', '{x=} imprime nombre y valor (debugging)', 'Los f-strings aceptan cualquier expresión'] },
  ],
  ejercicios: [
    {
      id: 'in-04-03-01',
      titulo: 'Diccionario en f-string',
      descripcion: "Crea `d = {'nombre': 'Vitola', 'edad': 7}`. Usa f-string para imprimir 'Vitola tiene 7 años'.",
      starter: "d = {'nombre': 'Vitola', 'edad': 7}\n# Usa f-string\n",
      pistas: ["print(f'{d[\"nombre\"]} tiene {d[\"edad\"]} años')"],
      explicacion: "Accede a los valores del diccionario dentro del f-string.",
      solucionOficial: "d = {'nombre': 'Vitola', 'edad': 7}\nprint(f'{d[\"nombre\"]} tiene {d[\"edad\"]} años')",
      validate: { type: 'output', expected: 'Vitola tiene 7 años' },
    },
    {
      id: 'in-04-03-02',
      titulo: 'Ternario en f-string',
      descripcion: "Crea `edad = 20`. Usa f-string para imprimir 'Adulto' si >= 18, 'Menor' si no.",
      starter: 'edad = 20\n# Usa f-string con ternario\n',
      pistas: ["print(f'{\"Adulto\" if edad >= 18 else \"Menor\"}')"],
      explicacion: "El ternario dentro de {} evalúa la condición y muestra el resultado.",
      solucionOficial: 'edad = 20\nprint(f\'{\"Adulto\" if edad >= 18 else \"Menor\"}\')',
      validate: { type: 'output', expected: 'Adulto' },
    },
  ],
  cuestionario: [
    {
      id: 'in-04-03-q1',
      pregunta: "¿Qué imprime?\n```\nn = 10\nprint(f'{n=}')\n```",
      opciones: ['10', 'n=10', 'n = 10', 'Error'],
      correcta: 1,
      explicacion: '{n=} imprime el nombre de la variable y su valor: n=10.',
    },
    {
      id: 'in-04-03-q2',
      pregunta: "¿Qué imprime?\n```\nedad = 16\nprint(f'{\"Pasa\" if edad >= 18 else \"No pasa\"}')\n```",
      opciones: ['Pasa', 'No pasa', 'True', 'Error'],
      correcta: 1,
      explicacion: '16 < 18, así que el ternario devuelve "No pasa".',
    },
  ],
};

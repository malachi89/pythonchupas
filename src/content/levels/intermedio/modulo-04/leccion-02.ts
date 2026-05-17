import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-04-02',
  titulo: 'Formato y alineación en F-Strings',
  descripcion: 'Aprende a controlar el formato de números y la alineación de texto en f-strings.',
  duracionMinutos: 10,
  conceptosClave: ['formato de números', 'decimales', 'alineación', 'relleno', 'especificadores de formato'],
  contenido: [
    { tipo: 'introduccion', texto: 'Los f-strings permiten controlar cómo se muestran los valores: cantidad de decimales, ancho mínimo, alineación y relleno.' },
    { tipo: 'explicacion', titulo: 'Formato de decimales', texto: 'Dentro de las llaves, después de dos puntos, puedes especificar el formato. `:.2f` significa 2 decimales fijos.' },
    { tipo: 'ejemplo', titulo: 'Controlar decimales', descripcion: 'Formateando números decimales:', codigo: 'pi = 3.14159265\nprint(f"Pi con 2 decimales: {pi:.2f}")   # Pi con 2 decimales: 3.14\nprint(f"Pi con 4 decimales: {pi:.4f}")   # Pi con 4 decimales: 3.1416\n\nprecio = 19.5\nprint(f"Precio: ${precio:.2f}")          # Precio: $19.50' },
    { tipo: 'explicacion', titulo: 'Alinear texto', texto: 'Puedes especificar un ancho mínimo y alineación: `<` izquierda, `>` derecha, `^` centro.' },
    { tipo: 'ejemplo', titulo: 'Alineación', descripcion: 'Alineando columnas:', codigo: "nombre = 'Ana'\nedad = 25\nprint(f'|{nombre:<10}|{edad:>5}|')  # |Ana       |   25|\nprint(f'|{nombre:^10}|{edad:^5}|')  # |   Ana    | 25  |" },
    { tipo: 'explicacion', titulo: 'Relleno con caracteres', texto: 'Puedes especificar un carácter de relleno antes de la alineación.' },
    { tipo: 'ejemplo', titulo: 'Relleno personalizado', descripcion: 'Rellenando con guiones:', codigo: "titulo = 'PYTHON'\nprint(f'{titulo:-^20}')  # -------PYTHON-------\nprint(f'{titulo:_>20}')  # ______________PYTHON" },
    { tipo: 'resumen', puntos: ['{valor:.2f} controla decimales', '{valor:>10} alinea a la derecha con ancho 10', '{valor:^10} centra', '{valor:-^10} centra con relleno de guiones'] },
  ],
  ejercicios: [
    {
      id: 'in-04-02-01',
      titulo: 'Decimales con f-string',
      descripcion: "Crea `pi = 3.14159`. Usa f-string para imprimir 'Pi = 3.14' (con 2 decimales).",
      starter: 'pi = 3.14159\n# Imprime con 2 decimales\n',
      pistas: ["print(f'Pi = {pi:.2f}')"],
      explicacion: ":.2f redondea a 2 decimales.",
      solucionOficial: 'pi = 3.14159\nprint(f\'Pi = {pi:.2f}\')',
      validate: { type: 'output', expected: 'Pi = 3.14' },
    },
    {
      id: 'in-04-02-02',
      titulo: 'Alinear texto',
      descripcion: "Crea `texto = 'Hola'`. Usa f-string para imprimir el texto centrado en 10 espacios: `  Hola   `.",
      starter: "texto = 'Hola'\n# Centra en 10 espacios\n",
      pistas: ["print(f'{texto:^10}')"],
      explicacion: ":^10 centra el texto en un ancho de 10 caracteres.",
      solucionOficial: "texto = 'Hola'\nprint(f'{texto:^10}')",
      validate: { type: 'output', expected: '  Hola   ' },
    },
  ],
  cuestionario: [
    {
      id: 'in-04-02-q1',
      pregunta: "¿Qué imprime?\n```\nx = 5.6789\nprint(f'{x:.1f}')\n```",
      opciones: ['5.6789', '5.6', '5.7', '5.68'],
      correcta: 2,
      explicacion: ':.1f redondea a 1 decimal: 5.7.',
    },
    {
      id: 'in-04-02-q2',
      pregunta: '¿Qué especificador centra el texto?',
      opciones: ['{:<}', '{:>}', '{:^}', '{:~}'],
      correcta: 2,
      explicacion: '^ centra, < alinea a izquierda, > alinea a derecha.',
    },
  ],
};

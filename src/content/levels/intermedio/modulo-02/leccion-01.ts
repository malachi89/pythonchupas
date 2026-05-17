import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-02-01',
  titulo: 'Introducción a los diccionarios',
  descripcion: 'Aprende qué son los diccionarios y cómo crear, acceder y modificar sus pares clave-valor.',
  duracionMinutos: 10,
  conceptosClave: ['diccionario', 'clave', 'valor', 'par clave-valor', 'dict'],
  contenido: [
    { tipo: 'introduccion', texto: 'Los diccionarios almacenan pares clave-valor. En lugar de usar índices numéricos como las listas, accedes a los valores por una clave única.' },
    { tipo: 'explicacion', titulo: 'Crear diccionarios', texto: 'Los diccionarios se crean con llaves `{}`. Cada elemento tiene una clave y un valor separados por dos puntos. Las claves deben ser únicas e inmutables.' },
    { tipo: 'ejemplo', titulo: 'Diccionario básico', descripcion: 'Creando y accediendo a diccionarios:', codigo: "persona = {\n    'nombre': 'Ana',\n    'edad': 25,\n    'ciudad': 'Madrid'\n}\nprint(persona['nombre'])  # Ana\nprint(persona['edad'])    # 25" },
    { tipo: 'explicacion', titulo: 'Acceso seguro con get()', texto: 'Si intentas acceder a una clave que no existe con `[]`, obtienes un error. `get()` es más seguro: devuelve None (o un valor por defecto) si la clave no existe.' },
    { tipo: 'ejemplo', titulo: 'get()', descripcion: 'Acceso seguro a claves:', codigo: "persona = {'nombre': 'Ana', 'edad': 25}\nprint(persona.get('nombre'))       # Ana\nprint(persona.get('pais'))         # None\nprint(persona.get('pais', 'MX'))   # MX (valor por defecto)" },
    { tipo: 'explicacion', titulo: 'Modificar diccionarios', texto: 'Puedes agregar nuevos pares o modificar existentes asignando a una clave. Si la clave existe, se actualiza; si no, se crea.' },
    { tipo: 'ejemplo', titulo: 'Modificar diccionario', descripcion: 'Agregando y actualizando:', codigo: "persona = {'nombre': 'Ana'}\npersona['edad'] = 25      # Agregar nuevo\npersona['nombre'] = 'Ana María'  # Actualizar\nprint(persona)  # {'nombre': 'Ana María', 'edad': 25}" },
    { tipo: 'resumen', puntos: ['Los diccionarios usan {clave: valor}', 'Se accede con dict[clave] o dict.get(clave)', 'Las claves deben ser únicas e inmutables', 'Asignar a una clave nueva la crea, a una existente la actualiza'] },
  ],
  ejercicios: [
    {
      id: 'in-02-01-01',
      titulo: 'Crear y acceder',
      descripcion: "Crea un diccionario `alumno = {'nombre': 'Luis', 'edad': 22}` e imprime el nombre.",
      starter: "# Crea el diccionario y accede\n",
      pistas: ["alumno = {'nombre': 'Luis', 'edad': 22}\nprint(alumno['nombre'])"],
      explicacion: "Los corchetes con la clave acceden al valor correspondiente.",
      solucionOficial: "alumno = {'nombre': 'Luis', 'edad': 22}\nprint(alumno['nombre'])",
      validate: { type: 'output', expected: 'Luis' },
    },
    {
      id: 'in-02-01-02',
      titulo: 'Usar get()',
      descripcion: "Crea `d = {'a': 1, 'b': 2}` e imprime `d.get('c', 0)`.",
      starter: "# Usa get con valor por defecto\n",
      pistas: ["d = {'a': 1, 'b': 2}\nprint(d.get('c', 0))"],
      explicacion: "get() con valor por defecto evita errores si la clave no existe.",
      solucionOficial: "d = {'a': 1, 'b': 2}\nprint(d.get('c', 0))",
      validate: { type: 'output', expected: '0' },
    },
  ],
  cuestionario: [
    {
      id: 'in-02-01-q1',
      pregunta: '¿Qué tipo de datos pueden ser claves en un diccionario?',
      opciones: ['Cualquier tipo', 'Solo strings', 'Tipos inmutables (str, int, tuple)', 'Solo números'],
      correcta: 2,
      explicacion: 'Las claves deben ser inmutables: strings, números, tuplas, pero no listas.',
    },
    {
      id: 'in-02-01-q2',
      pregunta: '¿Qué pasa si accedes a `d["x"]` y "x" no existe en el diccionario?',
      opciones: ['Devuelve None', 'Devuelve 0', 'Lanza KeyError', 'Crea la clave'],
      correcta: 2,
      explicacion: 'Acceder con [] a una clave inexistente lanza KeyError.',
    },
  ],
};

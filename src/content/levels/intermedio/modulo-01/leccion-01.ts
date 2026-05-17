import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-01-01',
  titulo: 'Parámetros por defecto y argumentos nombrados',
  descripcion: 'Aprende a usar parámetros con valores por defecto y a pasar argumentos por nombre.',
  duracionMinutos: 10,
  conceptosClave: ['valores por defecto', 'argumentos nombrados', 'argumentos posicionales', 'keyword arguments'],
  contenido: [
    { tipo: 'introduccion', texto: 'Las funciones de Python son muy flexibles. Puedes definir valores por defecto para parámetros y llamar funciones pasando argumentos por nombre en cualquier orden.' },
    { tipo: 'explicacion', titulo: 'Parámetros con valor por defecto', texto: 'Los valores por defecto hacen que un parámetro sea opcional. Si no pasas un argumento, se usa el valor por defecto. Los parámetros con default deben ir al final.' },
    { tipo: 'ejemplo', titulo: 'Parámetros opcionales', descripcion: 'Funciones con valores por defecto:', codigo: "def presentar(nombre, saludo='Hola'):\n    print(f'{saludo}, {nombre}!')\n\npresentar('Ana')           # Hola, Ana!\npresentar('Ana', 'Adiós')  # Adiós, Ana!" },
    { tipo: 'explicacion', titulo: 'Argumentos nombrados (keyword arguments)', texto: 'Puedes pasar argumentos usando el nombre del parámetro. Esto permite pasarlos en cualquier orden y hace el código más legible.' },
    { tipo: 'ejemplo', titulo: 'Argumentos por nombre', descripcion: 'Pasando argumentos en distinto orden:', codigo: 'def datos(nombre, edad, ciudad):\n    print(f"{nombre} tiene {edad} años y vive en {ciudad}")\n\ndatos(ciudad="Madrid", nombre="Ana", edad=25)\n# Ana tiene 25 años y vive en Madrid' },
    { tipo: 'explicacion', titulo: 'Reglas de orden', texto: 'Primero deben ir los argumentos posicionales y luego los nombrados. No puedes poner un argumento posicional después de uno nombrado.' },
    { tipo: 'ejemplo', titulo: 'Mezcla de argumentos', descripcion: 'Mezclando posicionales y nombrados:', codigo: 'def pedido(producto, cantidad, urgente=False):\n    print(f"{cantidad}x {producto}" + (" (URGENTE)" if urgente else ""))\n\npedido("Manzanas", 5)          # 5x Manzanas\npedido("Peras", 3, urgente=True)    # 3x Peras (URGENTE)' },
    { tipo: 'resumen', puntos: ['Parámetros por defecto hacen argumentos opcionales', 'Los default deben ir después de los obligatorios', 'keyword arguments = pasar por nombre', 'Posicionales primero, luego nombrados'] },
  ],
  ejercicios: [
    {
      id: 'in-01-01-01',
      titulo: 'Saludo personalizado',
      descripcion: "Define `saludar(nombre, mensaje='Hola')` que imprima mensaje + ', ' + nombre. Llámala con 'Luis'.",
      starter: '# Define la función y llámala\n',
      pistas: ["def saludar(nombre, mensaje='Hola'):\n    print(mensaje + ', ' + nombre)\nsaludar('Luis')"],
      explicacion: "mensaje tiene valor por defecto 'Hola'.",
      solucionOficial: "def saludar(nombre, mensaje='Hola'):\n    print(mensaje + ', ' + nombre)\nsaludar('Luis')",
      validate: { type: 'output', expected: 'Hola, Luis' },
    },
    {
      id: 'in-01-01-02',
      titulo: 'Argumentos nombrados',
      descripcion: 'Define `mostrar(a, b, c)` que imprima a+b+c. Llámala con argumentos nombrados en orden inverso: c=3, a=1, b=2.',
      starter: '# Define mostrar y llámala\n',
      pistas: ["def mostrar(a, b, c):\n    print(a + b + c)\nmostrar(c=3, a=1, b=2)"],
      explicacion: "Los argumentos nombrados pueden ir en cualquier orden.",
      solucionOficial: 'def mostrar(a, b, c):\n    print(a + b + c)\nmostrar(c=3, a=1, b=2)',
      validate: { type: 'output', expected: '6' },
    },
  ],
  cuestionario: [
    {
      id: 'in-01-01-q1',
      pregunta: '¿Qué imprime?\n```\ndef suma(a, b=5):\n    return a + b\nprint(suma(3))\n```',
      opciones: ['3', '5', '8', 'Error'],
      correcta: 2,
      explicacion: 'b usa el valor por defecto 5, entonces 3 + 5 = 8.',
    },
    {
      id: 'in-01-01-q2',
      pregunta: '¿Cuál de estas llamadas a función es INCORRECTA?\n```\ndef test(x, y):\n    pass\n```',
      opciones: ['test(1, 2)', 'test(x=1, y=2)', 'test(y=2, 1)', 'test(1, y=2)'],
      correcta: 2,
      explicacion: 'No puedes poner un argumento posicional después de uno nombrado.',
    },
  ],
};

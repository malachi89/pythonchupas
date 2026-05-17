import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'no-03-02',
  titulo: 'While con centinelas y flags',
  descripcion: 'Aprende a usar while con variables centinela y banderas (flags) para controlar la repetición.',
  duracionMinutos: 10,
  conceptosClave: ['centinela', 'flag', 'variable de control', 'validación', 'entrada de usuario'],
  contenido: [
    { tipo: 'introduccion', texto: 'A menudo no sabes cuántas veces necesitas repetir algo. Usas un valor centinela (una señal de "parar") o una bandera (flag) para controlar el bucle.' },
    { tipo: 'explicacion', titulo: 'Centinela', texto: 'Un centinela es un valor especial que marca el final. Por ejemplo, en un programa de entrada de datos, podrías usar "salir" o "fin" como centinela para terminar.' },
    { tipo: 'ejemplo', titulo: 'While con centinela', descripcion: 'Repitiendo hasta recibir "salir":', codigo: "entrada = ''\nwhile entrada != 'salir':\n    entrada = input()\n    print('Escribiste:', entrada)\nprint('Adiós')" },
    { tipo: 'explicacion', titulo: 'Flags (banderas)', texto: 'Una flag es una variable booleana que controla el bucle. Inicia en True y se vuelve False cuando ocurre cierta condición.' },
    { tipo: 'ejemplo', titulo: 'Bucle con flag', descripcion: 'Usando una bandera para controlar:', codigo: 'ejecutando = True\ncontador = 0\nwhile ejecutando:\n    print(contador)\n    contador += 1\n    if contador >= 3:\n        ejecutando = False\n# 0, 1, 2' },
    { tipo: 'explicacion', titulo: 'Validación con while', texto: 'El while es ideal para validar entrada: pides datos hasta que el usuario ingrese algo válido.' },
    { tipo: 'ejemplo', titulo: 'Validar entrada', descripcion: 'Pidiendo un número positivo:', codigo: 'numero = -1\nwhile numero <= 0:\n    numero = int(input())\n    if numero <= 0:\n        print("Debe ser positivo")\nprint("Válido:", numero)' },
    { tipo: 'resumen', puntos: ['Un centinela es un valor que termina el bucle', 'Una flag booleana controla la ejecución', 'while es ideal para validar datos de entrada', 'Actualiza correctamente las variables de control'] },
  ],
  ejercicios: [
    {
      id: 'no-03-02-01',
      titulo: 'Suma con centinela',
      descripcion: 'Dada la lista `numeros = [8, 3, 5, 0, 2]`, usa un while que sume los números hasta encontrar el 0 (centinela) e imprime el total.',
      starter: 'numeros = [8, 3, 5, 0, 2]\ntotal = 0\ni = 0\n# Escribe tu while\n',
      pistas: ["while numeros[i] != 0:\n    total += numeros[i]\n    i += 1\nprint(total)"],
      explicacion: "El centinela 0 marca el final. El bucle suma mientras no encuentre el 0.",
      solucionOficial: 'numeros = [8, 3, 5, 0, 2]\ntotal = 0\ni = 0\nwhile numeros[i] != 0:\n    total += numeros[i]\n    i += 1\nprint(total)',
      validate: { type: 'output', expected: '16' },
    },
    {
      id: 'no-03-02-02',
      titulo: 'Búsqueda con flag',
      descripcion: 'Dada `datos = [2, 4, 6, 8, 10]`, usa un while con una flag `encontrado` que se active al llegar a 8. Imprime cada número antes de encontrar el 8.',
      starter: 'datos = [2, 4, 6, 8, 10]\nencontrado = False\ni = 0\n# Escribe tu while\n',
      pistas: ["while not encontrado:\n    if datos[i] == 8:\n        encontrado = True\n    else:\n        print(datos[i])\n    i += 1"],
      explicacion: "La flag 'encontrado' controla el bucle. Al encontrar 8, cambia a True y el while termina.",
      solucionOficial: 'datos = [2, 4, 6, 8, 10]\nencontrado = False\ni = 0\nwhile not encontrado:\n    if datos[i] == 8:\n        encontrado = True\n    else:\n        print(datos[i])\n    i += 1',
      validate: { type: 'output', expected: '2\n4\n6' },
    },
  ],
  cuestionario: [
    {
      id: 'no-03-02-q1',
      pregunta: '¿Qué es un centinela en un bucle while?',
      opciones: ['Una variable que cuenta iteraciones', 'Un valor que marca el final del bucle', 'Una función de Python', 'Un tipo de dato'],
      correcta: 1,
      explicacion: 'Un centinela es un valor especial que indica que el bucle debe terminar.',
    },
    {
      id: 'no-03-02-q2',
      pregunta: '¿Qué imprime?\n```\ntotal = 0\ni = 1\nwhile i <= 3:\n    total += i\n    i += 1\nprint(total)\n```',
      opciones: ['3', '6', '1', '0'],
      correcta: 1,
      explicacion: 'total = 1 + 2 + 3 = 6.',
    },
  ],
};

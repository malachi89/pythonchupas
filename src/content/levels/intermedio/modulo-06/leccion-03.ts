import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'in-06-03',
  titulo: 'Raise y excepciones personalizadas',
  descripcion: 'Aprende a lanzar (raise) errores intencionalmente y a crear tus propias excepciones.',
  duracionMinutos: 10,
  conceptosClave: ['raise', 'excepciones personalizadas', 'assert', 'jerarquía de excepciones'],
  contenido: [
    { tipo: 'introduccion', texto: 'A veces tú mismo quieres lanzar un error porque los datos no son válidos. Puedes usar `raise` para lanzar excepciones existentes o crear las tuyas propias.' },
    { tipo: 'explicacion', titulo: 'Lanzar excepciones con raise', texto: 'Usa `raise` seguido de una excepción para lanzar un error intencionalmente. Puedes pasar un mensaje descriptivo.' },
    { tipo: 'ejemplo', titulo: 'raise básico', descripcion: 'Validando datos con raise:', codigo: "def validar_edad(edad):\n    if edad < 0:\n        raise ValueError('La edad no puede ser negativa')\n    return edad\n\ntry:\n    validar_edad(-5)\nexcept ValueError as e:\n    print(e)  # La edad no puede ser negativa" },
    { tipo: 'explicacion', titulo: 'Crear excepciones personalizadas', texto: 'Puedes crear tus propias excepciones heredando de `Exception`. Esto permite tener errores específicos de tu dominio.' },
    { tipo: 'ejemplo', titulo: 'Excepción personalizada', descripcion: 'Creando y usando una excepción propia:', codigo: "class SaldoInsuficienteError(Exception):\n    pass\n\ndef retirar(saldo, cantidad):\n    if cantidad > saldo:\n        raise SaldoInsuficienteError(\n            f'Saldo: {saldo}, intentaste retirar: {cantidad}'\n        )\n    return saldo - cantidad\n\ntry:\n    retirar(100, 200)\nexcept SaldoInsuficienteError as e:\n    print(e)" },
    { tipo: 'explicacion', titulo: 'assert: validación simple', texto: '`assert condición, mensaje` lanza AssertionError si la condición es False. Es útil para validaciones durante el desarrollo.' },
    { tipo: 'ejemplo', titulo: 'assert', descripcion: 'Verificando condiciones:', codigo: 'def dividir(a, b):\n    assert b != 0, "El divisor no puede ser cero"\n    return a / b\n\nprint(dividir(10, 2))  # 5.0\n# Si b fuera 0: AssertionError' },
    { tipo: 'resumen', puntos: ['raise lanza excepciones intencionalmente', 'Puedes crear excepciones heredando de Exception', 'assert valida condiciones en desarrollo', 'Las excepciones personalizadas hacen el código más expresivo'] },
  ],
  ejercicios: [
    {
      id: 'in-06-03-01',
      titulo: 'Usar raise',
      descripcion: 'Define una función `validar_positivo(n)` que lance ValueError si n <= 0. Llámala con -1 dentro de try/except.',
      starter: '# Define la función y úsala\n',
      pistas: ["def validar_positivo(n):\n    if n <= 0:\n        raise ValueError('Debe ser positivo')\n    return n\ntry:\n    validar_positivo(-1)\nexcept ValueError as e:\n    print(e)"],
      explicacion: "raise lanza un error que puedes capturar con try/except.",
      solucionOficial: "def validar_positivo(n):\n    if n <= 0:\n        raise ValueError('Debe ser positivo')\n    return n\ntry:\n    validar_positivo(-1)\nexcept ValueError as e:\n    print(e)",
      validate: { type: 'output', expected: 'Debe ser positivo' },
    },
    {
      id: 'in-06-03-02',
      titulo: 'Excepción personalizada',
      descripcion: 'Crea una excepción `ErrorEdad` que herede de Exception. Úsala para validar que la edad sea >= 0.',
      starter: '# Define ErrorEdad y úsala\n',
      pistas: ["class ErrorEdad(Exception):\n    pass\n\ndef validar_edad(edad):\n    if edad < 0:\n        raise ErrorEdad('Edad inválida')\n    return edad\n\ntry:\n    validar_edad(-1)\nexcept ErrorEdad as e:\n    print(e)"],
      explicacion: "Las excepciones personalizadas se crean heredando de Exception.",
      solucionOficial: "class ErrorEdad(Exception):\n    pass\n\ndef validar_edad(edad):\n    if edad < 0:\n        raise ErrorEdad('Edad inválida')\n    return edad\n\ntry:\n    validar_edad(-1)\nexcept ErrorEdad as e:\n    print(e)",
      validate: { type: 'output', expected: 'Edad inválida' },
    },
  ],
  cuestionario: [
    {
      id: 'in-06-03-q1',
      pregunta: '¿Qué palabra clave se usa para lanzar una excepción?',
      opciones: ['throw', 'raise', 'error', 'except'],
      correcta: 1,
      explicacion: 'En Python se usa `raise` para lanzar excepciones.',
    },
    {
      id: 'in-06-03-q2',
      pregunta: '¿De qué clase deben heredar las excepciones personalizadas?',
      opciones: ['object', 'BaseException o Exception', 'Error', 'CustomException'],
      correcta: 1,
      explicacion: 'Las excepciones personalizadas heredan de Exception (o BaseException).',
    },
  ],
};

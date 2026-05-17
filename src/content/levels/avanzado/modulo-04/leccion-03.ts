import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'av-04-03',
  titulo: 'Decoradores con argumentos y aplicaciones',
  descripcion: 'Aprende a crear decoradores que reciben argumentos y aplicaciones como timing, caché y validación.',
  duracionMinutos: 10,
  conceptosClave: ['decoradores con parámetros', 'timing', 'caché', 'functools.wraps'],
  contenido: [
    { tipo: 'introduccion', texto: 'Los decoradores pueden recibir sus propios argumentos. Además, tienen aplicaciones reales como medir tiempo de ejecución, cachear resultados y validar entradas.' },
    { tipo: 'explicacion', titulo: 'Decoradores con argumentos', texto: 'Para que un decorador acepte argumentos, necesitas tres niveles de funciones: la función decoradora (recibe args), que retorna el decorador, que retorna el wrapper.' },
    { tipo: 'ejemplo', titulo: 'Decorador con parámetros', descripcion: 'Decorador que repite la función N veces:', codigo: 'def repetir(n):\n    def decorador(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(n):\n                func(*args, **kwargs)\n        return wrapper\n    return decorador\n\n@repetir(3)\ndef saludar():\n    print("Hola!")\n\nsaludar()  # Hola! Hola! Hola!' },
    { tipo: 'explicacion', titulo: 'Timing con decoradores', texto: 'Un decorador que mide tiempo de ejecución es muy útil para optimización.' },
    { tipo: 'ejemplo', titulo: 'Decorador timing', descripcion: 'Midiendo tiempo de ejecución:', codigo: 'import time\n\ndef medir_tiempo(func):\n    def wrapper(*args, **kwargs):\n        inicio = time.time()\n        resultado = func(*args, **kwargs)\n        fin = time.time()\n        print(f"{func.__name__} tardó {fin - inicio:.4f}s")\n        return resultado\n    return wrapper' },
    { tipo: 'explicacion', titulo: 'functools.wraps', texto: 'Los decoradores cambian el nombre y documentación de la función. `functools.wraps` copia esos metadatos al wrapper.' },
    { tipo: 'ejemplo', titulo: 'Usando @wraps', descripcion: 'Preservando metadatos:', codigo: 'from functools import wraps\n\ndef decorador(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        print("Antes")\n        return func(*args, **kwargs)\n    return wrapper\n\n@decorador\ndef saludar():\n    """Saluda al mundo"""\n    print("Hola")\n\nprint(saludar.__name__)  # saludar (no wrapper)\nprint(saludar.__doc__)   # Saluda al mundo' },
    { tipo: 'resumen', puntos: ['Decoradores con args usan triple anidamiento', 'Útiles para timing, logueo, caché, validación', 'functools.wraps preserva metadatos', 'Los decoradores hacen el código más limpio y reutilizable'] },
  ],
  ejercicios: [
    {
      id: 'av-04-03-01',
      titulo: 'Decorador con argumento',
      descripcion: 'Crea un decorador `multiplicar(factor)` que multiplique el resultado de la función decorada por factor.',
      starter: '# Define el decorador\n',
      pistas: ["def multiplicar(factor):\n    def decorador(func):\n        def wrapper(*args, **kwargs):\n            return func(*args, **kwargs) * factor\n        return wrapper\n    return decorador\n\n@multiplicar(2)\ndef suma(a, b):\n    return a + b\n\nprint(suma(3, 5))"],
      explicacion: "El decorador recibe factor y lo aplica al resultado de la función.",
      solucionOficial: 'def multiplicar(factor):\n    def decorador(func):\n        def wrapper(*args, **kwargs):\n            return func(*args, **kwargs) * factor\n        return wrapper\n    return decorador\n\n@multiplicar(2)\ndef suma(a, b):\n    return a + b\n\nprint(suma(3, 5))',
      validate: { type: 'output', expected: '16' },
    },
    {
      id: 'av-04-03-02',
      titulo: 'Decorador de logging',
      descripcion: 'Crea un decorador `log` que imprima "Ejecutando..." antes de la función decorada.',
      starter: '# Define el decorador log\n',
      pistas: ["def log(func):\n    def wrapper(*args, **kwargs):\n        print('Ejecutando...')\n        return func(*args, **kwargs)\n    return wrapper\n\n@log\ndef hola():\n    print('Hola!')\n\nhola()"],
      explicacion: "El decorador agrega logging antes de ejecutar la función.",
      solucionOficial: "def log(func):\n    def wrapper(*args, **kwargs):\n        print('Ejecutando...')\n        return func(*args, **kwargs)\n    return wrapper\n\n@log\ndef hola():\n    print('Hola!')\n\nhola()",
      validate: { type: 'output', expected: 'Ejecutando...\nHola!' },
    },
  ],
  cuestionario: [
    {
      id: 'av-04-03-q1',
      pregunta: '¿Cuántos niveles de funciones anidadas tiene un decorador que recibe argumentos?',
      opciones: ['1', '2', '3', '4'],
      correcta: 2,
      explicacion: 'Tres niveles: función decoradora (recibe args), decorador (recibe func), wrapper.',
    },
    {
      id: 'av-04-03-q2',
      pregunta: '¿Para qué sirve `functools.wraps` en decoradores?',
      opciones: ['Hace el decorador más rápido', 'Preserva metadatos de la función original', 'Permite argumentos al decorador', 'Elimina el wrapper'],
      correcta: 1,
      explicacion: 'wraps copia __name__, __doc__ y otros metadatos de la función original al wrapper.',
    },
  ],
};

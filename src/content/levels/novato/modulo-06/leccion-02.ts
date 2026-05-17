import type { Leccion } from '../../../../types';

export const leccion: Leccion = {
  id: 'no-06-02',
  titulo: 'Búsqueda y reemplazo en strings',
  descripcion: 'Aprende a buscar y reemplazar texto dentro de strings usando find, replace, count, startswith, endswith.',
  duracionMinutos: 10,
  conceptosClave: ['find()', 'replace()', 'count()', 'startswith()', 'endswith()'],
  contenido: [
    { tipo: 'introduccion', texto: 'A menudo necesitas buscar texto dentro de strings, contar ocurrencias o verificar cómo empieza o termina. Los métodos de búsqueda hacen esto fácil.' },
    { tipo: 'explicacion', titulo: 'Buscar posición con find()', texto: '`find()` busca una subcadena y devuelve su posición (índice). Si no la encuentra, devuelve -1.' },
    { tipo: 'ejemplo', titulo: 'find()', descripcion: 'Buscando texto:', codigo: "texto = 'Hola Mundo'\nprint(texto.find('Mundo'))  # 5\nprint(texto.find('Python')) # -1" },
    { tipo: 'explicacion', titulo: 'Contar y reemplazar', texto: '`count()` cuenta ocurrencias. `replace()` reemplaza todas las apariciones de una subcadena por otra.' },
    { tipo: 'ejemplo', titulo: 'count y replace', descripcion: 'Contando y reemplazando:', codigo: "frase = 'El gato y el perro y el ratón'\nprint(frase.count('el'))                  # 2\nprint(frase.replace('gato', 'pájaro'))     # El pájaro y el perro y el ratón" },
    { tipo: 'explicacion', titulo: 'Verificar inicio y final', texto: '`startswith()` y `endswith()` devuelven True si el string empieza o termina con la subcadena dada. Son muy útiles para validación.' },
    { tipo: 'ejemplo', titulo: 'startswith y endswith', descripcion: 'Verificando prefijos y sufijos:', codigo: "archivo = 'documento.pdf'\nprint(archivo.endswith('.pdf'))  # True\nprint(archivo.startswith('doc'))   # True\n\nurl = 'https://ejemplo.com'\nprint(url.startswith('https'))    # True" },
    { tipo: 'resumen', puntos: ['find() devuelve posición o -1 si no existe', 'count() cuenta ocurrencias', 'replace(viejo, nuevo) reemplaza todo', 'startswith() y endswith() verifican prefijos/sufijos'] },
  ],
  ejercicios: [
    {
      id: 'no-06-02-01',
      titulo: 'Contar con count()',
      descripcion: "Usa `print('El Broncas'.count('o'))` para contar cuántas veces aparece 'o'.",
      starter: '# Cuenta las o\n',
      pistas: ["print('El Broncas'.count('o'))"],
      explicacion: "count() cuenta las ocurrencias de una subcadena.",
      solucionOficial: "print('El Broncas'.count('o'))",
      validate: { type: 'output', expected: '1' },
    },
    {
      id: 'no-06-02-02',
      titulo: 'Operador in',
      descripcion: "Usa `print('a' in 'banana')` para verificar si 'a' está dentro.",
      starter: '# Verifica con in\n',
      pistas: ["print('a' in 'banana')"],
      explicacion: "in devuelve True si el primer string está contenido en el segundo.",
      solucionOficial: "print('a' in 'banana')",
      validate: { type: 'output', expected: 'True' },
    },
  ],
  cuestionario: [
    {
      id: 'no-06-02-q1',
      pregunta: "¿Qué devuelve `'Hola'.find('x')`?",
      opciones: ['0', '-1', 'Error', 'None'],
      correcta: 1,
      explicacion: "find() devuelve -1 si no encuentra la subcadena.",
    },
    {
      id: 'no-06-02-q2',
      pregunta: "¿Qué imprime `print('Hola mundo'.replace('mundo', 'Python'))`?",
      opciones: ['Hola mundo', 'Hola Python', 'mundo Python', 'Error'],
      correcta: 1,
      explicacion: "replace('mundo', 'Python') reemplaza y da 'Hola Python'.",
    },
  ],
};

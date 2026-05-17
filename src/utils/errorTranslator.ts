export function translateError(raw: string): string {
  if (!raw) return 'Error desconocido.';

  const lineMatch = raw.match(/line (\d+)/);
  const lineInfo = lineMatch ? ` (línea ${lineMatch[1]})` : '';

  if (raw.includes('SyntaxError'))
    return `❌ Error de sintaxis${lineInfo} — Revisa que tus paréntesis, comillas y dos puntos estén bien escritos.`;

  if (raw.includes('IndentationError'))
    return `❌ Error de indentación${lineInfo} — Asegúrate de usar 4 espacios para indentar el código dentro de funciones, if, for, etc.`;

  if (raw.includes('NameError')) {
    const nm = raw.match(/name '(.+?)' is not defined/);
    return `❌ '${nm?.[1] ?? 'variable'}' no está definido${lineInfo} — ¿Escribiste bien el nombre? ¿Lo definiste antes de usarlo?`;
  }

  if (raw.includes('TypeError')) {
    if (raw.includes('unsupported operand'))
      return `❌ Error de tipo${lineInfo} — Estás tratando de operar con tipos incompatibles (ej: sumar texto con número). Usa int() o str() para convertir.`;
    if (raw.includes("'NoneType'"))
      return `❌ Error de tipo${lineInfo} — Una función no retornó valor (retornó None). ¿Olvidaste return?`;
    return `❌ Error de tipo${lineInfo} — El tipo de dato no es el correcto para esta operación.`;
  }

  if (raw.includes('ValueError')) {
    if (raw.includes('invalid literal'))
      return `❌ Valor inválido${lineInfo} — No se puede convertir ese texto a número. Asegúrate de que sea un número válido.`;
    return `❌ Valor inválido${lineInfo} — Se recibió un valor inesperado.`;
  }

  if (raw.includes('IndexError'))
    return `❌ Índice fuera de rango${lineInfo} — Estás intentando acceder a una posición que no existe en la lista o string.`;

  if (raw.includes('KeyError')) {
    const km = raw.match(/KeyError: (.+)/);
    return `❌ Clave no encontrada${lineInfo} — La clave ${km?.[1] ?? ''} no existe en el diccionario.`;
  }

  if (raw.includes('ZeroDivisionError'))
    return `❌ División por cero${lineInfo} — No puedes dividir entre 0.`;

  if (raw.includes('AttributeError')) {
    const am = raw.match(/'(.+?)' object has no attribute '(.+?)'/);
    return `❌ Atributo no existe${lineInfo} — ${am ? `'${am[1]}' no tiene el atributo '${am[2]}'` : 'El objeto no tiene ese atributo o método.'}.`;
  }

  if (raw.includes('RecursionError'))
    return `❌ Recursión infinita${lineInfo} — Tu función recursiva no tiene caso base o nunca termina.`;

  if (raw.includes('StopIteration'))
    return `❌ Iterador agotado — No quedan más elementos que iterar.`;

  if (raw.includes('ImportError') || raw.includes('ModuleNotFoundError')) {
    const im = raw.match(/No module named '(.+?)'/);
    return `❌ Módulo no encontrado${lineInfo} — ${im ? `El módulo '${im[1]}' no está disponible.` : 'Módulo no disponible en este entorno.'}`;
  }

  if (raw.includes('AssertionError')) {
    const match = raw.match(/AssertionError:\s*(.+)/);
    return match ? match[1].trim() : 'El código no pasó la validación.';
  }

  const lines = raw.split('\n').filter(l => l.trim());
  const lastLine = lines[lines.length - 1] || raw;
  return `❌ Error${lineInfo}: ${lastLine.trim()}`;
}

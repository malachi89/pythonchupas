export function translateError(raw: string): string {
  if (!raw) return 'Error desconocido.';

  const lineMatch = raw.match(/line (\d+)/);
  const lineInfo = lineMatch ? ` (línea ${lineMatch[1]})` : '';

  if (raw.includes('SyntaxError')) {
    const detail = raw.match(/SyntaxError:\s*(.+)/)?.[1]?.trim() ?? '';
    if (detail.includes("expected ':'")) {
      return `❌ Error de sintaxis${lineInfo} — Falta el \`:\` al final del bloque. En Python, \`if\`, \`elif\`, \`else\`, \`for\`, \`while\` y \`def\` siempre terminan con dos puntos. Ejemplo: \`if x > 0:\``;
    }
    if (detail.includes("'(' was never closed") || detail.includes("unmatched ')'")) {
      return `❌ Error de sintaxis${lineInfo} — Hay un paréntesis sin cerrar o extra. Revisa que cada \`(\` tenga su \`)\`.`;
    }
    if (detail.includes('EOL') || detail.includes('EOF') || detail.includes('unexpected end')) {
      return `❌ Error de sintaxis${lineInfo} — El código quedó incompleto. ¿Falta cerrar una comilla, paréntesis o completar un bloque?`;
    }
    if (detail.includes('invalid syntax')) {
      return `❌ Error de sintaxis${lineInfo} — El código tiene un error de escritura. Revisa operadores, palabras clave y que no falte nada.`;
    }
    const tip = detail ? ` Python dice: "${detail}".` : '';
    return `❌ Error de sintaxis${lineInfo} —${tip} Revisa que tus dos puntos, paréntesis y comillas estén bien escritos.`;
  }

  if (raw.includes('IndentationError')) {
    const detail = raw.match(/IndentationError:\s*(.+)/)?.[1]?.trim() ?? '';
    if (detail.includes('unexpected indent')) {
      return `❌ Error de indentación${lineInfo} — Hay espacios de más al inicio de la línea. Ese código no debería estar indentado aquí.`;
    }
    if (detail.includes('expected an indented block')) {
      return `❌ Error de indentación${lineInfo} — Falta indentar el bloque. Después de \`if\`, \`for\`, \`def\`, etc., el código debe ir con 4 espacios de sangría.`;
    }
    return `❌ Error de indentación${lineInfo} — Usa exactamente 4 espacios para indentar el código dentro de \`if\`, \`for\`, \`while\`, \`def\`, etc.`;
  }

  if (raw.includes('NameError')) {
    const nm = raw.match(/name '(.+?)' is not defined/);
    const varName = nm?.[1] ?? 'variable';
    return `❌ '${varName}' no está definido${lineInfo} — ¿Escribiste bien el nombre? ¿Lo definiste antes de usarlo? Python distingue mayúsculas de minúsculas.`;
  }

  if (raw.includes('TypeError')) {
    if (raw.includes('unsupported operand'))
      return `❌ Error de tipo${lineInfo} — Estás operando tipos incompatibles (ej: sumar texto con número). Usa \`int()\` o \`str()\` para convertir.`;
    if (raw.includes("'NoneType'"))
      return `❌ Error de tipo${lineInfo} — Una función no retornó valor (retornó \`None\`). ¿Olvidaste \`return\`?`;
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
  const cleaned = lastLine.trim();
  // Avoid surfacing just "PythonError" as the message
  if (cleaned === 'PythonError' || cleaned === 'PythonError:') {
    return `❌ Error al ejecutar${lineInfo} — Revisa la sintaxis del código: dos puntos al final de los bloques, indentación correcta y nombres bien escritos.`;
  }
  return `❌ Error${lineInfo}: ${cleaned}`;
}

/* =========================================================
   runner.js — Integración con Pyodide (Python en WebAssembly)
   ========================================================= */

window.PyodideRunner = (function () {

  let pyodide = null;
  let ready   = false;

  // ── Init ──────────────────────────────────────────────
  async function init(onProgress) {
    onProgress?.("Descargando Python (Pyodide)…", 20);
    pyodide = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.27.0/full/"
    });
    onProgress?.("Configurando entorno…", 80);

    // Override input() para usar window.prompt en modo interactivo
    await pyodide.runPythonAsync(`
import builtins, sys

# Redirigir input() al prompt del navegador via js
def _browser_input(prompt=""):
    import js
    result = js.window.prompt(prompt if prompt else "")
    return "" if result is None else str(result)
builtins.input = _browser_input
`);

    onProgress?.("¡Listo!", 100);
    ready = true;
    return true;
  }

  // ── Ejecutar código del usuario ───────────────────────
  async function runCode(code, mockInputs = null) {
    if (!ready) return { output: "", error: "Pyodide no está listo todavía." };

    let output = "";
    let errorMsg = null;

    // Capturar stdout (write mode captura todo incluido print con end="")
    pyodide.setStdout({ write: (s) => { output += s; } });
    pyodide.setStderr({ write: (s) => { output += s; } });

    try {
      // Si hay inputs mockeados (para ejercicios con input())
      if (mockInputs && mockInputs.length > 0) {
        const inputsJson = JSON.stringify(mockInputs);
        await pyodide.runPythonAsync(`
import builtins
_mock_inputs = ${inputsJson}
_mock_idx = [0]
def _mock_input(prompt=""):
    val = _mock_inputs[_mock_idx[0]] if _mock_idx[0] < len(_mock_inputs) else ""
    _mock_idx[0] += 1
    if prompt:
        print(prompt, end="")
    print(val)
    return val
builtins.input = _mock_input
`);
      }

      await pyodide.runPythonAsync(code);
    } catch (err) {
      errorMsg = parseError(err.message || String(err));
    } finally {
      // Restaurar input() real tras mock
      if (mockInputs) {
        await pyodide.runPythonAsync(`
import builtins
def _browser_input(prompt=""):
    import js
    result = js.window.prompt(prompt if prompt else "")
    return "" if result is None else str(result)
builtins.input = _browser_input
`).catch(() => {});
      }
    }

    return {
      output: output.trimEnd(),
      error:  errorMsg
    };
  }

  // ── Ejecutar código + test assertions (type=python_test) ──
  async function runWithTest(userCode, testCode) {
    if (!ready) return { output: "", error: "Pyodide no está listo." };

    let output  = "";
    let errorMsg = null;

    pyodide.setStdout({ write: (s) => { output += s; } });
    pyodide.setStderr({ write: () => {} });

    const fullCode = userCode + "\n\n" + testCode;

    try {
      await pyodide.runPythonAsync(fullCode);
    } catch (err) {
      const raw = err.message || String(err);
      // Si es AssertionError, mostrar el mensaje de la aserción
      if (raw.includes("AssertionError")) {
        const match = raw.match(/AssertionError:\s*(.+)/);
        errorMsg = match ? match[1].trim() : "El código no pasó la validación.";
      } else {
        errorMsg = parseError(raw);
      }
    }

    return { output: output.trimEnd(), error: errorMsg };
  }

  // ── Convertir tracebacks de Python a mensajes amigables ──
  function parseError(raw) {
    if (!raw) return "Error desconocido.";

    // Línea del error
    const lineMatch = raw.match(/line (\d+)/);
    const lineInfo  = lineMatch ? ` (línea ${lineMatch[1]})` : "";

    if (raw.includes("SyntaxError"))
      return `❌ Error de sintaxis${lineInfo} — Revisa que tus paréntesis, comillas y dos puntos estén bien escritos.`;

    if (raw.includes("IndentationError"))
      return `❌ Error de indentación${lineInfo} — Asegúrate de usar 4 espacios para indentar el código dentro de funciones, if, for, etc.`;

    if (raw.includes("NameError")) {
      const nm = raw.match(/name '(.+?)' is not defined/);
      return `❌ '${nm?.[1] ?? "variable"}' no está definido${lineInfo} — ¿Escribiste bien el nombre? ¿Lo definiste antes de usarlo?`;
    }

    if (raw.includes("TypeError")) {
      if (raw.includes("unsupported operand"))
        return `❌ Error de tipo${lineInfo} — Estás tratando de operar con tipos incompatibles (ej: sumar texto con número). Usa int() o str() para convertir.`;
      if (raw.includes("'NoneType'"))
        return `❌ Error de tipo${lineInfo} — Una función no retornó valor (retornó None). ¿Olvidaste return?`;
      return `❌ Error de tipo${lineInfo} — El tipo de dato no es el correcto para esta operación.`;
    }

    if (raw.includes("ValueError")) {
      if (raw.includes("invalid literal"))
        return `❌ Valor inválido${lineInfo} — No se puede convertir ese texto a número. Asegúrate de que sea un número válido.`;
      return `❌ Valor inválido${lineInfo} — Se recibió un valor inesperado.`;
    }

    if (raw.includes("IndexError"))
      return `❌ Índice fuera de rango${lineInfo} — Estás intentando acceder a una posición que no existe en la lista o string.`;

    if (raw.includes("KeyError")) {
      const km = raw.match(/KeyError: (.+)/);
      return `❌ Clave no encontrada${lineInfo} — La clave ${km?.[1] ?? ""} no existe en el diccionario.`;
    }

    if (raw.includes("ZeroDivisionError"))
      return `❌ División por cero${lineInfo} — No puedes dividir entre 0.`;

    if (raw.includes("AttributeError")) {
      const am = raw.match(/'(.+?)' object has no attribute '(.+?)'/);
      return `❌ Atributo no existe${lineInfo} — ${am ? `'${am[1]}' no tiene el atributo '${am[2]}'` : "El objeto no tiene ese atributo o método."}.`;
    }

    if (raw.includes("RecursionError"))
      return `❌ Recursión infinita${lineInfo} — Tu función recursiva no tiene caso base o nunca termina.`;

    if (raw.includes("StopIteration"))
      return `❌ Iterador agotado — No quedan más elementos que iterar.`;

    // Error genérico: mostrar última línea relevante
    const lines = raw.split("\n").filter(l => l.trim());
    const lastLine = lines[lines.length - 1] || raw;
    return `❌ Error${lineInfo}: ${lastLine.trim()}`;
  }

  return { init, runCode, runWithTest, parseError, get ready() { return ready; } };
})();

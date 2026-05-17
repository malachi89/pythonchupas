import type { ValidateConfig, EvaluationResult } from '../types';

export function evaluarEjercicio(
  output: string,
  validate: ValidateConfig,
  passed?: boolean,
  error?: string,
): EvaluationResult {
  if (error && validate.type !== 'python_test') {
    return { correcto: false, mensaje: error };
  }

  switch (validate.type) {
    case 'output': {
      const correcto = output.trim() === validate.expected.trim();
      return {
        correcto,
        mensaje: correcto
          ? '¡Correcto! Tu salida coincide exactamente con la esperada.'
          : `Salida incorrecta. Se esperaba:\n${validate.expected}\n\nTu salida:\n${output}`,
      };
    }

    case 'contains': {
      const missing = validate.strings.filter(s => !output.includes(s));
      const correcto = missing.length === 0;
      return {
        correcto,
        mensaje: correcto
          ? '¡Correcto! Tu salida contiene todos los elementos esperados.'
          : `Falta en tu salida: ${missing.map(s => `"${s}"`).join(', ')}`,
      };
    }

    case 'regex': {
      const flags = validate.flags ?? '';
      const regex = new RegExp(validate.pattern, flags);
      const correcto = regex.test(output.trim());
      return {
        correcto,
        mensaje: correcto
          ? '¡Correcto! Tu salida cumple el formato esperado.'
          : `Tu salida no cumple el formato esperado.`,
      };
    }

    case 'python_test': {
      if (error) {
        return { correcto: false, mensaje: error };
      }
      const correcto = passed === true;
      return {
        correcto,
        mensaje: correcto
          ? '¡Correcto! Todos los tests pasaron.'
          : 'El código no pasó la validación automática.',
      };
    }
  }
}

export function xpPorNivel(nivel: string): number {
  switch (nivel) {
    case 'muy-novato': return 20;
    case 'novato': return 25;
    case 'intermedio': return 30;
    case 'avanzado': return 40;
    default: return 20;
  }
}

'use strict';

/**
 * Ejercicio 79
 * Convierte "false" (string) a booleano. ¿Da false o true? (Cuidado)
 */

function conversionStringABooleano(valor) {
    if (typeof valor !== 'string') {
        return 'Error: El valor debe ser una cadena de texto';
    }

    // Demostración de la trampa:
    const conversionDirecta = Boolean(valor);

    // Forma correcta de parsear el texto a booleano real:
    const booleanoReal = valor.toLowerCase() === 'true';

    return `Conversion directa con Boolean("${valor}"): ${conversionDirecta} (¡Trampa!)
Parseo correcto comparando texto: ${booleanoReal}`;
}

console.log(conversionStringABooleano('false'));
'use strict';

/**
 * Ejercicio 85
 * ¿Qué da String(null)? ¿Y String(undefined)?
 */

function conversionStringSegura(valor) {
    // String() convierte null y undefined a texto sin arrojar un TypeError
    const resultado = String(valor);

    return `Entrada: ${valor} -> String(): "${resultado}" (Tipo: ${typeof resultado})`;
}

// Pruebas
console.log(conversionStringSegura(null));      // "null"
console.log(conversionStringSegura(undefined)); // "undefined"
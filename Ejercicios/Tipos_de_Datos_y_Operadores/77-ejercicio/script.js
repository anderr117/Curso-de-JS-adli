'use strict';

/**
 * Ejercicio 77
 * Convierte el número 456 a string de dos formas.
 */

function conversionString(numero) {
    if (typeof numero !== 'number') {
        return 'Error: Debe ser número';
    }

    // Forma 1 - método del prototipo Number
    const conversionUno = numero.toString();

    // Forma 2 - función constructora/global String()
    const conversionDos = String(numero);

    return `Forma 1 (.toString()): "${conversionUno}" (${typeof conversionUno})
Forma 2 (String())   : "${conversionDos}" (${typeof conversionDos})`;
}

const resultado = conversionString(456);
console.log(resultado);
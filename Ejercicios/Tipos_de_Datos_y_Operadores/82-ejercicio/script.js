'use strict';

/**
 * Ejercicio 82
 * Convierte " 123 " a número. ¿Qué pasa con los espacios?
 */

function conversionConEspacios(valor) {
    // Number() elimina automáticamente los espacios al inicio y al final (trim implícito)
    const conv = Number(valor);

    return `Texto original: "${valor}" -> Número convertido: ${conv} (${typeof conv})`;
}

const resultado = conversionConEspacios(" 123 ");
console.log(resultado);
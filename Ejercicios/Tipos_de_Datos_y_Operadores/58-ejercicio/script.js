'use strict';

/**
 * Ejercicio 58
 * Evalúa false && true.
 */

function comparacionAndCortocircuito() {
    // El primer operando es false, así que JS ignora el segundo operando y devuelve false directamente.
    console.log('false && true -> da:', false && true); // Imprime: false
}

comparacionAndCortocircuito();
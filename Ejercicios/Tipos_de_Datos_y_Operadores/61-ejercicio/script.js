'use strict';

/**
 * Ejercicio 61
 * Evalúa false || false.
 */

function comparacionOr() {
    // Como el primer operando es false (falsy), || avanza al segundo operando y devuelve su valor (false)
    console.log('false || false -> nos da:', false || false); // Imprime: false
}

comparacionOr();
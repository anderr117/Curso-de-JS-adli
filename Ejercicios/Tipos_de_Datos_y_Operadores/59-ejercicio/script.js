'use strict';

/**
 * Ejercicio 59
 * Evalúa true || false.
 */

function comparacionOr() {
    // El primer operando (true) es truthy, por lo que || lo devuelve de inmediato sin mirar el segundo
    console.log('true || false -> nos da:', true || false); // Imprime: true
}

comparacionOr();
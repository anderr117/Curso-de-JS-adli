'use strict';

/**
 * Ejercicio 51
 * Compara true == 1 y true === 1.
 */

function compararBooleanoConNumero() {
    // Igualdad débil (==) - JS convierte 'true' a número -> Number(true) da 1 -> (1 == 1) -> true
    console.log('true == 1 : ', true == 1);   // Imprime: true

    // Igualdad estricta (===) - Compara tipos (boolean vs number) -> false
    console.log('true === 1: ', true === 1);  // Imprime: false

    // Demostración explícita de la coerción de tipo:
    console.log('Number(true):', Number(true)); // Imprime: 1
    console.log('Number(false):', Number(false)); // Imprime: 0
}

compararBooleanoConNumero();
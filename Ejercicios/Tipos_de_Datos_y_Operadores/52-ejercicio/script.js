'use strict';

/**
 * Ejercicio 52
 * Compara false == 0 y false === 0.
 */

function comparacionBooleana() {
    // Igualdad débil (==): JS convierte false a número -> Number(false) es 0 -> (0 == 0) -> true
    console.log('false == 0 :', false == 0);   // Imprime: true

    // Igualdad estricta (===): Compara tipo (boolean vs number) -> false
    console.log('false === 0:', false === 0);  // Imprime: false

    // Demostración explícita de la conversión numérica:
    console.log('Number(false):', Number(false)); // Imprime: 0
}

comparacionBooleana();
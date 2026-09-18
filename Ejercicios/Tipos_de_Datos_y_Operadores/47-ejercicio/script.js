'use strict';

/**
 * Ejercicio 47
 * ¿Qué da 2 > "12"? (number vs string). Ahora hay coerción.
 */



/**
 * js convierte el string a number
 * por eso da como resultado false, ya que compara 2 > 12,
 * lo que hace js se llama coerción, convierte en este caso
 * un tipo de dato string a number y luego evalúa la condición.
 */


function comparacionCoercion() {
    // Al haber un 'number' (2), JS convierte "12" a número -> evalúa 2 > 12 -> false
    console.log('Resultado de 2 > "12":', 2 > "12"); // Imprime: false

    if (2 > "12") {
        console.log("2 es mayor que 12");
    } else {
        console.log("2 NO es mayor que 12");
    }
}

comparacionCoercion();
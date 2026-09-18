'use strict';

/**
 * Ejercicio 44
 * Compara "" == 0 y "" === 0.
 */

function comparacionCoercionCadena() {
    // Igualdad débil (==): JS convierte la cadena vacía "" a número (Number("") da 0) -> (0 == 0) -> true
    console.log('Comparación 1 ("" == 0): ', "" == 0);

    // Igualdad estricta (===): Compara tipo (string vs number) -> false
    console.log('Comparación 2 ("" === 0):', "" === 0);

}

comparacionCoercionCadena();
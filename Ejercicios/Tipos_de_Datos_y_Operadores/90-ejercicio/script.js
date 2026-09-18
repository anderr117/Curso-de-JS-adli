'use strict';

/**
 * Ejercicio 90
 * Comprueba si {} es falsy o truthy.
 */

function comprobarObjetoVacio(valor) {
    // Todos los objetos son Truthy independientemente de su contenido
    if (valor) {
        const cantidadClaves = Object.keys(valor).length;
        return `El objeto es TRUTHY (Tiene ${cantidadClaves} propiedades definidas).`;
    } else {
        return `El valor es FALSY.`;
    }
}

console.log(comprobarObjetoVacio({}));
'use strict';

/**
 * Ejercicio 89
 * Comprueba si [] es falsy o truthy.
 */

function comprobarArrayVacio(valor) {
    // Todos los Objetos y Arrays en JavaScript son Truthy (incluso si están vacíos)
    if (valor) {
        return `El valor Array es TRUTHY. ¿Es realmente un Array? ${Array.isArray(valor)}`;
    } else {
        return `El valor es FALSY`;
    }
}

console.log(comprobarArrayVacio([]));
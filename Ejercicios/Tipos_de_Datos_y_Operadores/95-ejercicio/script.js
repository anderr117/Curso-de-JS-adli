'use strict';

/**
 * Ejercicio 95
 * Crea una función esFalsy que devuelva true si el valor es falsy, false si es truthy.
 */

function esFalsy(valor) {
    if (valor) {
        // Si entra aquí, el valor es truthy -> devolvemos false (no es falsy)
        return false;
    } else {
        // Si entra aquí, el valor es falsy -> devolvemos true (sí es falsy)
        return true;
    }
}

console.log(esFalsy(0)); // true
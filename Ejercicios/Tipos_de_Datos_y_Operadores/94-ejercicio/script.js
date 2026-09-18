'use strict';

/**
 * Ejercicio 94
 * Comprueba si undefined es falsy.
 */

function comprobarUndefined(valor) {

    /**
     * undefined indica que una variable ha 
     * sido declarada pero aún no se le ha 
     * asignado ningún valor, o que una 
     * función no devuelve nada explícitamente.
     */
    if (valor) {
        return `El valor ${valor} es TRUTHY`;
    } else {
        return `El valor "${valor}" es FALSY (typeof informa: "${typeof valor}")`;
    }
}

console.log(comprobarUndefined(undefined));
'use strict';

/**
 * Ejercicio 93
 * Comprueba si null es falsy.
 */

function comprobarNull(valor) {

    /**
     * typeof null devuelve "object" en lugar de "null".
     * Esto es un error histórico (bug) de la primera 
     * versión de JavaScript (1995) que no se arregló 
     * para no romper la compatibilidad con sitios web antiguos.
     */
    if (valor) {
        return `El valor ${valor} es TRUTHY`;
    } else {
        return `El valor "${valor}" es FALSY (typeof informa: "${typeof valor}")`;
    }
}

console.log(comprobarNull(null));
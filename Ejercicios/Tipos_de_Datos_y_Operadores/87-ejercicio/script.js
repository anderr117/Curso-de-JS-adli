'use strict';

/**
 * Ejercicio 87
 * Comprueba si "" es falsy usando if.
 */

function comprobarFalsy(valor) {
    // La estructura IF fuerza la coerción booleana implícita del valor evaluado
    if (valor) {
        return `El valor "${valor}" es TRUTHY`;
    } else {
        return `El valor "${valor}" es FALSY`;
    }
}

// Probar con la cadena vacía
console.log(comprobarFalsy("")); // El valor "" es FALSY

// Pruebas comparativas
console.log(comprobarFalsy(" ")); // El valor " " es TRUTHY (contiene un espacio)
console.log(comprobarFalsy("0")); // El valor "0" es TRUTHY (no está vacía)
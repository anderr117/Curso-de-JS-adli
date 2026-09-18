'use strict';

/**
 * Ejercicio 50
 * ¿Cómo compruebas correctamente si un valor es NaN? Usa Number.isNaN()
 */

function comprobarNaN() {
    let a = "4";
    let b = "hola";
    let c = Number("hola"); // Esto produce NaN
    let d = NaN;

    // Caso 1: Cadena numérica ("4") -> no es NaN
    console.log('Number.isNaN("4"):    ', Number.isNaN(a)); // false

    // Caso 2: NaN directo -> es NaN
    console.log('Number.isNaN(NaN):    ', Number.isNaN(d)); // true

    // Caso 3: Conversión fallida a número -> es NaN
    console.log('Number.isNaN(c):      ', Number.isNaN(c)); // true

    // Caso 4: Cadena de texto "hola" -> NO es NaN (es un string)
    console.log('Number.isNaN("hola"): ', Number.isNaN(b)); // false
}

comprobarNaN();
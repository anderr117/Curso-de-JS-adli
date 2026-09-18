'use strict';

/**
 * Ejercicio 32
 * Declara let y = 20. Usa -= para restarle 8.
 */

function restaAsignacionCompuesta(num1) {
    if (typeof num1 !== 'number') {
        console.log('Error: Debe ser un número');
        return;
    }

    let y = 20;
    y -= num1;

    return y;
}

let resultado = restaAsignacionCompuesta(8);

if (resultado !== undefined) {
    console.log(`El resultado de la resta usando asignación compuesta es: ${resultado}`);
}
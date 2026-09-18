'use strict';

/**
 * Ejercicio 34
 * Declara let w = 100. Usa /= para dividirlo entre 4.
 */

function divisionAsignacionCompuesta(num) {
    if (typeof num !== 'number') {
        console.log('Error: Debe ser un número');
        return;
    }

    let w = 100;
    w /= num;

    return w;
}

let resultado = divisionAsignacionCompuesta(4);

if (resultado !== undefined) {
    console.log(`El resultado de la división usando Asignación Compuesta es: ${resultado}`);
}
'use strict';

/**
 * Ejercicio 26
 * Calcula el perímetro de un cuadrado de lado 6.
 */

function perimetroCuadrado(lado) {
    if (typeof lado !== 'number') {
        console.log('Error: Debe ser un número');
        return;
    }

    return lado * 4;
}

let resultado = perimetroCuadrado(6);

if (resultado !== undefined) {
    console.log(`El perímetro del cuadrado es: ${resultado}`);
}
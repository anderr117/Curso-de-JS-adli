'use strict';

/**
 * Ejercicio 31
 * Declara let x = 10. Usa += para sumarle 5.
 */

function sumaAsignacionCompuesta(num1) {
    if (typeof num1 !== 'number') {
        console.log('Error: Debe ser un número');
        return;
    }

    let x = 10;
    x += num1;

    return x;
}

let resultado = sumaAsignacionCompuesta(5);

if (resultado !== undefined) {
    console.log(`La suma usando asignación compuesta es: ${resultado}`);
}
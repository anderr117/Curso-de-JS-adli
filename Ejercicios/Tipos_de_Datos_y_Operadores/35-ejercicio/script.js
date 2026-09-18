'use strict';

/**
 * Ejercicio 35
 * Declara let a = 17. Usa %= para asignarle el resto de dividir entre 5.
 */

function restoAsignacionCompuesta(num) {
    if (typeof num !== 'number') {
        console.log('Error: Debe ser un número');
        return;
    }

    let a = 17;
    a %= num;

    return a;
}

let resultado = restoAsignacionCompuesta(5);

if (resultado !== undefined) {
    console.log(`El resultado del resto usando Asignación Compuesta es: ${resultado}`);
}
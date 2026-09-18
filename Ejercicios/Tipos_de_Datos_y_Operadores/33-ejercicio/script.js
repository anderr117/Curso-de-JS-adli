'use strict';

/**
 * Ejercicio 33
 * Declara let z = 4. Usa *= para multiplicarlo por 3.
 */

function multiplicacionAsignacionCompuesta(num) {
    if (typeof num !== 'number') {
        console.log('Error: Debe ser un número');
        return;
    }

    let z = 4;
    z *= num;

    return z;
}

let resultado = multiplicacionAsignacionCompuesta(3);

if (resultado !== undefined) {
    console.log(`El resultado de la multiplicación compuesta es: ${resultado}`);
}
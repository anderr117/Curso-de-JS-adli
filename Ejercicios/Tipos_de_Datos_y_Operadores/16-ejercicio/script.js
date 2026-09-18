'use strict';

/**
 * Ejercicio 16
 * Calcula la suma de 15 y 27. Guárdala en resultado.
 */

function suma(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Error: Ambos parámetros deben ser números');
        return;
    }

    return num1 + num2;
}


let resultado = suma(15, 27);

if (resultado !== undefined) {
    console.log(`El resultado de la suma es ${resultado}`);
}
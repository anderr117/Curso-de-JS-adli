'use strict';

/**
 * Ejercicio 28
 * Convierte 98.6 grados Fahrenheit a Celsius usando la fórmula (F - 32) * 5/9.
 */

function aCelsius(gradoFahrenheit) {
    if (typeof gradoFahrenheit !== 'number') {
        console.log('Error: Debe ser un número');
        return;
    }

    return (gradoFahrenheit - 32) * 5 / 9;
}

let resultado = aCelsius(98.6);

if (resultado !== undefined) {
    console.log(`Grados Celsius: ${resultado}`);
}
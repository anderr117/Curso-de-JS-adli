'use strict';

/**
 * Ejercicio 27
 * Convierte 100 grados Celsius a Fahrenheit usando la fórmula (C * 9/5) + 32.
 */

function aFahrenheit(celsius) {
    if (typeof celsius !== 'number') {
        console.log('Error: Debe ser un número');
        return;
    }

    return (celsius * 9 / 5) + 32;
}

let resultado = aFahrenheit(100);

if (resultado !== undefined) {
    console.log(`Grados Fahrenheit: ${resultado}`);
}
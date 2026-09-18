'use strict';

/**
 * Ejercicio 39
 * Declara let temperatura = 25. Usa += para aumentarla 5 grados. Luego -= para bajarla 3.
 */

function calcularTemperatura() {
    let temperatura = 25;

    temperatura += 5;
    temperatura -= 3;

    return temperatura;
}

let resultado = calcularTemperatura();

console.log(`El resultado final de la temperatura es: ${resultado}°C`);
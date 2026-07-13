'use strict'

/**
 * Ejercicio 65 (Conversión de temperatura)
 * Declara una variable celsius con un valor. Conviértela a fahrenheit usando la fórmula (celsius * 9/5) + 32. 
 * Guarda el resultado en fahrenheit.
 */

function convertirCelsiusAFahrenheit(gradosCelsius) {
    const fahrenheit = (gradosCelsius * 9 / 5) + 32;
    return fahrenheit;
}

let tempHoy = 25;
let tempMañana = 30;

console.log(`${tempHoy}°C son ${convertirCelsiusAFahrenheit(tempHoy)}°F`);
console.log(`${tempMañana}°C son ${convertirCelsiusAFahrenheit(tempMañana)}°F`);


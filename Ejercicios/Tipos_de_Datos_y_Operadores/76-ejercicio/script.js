'use strict';

/**
 * Ejercicio 76
 * Convierte el string "123" a número de tres formas diferentes.
 */

function conversion(texto) {
    // Validación - Comprueba si es string y si contiene un número válido
    if (typeof texto !== 'string' || isNaN(Number(texto))) {
        return `ERROR: "${texto}" no es un texto numérico válido`;
    }

    // 1. Usando la función global Number()
    const formaUno = Number(texto);

    // 2. Usando el operador unario +
    const formaDos = +texto;

    // 3. Usando parseInt() especificado en base 10
    const formaTres = parseInt(texto, 10);

    return `Forma 1 (Number)  : ${formaUno} (${typeof formaUno})
Forma 2 (+ unario): ${formaDos} (${typeof formaDos})
Forma 3 (parseInt): ${formaTres} (${typeof formaTres})`;
}

console.log(conversion('123'));
'use strict';

/**
 * Ejercicio 69
 * Determina si un número es par o impar usando ternario.
 */

function parOImpar(numero) {
    if (typeof numero !== 'number' || !Number.isInteger(numero)) {
        return 'Error: Debe ingresar un número entero válido';
    }

    const evaluar = Math.abs(numero) % 2 === 0 ? 'El número es par' : 'El número es impar';

    return evaluar;
}

console.log(parOImpar(8));
console.log(parOImpar(7));
console.log(parOImpar(-4));
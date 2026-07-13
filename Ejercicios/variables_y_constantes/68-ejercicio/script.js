'use strict'

/**
 * Ejercicio 68 (Fibonacci simple)
 * Declara a = 0, b = 1. Calcula el siguiente número de Fibonacci y guárdalo en c. Luego
 * actualiza a y b para que sean los dos últimos.
 */


function fibonacci(n) {
    if (n < 2) return n;

    let a = 0;
    let b = 1;
    let c;

    for (let i = 2; i <= n; i++) {
        c = a + b;

        [a, b] = [b, c];
    }

    return b;
}

console.log(`El décimo número de Fibonacci es: ${fibonacci(10)}`);
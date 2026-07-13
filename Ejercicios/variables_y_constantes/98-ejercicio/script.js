'use strict'

/**
 * Ejercicio 98 (Memoización simple)
 * Crea una función fibonacciConMemo que use una variable const cache = {} (privada
 * mediante closure) para recordar resultados previos y optimizar cálculos.
 */



function fibonacciConMemo() {

    const cache = {};

    // Retornamos la función que hará el cálculo optimizado
    return function fibo(n) {
        if (typeof n !== 'number' || n < 0) {
            return console.error('Error: Debe ser un número entero mayor o igual a 0');
        }

        // Los valores iniciales conocidos de Fibonacci
        if (n === 0) return 0;
        if (n === 1) return 1;

        // VERIFICACIÓN: ¿Ya calculamos este número antes?
        if (n in cache) {
            console.log(`Obteniendo Fibonacci de ${n} desde la caché...`);
            return cache[n];
        }

        // CÁLCULO Y ALMACENAMIENTO: Si no existe, lo calculamos recursivamente y lo guardamos
        // F(n) = F(n-1) + F(n-2)
        cache[n] = fibo(n - 1) + fibo(n - 2);
        
        return cache[n];
    };
}


const obtenerFibo = fibonacciConMemo();


console.log(`Resultado F(6):`, obtenerFibo(6)); // Devuelve 8

console.log('---');

console.log(`Resultado F(6) repetido:`, obtenerFibo(6)); // Lo saca de la caché

console.log('---');

// Si pedimos uno cercano, aprovecha lo que ya guardó en memoria para calcular el resto
console.log(`Resultado F(7):`, obtenerFibo(7));
'use strict'

/**
 * Ejercicio 24
 * ¿Cuál es la diferencia entre x++ y ++x? Demuéstralo con ejemplos.
 */

/**
 * x++ -> Lo que hace es incrementar una variable (post-incrmento) suma 1 depués de terminar la orden, va de uno en uno, por ejemplo 0, 0 + 1, 1 + 1, 2 + 1...
 * ++x -> lo que hace es incrementar una variable (pre-incremento), devuelve el nuevo valor ya sumado, 1, 2, 3...
 * 
 * // POST-INCREMENTO (x++)
 * let x = 10;
 * let resultadoPost = x++; 
 * // 1. resultadoPost recibe el valor actualL de x (10).
 * // // 2. x se incrementa a 11.
 * // Resultado: resultadoPost es 10, x es 11.
 * 
 * // PRE-INCREMENTO (++y)
 * let y = 10;
 * let resultadoPre = ++y; 
 * // 1. y se incrementa first a 11.
 * // 2. resultadoPre recibe el nuevo valor de y (11).
 * // Resultado: resultadoPre es 11, y es 11.
 */



function demostracionIncremento() {
    // Ejemplo 1: Post-incremento (x++)
    let x = 5;
    console.log('--- Post-incremento (x++) ---');
    console.log(`Valor devuelto por x++: ${x++}`);
    console.log(`Valor de x en la siguiente línea: ${x}`);

    // Ejemplo 2: Pre-incremento (++y)
    let y = 5;
    console.log('\n--- Pre-incremento (++y) ---');
    console.log(`Valor devuelto por ++y: ${++y}`);
    console.log(`Valor de y en la siguiente línea: ${y}`);
}

demostracionIncremento();

'use strict';

/**
 * Ejercicio 63
 * ¿Qué devuelve 0 && "hola"?
 */

function comparacionAndZero() {
    // 0 es un valor falsy, por lo que && se detiene inmediatamente y devuelve 0
    console.log('0 && "hola" -> nos da:', 0 && "hola"); // Imprime: 0
}

comparacionAndZero();
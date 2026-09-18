'use strict';

/**
 * Ejercicio 64
 * ¿Qué devuelve "hola" || "mundo"?
 */

function comparacionOrStrings() {
    // "hola" es un string no vacío (truthy). El operador || se detiene y lo devuelve.
    console.log('"hola" || "mundo" -> nos da:', "hola" || "mundo"); // Imprime: "hola"
}

comparacionOrStrings();
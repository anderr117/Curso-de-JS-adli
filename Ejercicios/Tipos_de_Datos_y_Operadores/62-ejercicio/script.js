'use strict';

/**
 * Ejercicio 62
 * ¿Qué devuelve "hola" && "mundo"? El operador && no siempre devuelve boolean.
 */

function comparacionAndStrings() {
    // "hola" es truthy, por lo que && avanza y devuelve el segundo operando ("mundo")
    console.log('"hola" && "mundo" -> da:', "hola" && "mundo"); // Imprime: "mundo"
}

comparacionAndStrings();
'use strict'

/**
 * Ejercicio 61 (Swap sin temporal)
 * Intercambia los valores de a y b sin usar una tercera variable temporal.
 * 
 * let a = 5;
 * let b = 10;
 */

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(`El valor nuevo de a es ${a} y el valor nuevo de b es ${b}`)

//Otra forma
// let a = 5;
// let b = 10;

// a = a + b; // a ahora vale 15
// b = a - b; // b ahora vale 5 (15 - 10)
// a = a - b; // a ahora vale 10 (15 - 5)

// // ¡Intercambiados!
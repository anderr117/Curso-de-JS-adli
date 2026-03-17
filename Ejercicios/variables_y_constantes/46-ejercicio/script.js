'use strict'

/**
 * Ejercicio 46
 * Repite el ejercicio 45 pero con valores primitivos en lugar de arrays.
 */

let a = 2;
let b = a;
console.log(a); //imprime 2
console.log(b) //imprime 2
b.push(4);
console.log(a); // Da error
console.log(b); // Da error
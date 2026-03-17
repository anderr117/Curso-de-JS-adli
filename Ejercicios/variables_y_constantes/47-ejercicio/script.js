'use strict'

/***
 * Ejercicio 47 
 * Crea una copia independiente de un array original = [1, 2, 3] en una nueva variable copia.
 * Modifica copia sin afectar original
 */

const original = [1, 2, 3];

// Cree la copia independiente usando el operador spread
const copia = [...original];

// Modificamos la copia
copia.push(4);

console.log("Array Original:", original); // Imprime [1, 2, 3]
console.log("Array Copia:", copia);       // Imprime [1, 2, 3, 4]
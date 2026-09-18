'use strict'

/**
 * Ejercicio 10
 * ¿Qué tipo tiene un array? typeof [1,2,3] ¿Es correcto? ¿Cómo verificas si es array
 * correctamente?
 */

console.log(typeof [1,2,3]) //Devuelve object

let array = [1, 2 , 3];

//Para verificar si el array en verdad lo es
console.log(Array.isArray(array)) //True

/**
 * En JavaScript, un array es técnicamente un objeto porque la estructura del lenguaje
 * almacena los datos clave-valor. En lugar de nombres de propiedades, los arrays usan 
 * números enteros (índices) como claves. Esto significa que typeof [] devuelve "object" 
 * por diseño. Para verificar si un dato es realmente un array, se debe usar Array.isArray().
 */
'use strict'

/**
 * 
 */

let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a); // ¿Qué imprime? - [1, 2, 3, 4]
console.log(b); // ¿Qué imprime? - [1, 2, 3, 4]

//Explica qué pasó.

/**
 * Lo que ocurrió aquí es un paso por referencia. Al hacer let b = a, 
 * no estamos creando un nuevo array ni copiando los valores de a dentro de b. 
 * Lo que realmente estamos haciendo es crear un "alias" o un segundo nombre
 * para el mismo espacio en la memoria.
 */
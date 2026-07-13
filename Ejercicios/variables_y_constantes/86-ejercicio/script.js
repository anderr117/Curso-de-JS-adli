'use strict'

/**
 * console.log(miVar); // ¿Qué imprime?
 * var miVar = 5;
 * console.log(miVar); // ¿Qué imprime?
 */


// 1. JavaScript eleva la declaración al principio de todo (Hoisting)
var miVar;

// 2. Ejecuta el primer console. Como está vacía, da 'undefined'
console.log(miVar); // Imprime: undefined

// 3. Aquí es donde se le asigna el valor real
miVar = 5;

// 4. Segundo console. Ahora que ya tiene el valor, lo muestra
console.log(miVar); // Imprime: 5


/**
 * Este comportamiento del Hoisting ocurre únicamente con la palabra clave vieja var.
 */
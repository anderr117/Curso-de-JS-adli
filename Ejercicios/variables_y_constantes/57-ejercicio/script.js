'use strict'

/**
 * Ejercicio 57
 * ¿Es sensible a mayúsculas JavaScript? Prueba: let nombre = "Ana"; y let Nombre = "Juan";.
 * ¿Son la misma variable?
 * No es la misma variable, por lo tanto JS si es sensible a mayusculas
 */

let nombre = 'Ana'; //Se gaurda en el epacion de memoria A
let Nombre = 'Juan'; //Se guarda en el espacio de la memoria B 

console.log(`La primera variable ${nombre} y la segunda variable ${Nombre}`);
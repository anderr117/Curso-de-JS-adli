'use strict'

/***
 * Ejercicio 48
 * Crea una copia independiente de un objeto original = {nombre: "Ana", edad: 25}.
 */

let original = {
    nombre: 'Pedro',
    edad: 25
}

let independiente = {...original}

original.nombre = 'Luis'

console.log(original)
console.log(independiente);
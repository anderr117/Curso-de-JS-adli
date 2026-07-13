'use strict'

/**
 * Ejercicio 95
 * function prueba() {
 * return typeof variable; // ¿Qué devuelve?
 * let variable = "hola";
 * }
 * console.log(prueba());
 */



function prueba() {

    /**
     * Devuelve un error de referencia,
     * la variable se declara después de querer
     * retornar o mostrar el valor de la variable,
     * js muestra directamente este error.
     */
    return typeof variable; // ¿Qué devuelve?
    let variable = "hola";
}
console.log(prueba());
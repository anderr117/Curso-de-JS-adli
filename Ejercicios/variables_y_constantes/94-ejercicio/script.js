'use strict'

/**
 * Ejercicio 94
 * function prueba() {
 * return typeof variable; // ¿Qué devuelve?
 * var variable = "hola";
 * }
 * console.log(prueba());
 */




// ESCENARIO A
function pruebaVar() {
    return typeof variable; // El hoisting la elevó como undefined
    var variable = "hola";  // Nunca se llega a ejecutar por el return de arriba
}
console.log(pruebaVar()); // Imprime: "undefined"


// ESCENARIO B (¿Qué pasaría con let?)
function pruebaLet() {
    return typeof variable; // ¡BOOM! Error de inicialización (TDZ)
    let variable = "hola";
}
console.log(pruebaLet()); // Lanza: ReferenceError
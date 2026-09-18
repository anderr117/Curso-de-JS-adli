'use strict';

/**
 * Ejercicio 54
 * ¿Qué da [] == ""?
 */

function comparacionArrayVacio(){

    //JS convierte primero [] a una cadena vacía, luego compara "" == "" -> true, ambos no tienen valores sería algo como 0 == 0 -> true

    // La comparación devuelve true
    console.log('¿Qué da [] == ""? ->', [] == ""); // Imprime: true

    // Demostración paso a paso:
    console.log('Paso 1 ([].toString()):', [].toString()); // Imprime: ""
    console.log('Paso 2 ("" == ""):      ', "" == "");       // Imprime: true



}

comparacionArrayVacio();
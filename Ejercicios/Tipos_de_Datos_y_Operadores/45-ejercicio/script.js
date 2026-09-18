'use strict';

/**
 * Ejercicio 45
 * Compara " " == 0. (string con espacio). ¿Qué da?
 */

function comparacionEspacioEnBlanco() {
    // La igualdad débil (==) convierte la cadena con espacios " " al número 0 -> (0 == 0) -> true
    console.log('Comparación (" " == 0):', " " == 0);

    // Demostración extra de cómo JS convierte cadenas con espacios:
    console.log('Number(" "):           ', Number(" "));   // Imprime: 0
    console.log('Number("   "):         ', Number("   ")); // Imprime: 0 (múltiples espacios también son 0)
}

comparacionEspacioEnBlanco();
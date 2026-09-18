'use strict';

/**
 * Ejercicio 53
 * ¿Qué da [] == 0? (array vacío vs número). La coerción es extraña aquí.
 */

function comparacionArrayVacio() {
    // La comparación devuelve true
    console.log('¿Qué da [] == 0? ->', [] == 0); // Imprime: true

    // Demostración paso a paso de lo que hace JS internamente:
    console.log('Paso 1 ([].toString()):', [].toString()); // Imprime: "" (cadena vacía)
    console.log('Paso 2 (Number("")):   ', Number(""));     // Imprime: 0
    console.log('Paso 3 (0 == 0):       ', 0 == 0);         // Imprime: true
}

comparacionArrayVacio();
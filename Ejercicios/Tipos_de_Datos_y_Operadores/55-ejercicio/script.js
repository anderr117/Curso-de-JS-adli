'use strict';

/**
 * Ejercicio 55
 * ¿Qué da [] == false?
 */

function comparacionArrayVacioBooleano() {

    //JS convierte [] a string por lo que nos queda una cadena vacía "", luego convierte "" a 0 tomando en cuenta que está vacío
    //luego compara 0 == false, false sería igual 0, entonces la comparación final sería 0 == 0 -> true
    // La comparación da true
    console.log('¿Qué da [] == false? ->', [] == false); // Imprime: true

    // Demostración paso a paso de lo que hace JS:
    // Paso 1: Convertir el booleano a número (false -> 0)
    console.log('Paso 1 (Number(false)):', Number(false)); // 0

    // Paso 2: Convertir el array a valor primitivo ([].toString() -> "")
    console.log('Paso 2 ([].toString()): ', [].toString());  // ""

    // Paso 3: Convertir la cadena vacía a número (Number("") -> 0)
    console.log('Paso 3 (Number("")):    ', Number(""));     // 0

    // Paso 4: Comparar números (0 == 0) -> true
    console.log('Paso 4 (0 == 0):        ', 0 == 0);         // true

}

comparacionArrayVacioBooleano();
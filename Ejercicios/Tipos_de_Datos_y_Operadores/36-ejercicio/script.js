'use strict';

/**
 * Ejercicio 36
 * Declara let contador = 5. Usa += para sumarle 3. Luego *= para multiplicarlo por 2. 
 * ¿Cuál es el resultado final?
 */

function asignacionCompuesta() {
    let contador = 5;

    contador += 3;
    contador *= 2;

    return contador;
}

let resultado = asignacionCompuesta();

console.log(`El resultado es: ${resultado}`);
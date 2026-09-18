'use strict';

/**
 * Ejercicio 86
 * Enumera todos los valores falsy en JavaScript.
 */

function listarValoresFalsy() {
    const listaFalsy = [
        false,        // 1. El booleano false literal
        0,            // 2. El número cero
        -0,           // 3. El cero negativo
        0n,           // 4. El cero de tipo BigInt
        "",           // 5. Cadena de texto vacía (longitud 0)
        null,         // 6. Ausencia explícita de valor
        undefined,    // 7. Variable no definida o valor ausente
        NaN           // 8. Not a Number (operación matemática no válida)
    ];

    const verifiacion = listaFalsy.every(valor => !valor);

    return {
        total: listaFalsy.length,
        sonTodosFalsy: verifiacion,
        valores: listaFalsy
    };
}

console.log(listarValoresFalsy());
'use strict'

/**
 * Ejercicio 19
 * Divide 144 entre 12. Muestra el resultado.
 */

function division(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        console.log('Error: Debe ser un numero');
        return;
    }

    return num1/num2;
}

let resultado = division(144,12);

if(resultado !== undefined){
    console.log(`El resultado de la división es: ${resultado}`);
}
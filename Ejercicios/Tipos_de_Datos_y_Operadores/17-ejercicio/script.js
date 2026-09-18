'use strict'

/**
 * Ejercicio 17
 * Resta 50 menos 32. Muestra el resultado.
 */


function resta(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        console.log('Error: Debe ser un numero');
        return;
    }

    return num1 - num2;
}

let resultado = resta(50,32);

if(resultado !== undefined){
    console.log(`El resultado de la resta es ${resultado}`)
}
'use strict'

/**
 * Ejercicio 18
 * Multiplica 8 por 7. Imprime el resultado.
 */

function multiplicacion(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        console.log('Error: De ser un numero');
        return;
    }

    return num1 * num2;

}

let resultado = multiplicacion(8,7);

if(resultado !== undefined){
    console.log(`El resultado de la multiplicación es: ${resultado}`);
}
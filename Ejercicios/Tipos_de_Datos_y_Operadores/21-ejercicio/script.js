'use strict'
/**
 * Ejercicio 21
 * Calcula 2 elevado a la 10 usando el operador **.
 */


function potencia(base, exponente){
    if(typeof base !== 'number' || typeof exponente !== 'number'){
        console.log('Error: Debe ser un numero');
        return;
    }

    return base ** exponente;
}

let resultado = potencia(2, 10);

if(resultado !== undefined){
    console.log(`El resultado es: ${resultado}`);
}



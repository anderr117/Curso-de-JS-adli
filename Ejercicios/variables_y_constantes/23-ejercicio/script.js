'use strict'

/**
 * Crea una función sumar que tenga una constante interna IMPUESTO = 0.16. La función debe 
 * recibir un número y devolverlo más el impuesto. Intenta acceder a IMPUESTO fuera de la 
 * función.
 */

function sumar(numero){
    const impuesto = 0.16;

    let conImpuestos = numero + (numero * impuesto);
    return conImpuestos;
}

let resultado = sumar(10);
console.log(resultado);

//(ReferenceError) porque IMPUESTO es local a la función
// console.log(impuesto); 
'use strict';

/**
 * Ejercicio 81
 * Convierte undefined a número.
 */

function conversionUndefinedANumero(valor) {

    //Undefined es NaN (Not A Number)
    const convUno = Number(valor);
    const convDos = +valor;
    const convTres = valor * 1;
    const convCuatro = valor - 0;

    return `Valor de entrada: ${valor}
- Number(undefined) : ${convUno} (Tipo: ${typeof convUno})
- +undefined        : ${convDos}
- undefined * 1     : ${convTres}
- undefined - 0     : ${convCuatro}`;
}

const resultado = conversionUndefinedANumero(undefined);
console.log(resultado);

/**
 * Aunque el valor devuelto es NaN, el tipo de dato que devuelve typeof NaN es curiosamente 
 * "number". En el motor de JavaScript, NaN es un valor numérico especial que representa un 
 * resultado matemático no válido o no definible.
 */
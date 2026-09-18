'use strict';

/**
 * Ejercicio 84
 * ¿Qué da Number(true)? ¿Y Number(false)?
 */

function convertirBooleanoANumero(valor) {
    if (typeof valor !== 'boolean') {
        return 'Error: El valor debe ser de tipo booleano (true o false)';
    }

    const conversionNumber = Number(valor); //Coercion de tipos por lo que da 1 si es true o 0 si es false
    const conversionUnario = +valor;

    return `Valor: ${valor} -> Number(): ${conversionNumber} | Unario (+): ${conversionUnario}`;
}

console.log(convertirBooleanoANumero(true));  // 1
console.log(convertirBooleanoANumero(false)); // 0
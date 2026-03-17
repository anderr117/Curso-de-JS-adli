'use strict'

/**
 * Ejercicio 42
 * Crea una constante TASA_CAMBIO = 1.1. Calcula cuántos euros son 100 dólares
 */

const tasa_cambio = 1.1;

function calculoEuros(dolares) {

    if (typeof dolares !== 'number') {
        console.log('Error: Debe ser un numero')
    } else {
        let calculoEuros = dolares / tasa_cambio;
        //.tofixed() es para mostrar 2 decimales
        return (`Los ${dolares} equivalen a ${calculoEuros.toFixed(2)} `);
    }

}

console.log(calculoEuros(100));
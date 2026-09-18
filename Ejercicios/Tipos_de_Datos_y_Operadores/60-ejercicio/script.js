'use strict';

/**
 * Ejercicio 60
 * Evalúa false || true.
 */


function comparacionOr() {

    //Evalúa el primero el cual es false - falso, lo ignora, luego evalua el segundo el cual es true - verdadero, la salida es true
    // El primer operando es false (falsy), por lo que || avanza y devuelve el segundo operando (true)
    console.log('false || true -> nos da:', false || true); // Imprime: true

}

comparacionOr();
'use strict';

/**
 * Ejercicio 29
 * Calcula el interés simple: capital = 1000€, tasa = 5% anual, tiempo = 3 años. 
 * Fórmula: capital * tasa * tiempo.
 */

function interesSimple(capital, tasa, tiempo) {
    if (typeof capital !== 'number' || typeof tasa !== 'number' || typeof tiempo !== 'number') {
        console.log('Error: Debe ser un número');
        return;
    }

    let porcentaje = tasa / 100;

    return capital * porcentaje * tiempo;
}

let resultado = interesSimple(1000, 5, 3);

if (resultado !== undefined) {
    console.log(`El interés simple es de: ${resultado}€`);
}
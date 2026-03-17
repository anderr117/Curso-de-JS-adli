'use strict'

/**
 * Ejercicio 50
 * Declara una variable let puntuacion = 0. Crea una función sumarPuntos que reciba un
 * número y lo sume a puntuacion. Llámala varias veces.
 */

let puntuacion = 0;

function sumarPuntos(numero) {
    if (typeof numero !== 'number') {
        console.log('Error: Debe ser un número');
    } else {
        let anterior = puntuacion;
        puntuacion = puntuacion + numero; 
        
        return `Sumando ${numero}. Puntuación anterior: ${anterior} -> Nueva puntuación: ${puntuacion}`;
    }
}

let limite = 3;

for (let i = 0; i < limite; i++) {
    console.log(sumarPuntos(4));
}


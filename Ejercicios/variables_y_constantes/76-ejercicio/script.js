'use strict'
/**
 * Ejercicio 76 (Puntuación de juego)
 * Declara let puntuacion = 0. Crea funciones sumarPuntos(cantidad) y resetPuntuacion().
 */


let puntuacion = 0;

function sumarPuntos(cantidad) {
    if (typeof cantidad !== 'number') {
        return console.error('Error: La cantidad a sumar debe ser un número');
    }

    // esto es igua a decir x = x + y
    puntuacion += cantidad; 
    console.log(`Sumaste ${cantidad} puntos. Puntuación total: ${puntuacion}`);
}

function resetPuntuacion() {
    puntuacion = 0;
    console.log('Puntuación reiniciada a 0.');
}

function restarPuntos(cantidad) {
    if (typeof cantidad === 'number' && puntuacion >= cantidad) {
        puntuacion -= cantidad;
        console.log(`Restaste ${cantidad} puntos. Puntuación total: ${puntuacion}`);
    } else {
        puntuacion = 0;
        console.log('Puntuación bajo cero. Reiniciada a 0.');
    }
}

sumarPuntos(20);
sumarPuntos(30);
restarPuntos(10);
resetPuntuacion();
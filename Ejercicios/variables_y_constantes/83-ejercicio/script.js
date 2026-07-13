'use strict'

/**
 * Ejercicio 83 (Caja registradora)
 * Declara const denominaciones = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 50, 100]. Declara let
 * dineroEnCaja = {} para guardar cantidades de cada denominación.
 */

const denominaciones = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 50, 100];

let dineroEnCaja = {};

function guardarDenominacion(billeteOMoneda) {
    if (typeof billeteOMoneda !== 'number') {
        return console.error('Error: El valor ingresado debe ser un número.');
    }

    if (denominaciones.includes(billeteOMoneda)) {
        
        if (dineroEnCaja[billeteOMoneda] === undefined) {
            dineroEnCaja[billeteOMoneda] = 0;
        }

        dineroEnCaja[billeteOMoneda]++;

        console.log(`Ingresado: Q${billeteOMoneda}. Total de esta denominación en caja: ${dineroEnCaja[billeteOMoneda]}`);
        console.log('Estado actual de la caja:', dineroEnCaja);
        
    } else {
        console.warn(`Error: Q${billeteOMoneda} no es una denominación válida en el sistema.`);
    }
}


guardarDenominacion(20);
guardarDenominacion(20); 
guardarDenominacion(0.01);
guardarDenominacion(7);


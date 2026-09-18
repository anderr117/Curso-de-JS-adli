'use strict';

/**
 * Ejercicio 38
 * Declara let precio = 100. Aplica un descuento del 20% usando *=.
 */

function aplicarDescuento(porcentajeDescuento) {
    if (typeof porcentajeDescuento !== 'number') {
        console.log('Error: Debe ser un número');
        return;
    }

    let precio = 100;

    let factor = 1 - (porcentajeDescuento / 100);

    precio *= factor;

    return precio;
}

let resultado = aplicarDescuento(20);

if (resultado !== undefined) {
    console.log(`El precio total con descuento aplicado es: Q ${resultado}`);
}
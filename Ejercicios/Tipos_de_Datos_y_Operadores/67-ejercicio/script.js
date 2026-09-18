'use strict';

/**
 * Ejercicio 67
 * Usa ternario para asignar a precioFinal el precio original si no hay descuento, o el precio con descuento si lo hay.
 */

function calcularPrecioFinal(precio, descuento = 0) {
    if (typeof precio !== 'number' || precio < 0) {
        return 'Error: El precio debe ser un número mayor o igual a 0';
    }
    if (typeof descuento !== 'number' || descuento < 0) {
        return 'Error: El descuento debe ser un número mayor o igual a 0';
    }

    const precioCalculado = descuento > 0
        ? precio - (precio * descuento) / 100
        : precio;

    const precioFinal = descuento === 0
        ? `El precio final es ${precio}`
        : `El precio con descuento es ${precioCalculado}`;

    return precioFinal;
}

// Pruebas
console.log(calcularPrecioFinal(100, 10));
console.log(calcularPrecioFinal(100, 0));
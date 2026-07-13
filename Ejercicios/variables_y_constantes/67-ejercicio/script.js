/**
 * Ejercicio 67 (Descuento condicional)
 * Declara precioOriginal = 100, esMiembro = true. Si es miembro, aplica 10% de descuento y
 * guarda en precioFinal.
 */

'use strict'

let precioOriginal = 100;
let esMiembro = true;
let porcentajeDescuento = 0.10;

function aplicarDescuentoCondicional() {
    let precioFinal;

    if (esMiembro === true) {
        precioFinal = precioOriginal - (precioOriginal * porcentajeDescuento);

        console.log(`¡Eres miembro! Tu precio final con el 10% de descuento es: Q${precioFinal}`);
    } else {
        precioFinal = precioOriginal;
        console.log(`No eres miembro. El precio se mantiene en: Q${precioFinal}`);
    }

    return precioFinal;
}

aplicarDescuentoCondicional();
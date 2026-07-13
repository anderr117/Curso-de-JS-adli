'use strict'

/**
 * Ejercicio 64 (Calculadora de propina)
 * Declara constantes: CUENTA = 50, PROPINA_BUENA = 0.20, PROPINA_REGULAR =
 * 0.15, PROPINA_MALA = 0.10. Declara una variable calidadServicio que pueda ser "buena",
 * "regular" o "mala". Calcula la propina correspondiente.
 */


const CUENTA = 50;
const PROPINA_BUENA = 0.20;
const PROPINA_REGULAR = 0.15;
const PROPINA_MALA = 0.10;

let calidadServicio = 'regular';

function calcularPropina() {
    if (typeof CUENTA !== 'number') return console.error("La cuenta debe ser un número");

    let porcentajeAplicado;

    if (calidadServicio === 'buena') {
        porcentajeAplicado = PROPINA_BUENA;
    } else if (calidadServicio === 'regular') {
        porcentajeAplicado = PROPINA_REGULAR;
    } else {
        porcentajeAplicado = PROPINA_MALA;
    }

    const montoPropina = CUENTA * porcentajeAplicado;
    const totalConPropina = CUENTA + montoPropina;

    console.log(`Servicio: ${calidadServicio} (${porcentajeAplicado * 100}%)`);
    console.log(`Propina: Q${montoPropina} | Total a pagar: Q${totalConPropina}`);
}

calcularPropina();
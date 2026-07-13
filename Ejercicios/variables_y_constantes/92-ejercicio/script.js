'use strict'
/**
 * Ejercicio 92
 * Crea un ejemplo donde el hoisting con var cause un comportamiento inesperado (bug
 * potencial).
 */



var esClienteVIP = true;
var descuento = 0.4; // Variable global

function pagar(gastado) {
    // 1. ¡EL HOISTING ATACA! Eleva el var del 'else' aquí arriba como undefined
    var descuento; 

    // 2. Evaluamos: true === true. ¡Entra al IF!
    if (esClienteVIP === true) {
        // 3. MATEMÁTICAS: 700 * undefined = NaN
        let total = gastado * descuento; 
        console.log(`El total para el cliente VIP es de ${total}`);
    } else {
        // Aquí abajo solo se hubiera quedado la asignación si hubiera entrado
        descuento = 0.1;
        let total = gastado * descuento;
        console.log(`El total para el cliente no VIP es de ${total}`);
    }
}

pagar(700);
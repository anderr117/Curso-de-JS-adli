'use strict'

/**
 * Ejercicio 69 (Piedra, papel o tijera)
 * Declara dos variables: jugador1 y jugador2 con valores "piedra", "papel" o "tijera". Determina
 * quién gana y guarda el resultado en ganador.
 */



let jugador1 = 'Papel';
let jugador2 = 'piedra';

function jugarPiedraPapelTijera() {
    const opcion1 = jugador1.toLowerCase();
    const opcion2 = jugador2.toLowerCase();

    let resultado;

    if (opcion1 === opcion2) {
        resultado = "Es un empate";
    } else if (
        (opcion1 === "piedra" && opcion2 === "tijera") ||
        (opcion1 === "papel" && opcion2 === "piedra") ||
        (opcion1 === "tijera" && opcion2 === "papel")
    ) {
        resultado = `¡Gana el Jugador 1 con ${opcion1}!`;
    } else {
        resultado = `¡Gana el Jugador 2 con ${opcion2}!`;
    }

    console.log(resultado);
}

jugarPiedraPapelTijera();
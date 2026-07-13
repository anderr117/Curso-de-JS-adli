'use strict'

/**
 * Ejercicio 75 (Temporizador)
 * Declara let tiempoRestante = 60. Crea una función tick que reste 1 segundo y muestre el
 * tiempo. Si llega a 0, muestra "Tiempo terminado".
 */


let tiempoRestante = 10;
const TIEMPO_LIMITE = 0;

const boton = document.querySelector('button');
if (boton) {
    boton.addEventListener('click', tick);
}

function tick() {
    if (tiempoRestante > TIEMPO_LIMITE) {

        tiempoRestante--;
        console.log(`Tiempo restante: ${tiempoRestante}s`);

        if (tiempoRestante === TIEMPO_LIMITE) {
            console.log("¡Tiempo terminado!");
            alert("¡Tiempo terminado!");
        }

    } else {
        console.log("El temporizador ya está en cero.");
    }
}
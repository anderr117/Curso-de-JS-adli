'use strict'
/**
 * Ejercicio 72 (Contador de visitas)
 * Simula un contador de visitas con let visitas = 0. Crea una función registrarVisita que
 * incremente y muestre el total.
 */



let visitas = 0;
const boton = document.querySelector('button');


function registrarVisita() {
    if (typeof visitas !== 'number') {
        console.error('Error: La variable visitas no es un número');
        return;
    }

    visitas++; 

    console.log(`Visita registrada. Total: ${visitas}`);
    alert(`Visita número: ${visitas}`);
}


if (boton) {
    boton.addEventListener('click', registrarVisita);
} else {
    console.warn("No se encontró ningún botón en el HTML.");
}



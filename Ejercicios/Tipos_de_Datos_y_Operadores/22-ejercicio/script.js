'use strict';

/**
 * Ejercicio 22
 * Crea un contador que empiece en 0. Increméntalo en 1 usando ++. Hazlo 3 veces y muestra
 * el valor final.
 */

function ejecutarContador() {
    let contador = 0;

    for (let i = 0; i < 3; i++) {
        contador++;
    }

    console.log(`El valor final del contador es: ${contador}`);
}

ejecutarContador();
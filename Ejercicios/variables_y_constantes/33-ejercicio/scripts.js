'use strict'

/**
 * Ejercicio 33 
 * Repite el ejercicio 32 pero cambiando todos los var por let. ¿Qué cambia?
 */
let x = 10;
function test() {
    let x = 20;
    if (true) {
        let x = 30;
        console.log(x); // ¿Qué imprime? - Imprime 30

    }
    console.log(x); // ¿Qué imprime? - Imprime 20
}
test();
console.log(x); // ¿Qué imprime? - 10

/**
 * Con let, cada bloque {} actuá como una caja de seguridad. lo que
 * pasa dentro de la caja , se queda en la caja.
 */
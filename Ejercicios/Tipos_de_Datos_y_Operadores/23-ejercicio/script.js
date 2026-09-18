'use strict'
/**
 * Ejercicio 23
 * Crea un contador que empiece en 10. Decreméntalo en 1 usando --. Hazlo 5 veces.
 */

function contadorFunc(){

    let contador = 10;

    for(let i = 0; i < 5; i++){
        contador--;
    }

    console.log(`El valor final del contador es : ${contador}`)
}

contadorFunc();
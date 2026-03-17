'use strict'

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // ¿Qué imprime? - Imrpime 3 3 3
    }, 1000);
}
//Compara con el ejercicio anterior.
/**
 * En el ejercicio anterio se imprime 0 1 2
 * Mienstras que en este se imprime 3 3 3
 * Porque en este ejercicio se usa var lo cual
 * hace que exista una unica variable i para todo
 *  el bucle. Cuando pasa el segundo del setTimeout, el bucle
 * y la única i que existe vale 3.
 */
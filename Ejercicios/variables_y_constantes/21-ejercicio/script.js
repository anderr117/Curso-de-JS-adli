'use strict'



let global = "global";
function prueba() {
let local = "local";
console.log(global); // ¿Qué imprime? -imprime global
console.log(local); // ¿Qué imprime? - imprime local
}
prueba();
console.log(local); // ¿Qué imprime? Responde sin ejecutar: ¿Qué imprimirá cada console.log?

/**
 * El pirmer console.log imprime global
 * ELsegundo console.log imprime local
 * EL tercer console.log() imprime ReferenceError: local is not defined
 */
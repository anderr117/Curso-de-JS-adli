'use strict'

/**
 * Ejercicio 44
 * Crea una función intercambiar que reciba dos variables por valor (no por referencia) e intente
 * intercambiarlas. ¿Funciona? ¿Por qué?
 */

function intercambiar(valor1, valor2) {
    if (typeof valor1 !== 'number' || typeof valor2 !== 'number') {
        return 'Error: Ambos argumentos deben ser números';
    } else {
        // Usamos una variable temporal para no perder el primer valor
        let temporal = valor1;
        valor1 = valor2;
        valor2 = temporal;

        return `Dentro de la función: valor1 = ${valor1}, valor2 = ${valor2}`;
    }
}

let x = 10;
let y = 20;

console.log("Antes de la función:", x, y);
console.log(intercambiar(x, y));
console.log("Después de la función (fuera):", x, y);


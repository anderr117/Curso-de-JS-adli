'use strict';

/**
 * Ejercicio 66
 * Usa el ternario para asignar a mensaje "mayor" si edad >= 18, sino "menor".
 */

function evaluarEdad(edad) {
    const mensaje = edad >= 18 ? 'mayor' : 'menor';
    return mensaje;
}

const edadPrueba = 25;
const resultado = evaluarEdad(edadPrueba);

console.log(`Para edad ${edadPrueba}:`, resultado);
console.log('Para edad 15:', evaluarEdad(15));
'use strict'

/**
 * Ejercicio 6
 * Crea una variable con un número muy grande: 12345678901234567890. ¿Qué tipo es? Luego
 * agrégale n al final (12345678901234567890n). ¿Qué cambia?
 */

let numeroGrande = 12345678901234567890; //Tipo number

console.log(typeof numeroGrande);

//agregandole n al final
let numerograndeconN = 12345678901234567890n;
console.log(typeof numerograndeconN) //Tipo bigint - cambia a numero grande
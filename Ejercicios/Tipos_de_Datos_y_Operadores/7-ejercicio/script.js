'use strict'

/**
 * Ejercicio 7
 * ¿Cuál es el tipo de Infinity? ¿Y de -Infinity?
 */

let infinto = Infinity;
console.log(typeof infinto); //Number en JavaScript porque el lenguaje sigue el estándar IEEE 754 para la aritmética de coma flotante

let infinitoNegativo = -Infinity;
console.log(typeof infinitoNegativo); //Tipo number también

//Ambos sirven para representar desbordamientos numericos
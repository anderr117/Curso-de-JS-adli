'use strict'

/**
 * Ejercicio 13
 * Comprueba si null == undefined y si null === undefined.
 */


let nulo = null;
let indefinido = undefined;

console.log(typeof nulo); //Devuelve object
console.log(typeof indefinido); //Devuelve undefined

/**
 * Que el tipo de null sea 'object' es un error histórico de la 
 * primera versión de JavaScript en 1995. En esa implementación, 
 * los valores se almacenaban en etiquetas de 32 bits, donde los 
 * primeros 3 bits indicaban el tipo. El identificador para objetos 
 * era 000. Dado que null se interpretaba como un puntero nulo (cero), 
 * el motor lo clasificaba erróneamente como un objeto.
 * 
 * 
 * En cambio, undefined tiene su propio tipo porque representa la 
 * ausencia total de valor (una variable declarada pero sin inicializar, 
 * o una función que no retorna nada). Aunque se intentó corregir este 
 * fallo en el estándar ECMAScript original, se dejó intacto para no 
 * romper miles de sitios web que ya dependían de este comportamiento.
 */
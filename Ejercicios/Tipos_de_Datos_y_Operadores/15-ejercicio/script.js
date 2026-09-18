'use strict'

/**
 * Ejercicio 15
 * Crea un Symbol y verifica su tipo: const sym = Symbol(); typeof sym
 */

const sym = Symbol();

console.log(typeof sym) // Imprime symbol

/**
 * tipo de dato primitivo único e inmutable, introducido en ECMAScript 6 (ES6). 
 * Cada vez que llamas a Symbol(), obtienes un valor totalmente distinto y exclusivo 
 * que nunca va a ser igual a otro, incluso si usas la misma
 * descripción o etiqueta de texto.
 */

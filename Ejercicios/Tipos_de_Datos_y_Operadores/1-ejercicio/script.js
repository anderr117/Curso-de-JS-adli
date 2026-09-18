'use strict'

/**
 * Ejercicio 1
 * Declara una variable de cada tipo primitivo (number, string, boolean, undefined, null).
 * Usa typeof para verificar cada uno
 */


let numero = 42;
let texto = "Hola";
let bool = true;
let indefinido = undefined;
let nulo = null;

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof bool);
console.log(typeof indefinido);
console.log(typeof nulo); //Object, Esto es un error histórico del diseño original de JavaScript (creado en 1995). El creador del lenguaje admitió que es un error, pero no se puede cambiar ahora porque rompería millones de páginas web que ya funcionan así.


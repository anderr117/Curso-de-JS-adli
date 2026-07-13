'use strict'

/**
 * Ejercicio 87
 * console.log(miLet); // ¿Qué imprime?
 * let miLet = 5;
 */


/**
 * Imprimer un error ya que no se ha 
 * declarado la variabel
 */

console.log(miLet);


/**
 * Existe el scope, por lo que aunque se declare 
 * la variabel después no imprimirá el valor de miLet
 */
let miLet = 5;


/**
 * JavaScript sí sabe que miLet existe abajo (también
 * hay un pequeño proceso de elevación), pero el
 * motor de JavaScript coloca a la variable en una
 * zona de castigo llamada Temporal Dead Zone (Zona
 * Muerta Temporal) desde el inicio del bloque hasta
 * la línea exacta donde la declaras. Mientras la
 * variable esté atrapada en esa zona, intentar
 * tocarla o leerla es un "delito" que provoca un
 * ReferenceError.
 */
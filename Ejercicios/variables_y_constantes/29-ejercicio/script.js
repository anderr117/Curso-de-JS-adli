'use strict'

/**
 * Ejercicio 29 
 * Crea un script donde declares una variable let en el ámbito global y otra con el mismo
 * nombre dentro de una función. ¿Cuál prevalece dentro de la función?
 */

let global = 'global';

function miFuncion(){
    let global = 'no global' //Prevalece este
    console.log(global)
}

miFuncion();

/**
 * En programación, este fenómeno tiene un nombre muy descriptivo: Shadowing (Sombreado). 
 * Es como si la variable local proyectara una "sombra" sobre la global, ocultándola 
 * temporalmente mientras estemos dentro de la función.
 */
'use strict'

/**
 * let x = "fuera";
 * function test() {
 * console.log(x); // ¿Qué imprime?
 * let x = "dentro";
 * console.log(x); // ¿Qué imprime?
 * }
 * test();
 */


let x = "fuera";
function test() {

    /**
     * No imrpime nada porque aunque
     * x este declarada fuera de la función
     * dentro de la misma función no se puede acceder a esa variable porque
     * let tiene scope de bloque
     */
    console.log(x);
    let x = "dentro";

    /**
     * Aquí no imprime nada porque 
     * JS detecta el error de que nos e ha
     * declarado la variable y se está intentando
     * mostrar su valor
     * 
     * */

    console.log(x);
}
test();
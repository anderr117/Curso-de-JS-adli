/**
 * Ejercicio 90
 * var x = "fuera";
 * function test() {
 * console.log(x); // ¿Qué imprime?
 * var x = "dentro";
 * console.log(x); // ¿Qué imprime?
 * }
 * test(); 
 */

var x = "fuera";

console.log(x)
function test() {

    //Imprime undefined
    console.log(x);

    var x = "dentro";

    //Imprime el "dentro"
    console.log(x);
}
test();


/**
 * En este ejercicio analicé la intersección entre el
 * Hoisting y el Scope de Función (Alcance
 * Funcional). Aprendí que las variables declaradas
 * con var tienen un alcance limitado estrictamente
 * al cuerpo de la función donde fueron creadas,
 * ignorando los bloques tradicionales como if o
 * while.
 * 
 * Comprendí que cuando re-declaramos una variable
 * con el mismo nombre dentro de una función, la
 * declaración local sufre hoisting hacia el inicio
 * de dicha función, inicializándose como undefined y
 * ocultando por completo a la variable global
 * externa. Este fenómeno, conocido como variable
 * shadowing, explica por qué el primer llamado
 * interno no logra acceder al valor 'fuera',
 * reforzando la necesidad de comprender el ciclo de
 * compilación del lenguaje.
 */


'use strict'
let x = "fuera";

function test() {
    console.log(x); // ¿Qué pasará aquí con 'let'?
    let x = "dentro";
    console.log(x);
}
test();
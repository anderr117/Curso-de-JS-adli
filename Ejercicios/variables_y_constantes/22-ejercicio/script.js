'use strict'

if (true) {
var variableVar = "soy var";
let variableLet = "soy let";
}
console.log(variableVar); // ¿Qué imprime? - imprime soy var
console.log(variableLet); // ¿Qué imprime? - imprime Uncaught ReferenceError: variableLet is not defined
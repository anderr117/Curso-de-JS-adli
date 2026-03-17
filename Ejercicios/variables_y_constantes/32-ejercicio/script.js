'use strict'

var x = 10;
function test() {
    var x = 20;
    if (true) {
        var x = 30;
        console.log(x); // ¿Qué imprime? - Imprime 30

    }
    console.log(x); // ¿Qué imprime? - Imprime 30
}
test();
console.log(x); // ¿Qué imprime? - 10

/**
 * A diferencia de let y const, las variables declaradas con var
 * ignoran los bloques como el if o el for. Solo respetan el alcance de las funciones
 * Dentro del id: Cuando hago var x = 30, no estoy creando una variable nueva para ese bloque, estoy sobreescribiendo
 * la x que declaré al principio de la función test.
 * 
 * Segundo console.log, por eso cuando salgo del if, la x de la función ya vale 30.
 * El valor 20 se perdió
 * 
 * Fuera de la función, el ultimo imprime 10 porque la x de afuera está protegida por el muro de la función test.
 */
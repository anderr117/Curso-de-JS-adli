'use strict'

/**
 * Ejercicio 26 
 * Crea una función que contenga otra función. La función interna debe acceder a una variable 
 * declarada en la función externa (Closure básico).
 */

function externa(){
    let estoyfuera = 'Estoy Fuera'
    function interna(){
        return estoyfuera;
    }
    console.log(interna());
}

console.log(externa());
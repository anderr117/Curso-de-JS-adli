'use strict'

/**
 * Ejercicio 37
 * Declara un array const con tres números. Crea una función agregarNumero que reciba un
 * número y lo agregue al array.
 */

const numeros = [1, 2, 3];

function agregarNumero(nuevoNumero){
    if (typeof nuevoNumero !== 'number'){
        console.log('Error: Debe agregar un numero')
    } else{
        numeros.push(nuevoNumero);
        return numeros;
    }
}

console.log(agregarNumero(4));
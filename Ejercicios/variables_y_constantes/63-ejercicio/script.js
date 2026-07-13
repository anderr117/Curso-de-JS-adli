'use strict'
/**
 * Ejercicio 63 (Número par o impar)
 * Declara una variable numero con cualquier entero. Usando el operador módulo (%),
 * determina si es par o impar y guarda el resultado en una variable esPar (booleano).
 */

let numero = 18;

let esPar = (numero % 2 === 0);

if(esPar){
    console.log(`${numero} es un número par.`)
}else{
    console.log(`${numero} es un numero impar.`);
}

console.log(`¿La variable esPar es booleanda? ${typeof esPar}`)
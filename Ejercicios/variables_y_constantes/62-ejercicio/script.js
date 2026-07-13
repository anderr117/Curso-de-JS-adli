'use strict'

/**
 * Ejercicio 62 (Máximo de 3 números)
 * Declara tres variables num1, num2, num3 con valores diferentes. Usando solo
 * comparaciones, determina cuál es el mayor.
 */

let num1 = 2;
let num2 = 15;
let num3 = 9;

function numeroMayor(){

    let mayor;

    if(num1 >= num2 && num1 >= num3){
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3){
        mayor = num2;
    } else{
        mayor = num3;
    }

    console.log(`El numero mayor entre ${num1}, ${num2} y ${num3} es: ${mayor}`);

    
    // const maximo = Math.max(num1, num2, num3);
    // console.log(maximo);
}

numeroMayor();



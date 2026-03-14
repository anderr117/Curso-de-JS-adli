'use strict'


/*Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario */


let numero1, numero2;

do {
    numero1 = parseInt(prompt('Ingrese el primer número', 0));
    numero2 = parseInt(prompt('Ingrese el segundo número', 0));
} while(isNaN(numero1) || isNaN(numero2));

document.write('<h1>Del ' + numero1 + ' al ' + numero2 + ' están estos números:</h1>');

if (numero1 <= numero2) {
    for (let i = numero1; i <= numero2; i++) {
        document.write(i + '<br>');
    }
} else {
    for (let i = numero1; i >= numero2; i--) {
        document.write(i + '<br>');
    }
}



// let numero1 = parseInt(prompt("Ingrese el primer numero", 0));
// let numero2 = parseInt(prompt("Ingrese el segundo numero", 0));

// let inicio = Math.min(numero1, numero2);
// let fin = Math.max(numero1, numero2);

// let contador = 0;

// console.log(`Numeros entre ${inicio} y ${fin}: `);

// for (let i = inicio + 1; i < fin; i++){
//     console.log(i);
//     contador++
// }

// console.log('Total de numeros encontrados ' + contador);
'use strict'

//Mostrar todos los numeros impares entre dos numeros introducidos por el usuario


let num1, num2;

do {
    num1 = parseInt(prompt('Ingrese el primer número', 0));
    num2 = parseInt(prompt('Ingrese el segundo número', 0));
} while (isNaN(num1) || isNaN(num2));

document.write('<h3>Los números impares y pares entre ' + num1 + ' y ' + num2 + ' son:</h3>');

if (num1 <= num2) {
    for (let i = num1; i <= num2; i++) {
        if (i % 2 !== 0) {
            document.write(i + 'Numero impar' + '<br>');
        } else {
            document.write(i + 'Numero par' + '<br>')
        }
    }
} else {
    for (let i = num1; i >= num2; i--) {
        if (i % 2 !== 0) {
            document.write(i + 'Numero impar' + '<br>');
        } else {
            document.write(i + 'Numero par' + '<br>')
        }
    }
}


// let num1, num2;

// do {
//     num1 = parseInt(prompt('Ingrese el primer número', 0));
//     num2 = parseInt(prompt('Ingrese el segundo número', 0));
// } while(isNaN(num1) || isNaN(num2));

// document.write('<h3>Los números impares entre ' + num1 + ' y ' + num2 + ' son:</h3>');

// if (num1 <= num2) {
//     for (let i = num1; i <= num2; i++) {
//         if (i % 2 !== 0) {
//             document.write(i + '<br>');
//         }
//     }
// } else {
//     for (let i = num1; i >= num2; i--) {
//         if (i % 2 !== 0) {
//             document.write(i + '<br>');
//         }
//     }
// }
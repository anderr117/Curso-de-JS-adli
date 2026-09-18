'use strict'

/**
 * Ejercicio 20
 * Calcula el resto de dividir 29 entre 5. ¿Qué número obtienes?
 */

function calcularResto(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Error: Debe ser un número');
        return;
    }

    let cociente = num1 / num2;
    let residuo = num1 % num2;

    return `El resultado de la división de ${num1} entre ${num2} es: ${cociente} \ny el residuo es ${residuo}`;
}

let resultado = calcularResto(29, 5);

if (resultado !== undefined) {
    console.log(resultado);
}


// function division(num1, num2) {
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         console.log('Error: Debe ser un numero');
//         return;
//     }

//     let division = num1 / num2;
    
//     let divisionEntero = parseInt(division)

//     let residuo =  num1 - (num2 * divisionEntero);

//     return `El resulado de la división de ${num1}  entre ${num2} es: ${division} \ny el residuo es ${residuo}`

// }

// let resultado = division(29, 5);


// if (resultado !== undefined) {
//     console.log(`${resultado}`);
// }
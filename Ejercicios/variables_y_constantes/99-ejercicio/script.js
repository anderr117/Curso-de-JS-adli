'use strict'

/**
 * Ejercicio 99 (Simulación de bloque con let)
 * Demuestra cómo let en un bucle for crea un nuevo ámbito en cada iteración, mientras
 * que var no. Usa setTimeout para evidenciarlo.
 */


function probarBucleConVar() {
    console.log('--- Arrancando bucle con VAR ---');
    for (var i = 1; i <= 3; i++) {
        setTimeout(() => {
            console.log(`Var dice que i vale: ${i}`);
        }, 1000);
    }
}

function probarBucleConLet() {
    console.log('--- Arrancando bucle con LET ---');
    for (let i = 1; i <= 3; i++) {
        setTimeout(() => {
            console.log(`Let dice que i vale: ${i}`);
        }, 1000);
    }
}

probarBucleConVar();

setTimeout(probarBucleConLet, 2000);



// function SimulaciónBloque(number) {

//     if (number <= 20) {
//         setTimeout(() => {
//             for (let i = 1; i < number; i++) {
//                 let resultado = i + number;
//                 console.log(`Mostrando en consola después de 3 segundos: `, resultado);
//             }
//         }, 3000)
//     }

//     if (number >= 21) {
//         setTimeout(() => {
//             for (var i = 1; i < number; i++) {
//                 let resultado = i + number;
//                 console.log('Mostrando en consola después de 2 segundos: ', resultado)
//             }
//         }, 2000);
//     }

// }

// SimulaciónBloque(10)
// console.log('----------------')
// SimulaciónBloque(21)
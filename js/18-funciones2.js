'use strict'

//Funciones dentro de otra función

// function calculadora(num1, num2, mostrar=false){
//     var resultado = num1+num2;

//     if(mostrar){
//         pantalla(resultado);
//     }else{
//         consola(resultado);
//     }
// }


// function pantalla(resultado){
//     document.write(resultado)
// }

// function consola(resultado){
//     console.log(resultado)
// }

// calculadora(2,7, true);



/**PARAMETROS DE TIPO REST Y SPREAD */

//REST (...)

function animales(animal1, animal2, ...resto){
    console.log('animal1: '+animal1);
    console.log('animal2: '+animal2);
    console.log('resto: '+resto);
}


// animales('leon', 'elefante', 'rinoceronte', 'cabra', 'aguila')

//SPREAD

var animales2 = ['delfin', 'tiburon'];

animales(...animales2, 'tortuga', 'camaleon', 'loro')

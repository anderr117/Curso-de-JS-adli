'use strict'

/**Las funcines de callback
 * Son funcines que se psan como argumentos (parametros)
 * no llevan nombre por eso lo de anonimas y
 * se ejecutan después de qu cierto
 * proceso o tarea se complete
 */


function sumame(number1, number2, sumaYmuestra, sumaPorDos, callback) {
    var suma = number1 + number2;
    sumaYmuestra(suma);
    sumaPorDos(suma);
    //Sin parametro
    callback();
}

//CALLBACK
// sumame(4, 6, function (dato) {
//     console.log('La suma es: ', dato);
// },
//     function (dato) {
//         console.log('La suma por dos es: ', (dato * 2));
//     }
// )


//Funciones FLECHA puedo agregar los callback de esta forma:
sumame(4,6, dato=>{
    console.log('La suma es: ', dato)
}, dato=>{
        console.log('La suma por dos es: ', (dato*2));
    }, //Sin parametro
    () =>{
        console.log('Sin parametro')
    }
)
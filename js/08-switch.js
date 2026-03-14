'use strict'

/**Switch es una estructura de control que permite ejecutar diferentes casos según el valor de una expresión o variable */

var edad = 18;
var imprime = '';

switch(edad){
    case 18:
        imprime = 'Acabas de cumplir la mayoría de edad'
        break;
    case 25:
        imprime = 'Ya eres un adulto'
        break;
    case 40:
        imprime = 'La crisis de los 40'
        break;
    case 75:
        imprime = 'Eres ya un anciano'
        break;
    default:
        imprime = 'Tu edad es neutra'
        break;
}

console.log(imprime)
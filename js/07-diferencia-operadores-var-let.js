'use strict'

var numero = 12

if (numero === '12'){
    console.log('Pasa');
}

//Pruebas con let-var

//Pruebas var
var numero = 40;
console.log(numero)

if (true){
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); //valor 50

//Pruab con let
var texto='Curso js con adrian lisciotti'
console.log(texto);

/**La diferencia es que con var definimos una variable global y con let a nivel de bloque */
if (true){
    let texto='Maste de desarrollo web con adrian lisciotti';
    console.log(texto);
}

console.log(texto);
'use strict'

function holamundo(texto){
    var hola_mundo = 'hola';

    console.log(texto);
    console.log(hola_mundo);
    console.log(numero)
}

var texto = 'Hola soy una variable global';
var numero = 25;

//da error porque se declaró dentro de la funcion y solo se puede usar en esa funcion
// console.log(hola_mundo)

holamundo(texto)
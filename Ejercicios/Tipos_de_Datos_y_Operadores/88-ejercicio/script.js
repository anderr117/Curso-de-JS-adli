'use strict';

/**
 * Ejercicio 88
 * Comprueba si " " (espacio) es falsy o truthy.
 */

function comprobacion(valor){

    if(valor){
        return `El valor ${valor} Es truthy`;
    }else{
        return es `El valor ${valor} es Falsy`;
    }


}


let resultado = comprobacion(" "); //Devuelve Truthy
console.log(resultado);
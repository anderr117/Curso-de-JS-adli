'use strict'

/**
 * Ejercicio 25
 * Calcula el área de un rectángulo de base 5 y altura 8.
 */

function areaRectangulo(base, altura){
    if(typeof base !== 'number' || typeof altura !== 'number'){
        console.log(`Error: Debe ser un numero`);
        return;
    }

    return base * altura

}

let resultado = areaRectangulo(5,8);

if(resultado !== undefined){
    console.log(`El área del rectangulo es ${resultado}`);
}
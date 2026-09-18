'use strict';

/**
 * Ejercicio 43
 * Compara null == undefined y null === undefined. Explica.
 * null y undefined son valores primitivos que representan la ausencia de valor o datos
 * pero undefined singifica que una variable no tiene valor porque no se ha inicializado
 * null representa una ausencia de valor asignada a proposito por el programador
 */

function comparacionNull(){

    //El valor es nada, ausencia de valor, por lo que nos da true
    console.log('null == undefined', null == undefined);

    /**
     * Ambos no tienen valor pero la diferencia es que null es a proposito 
     * y undefines es porque la variable no se ha inicializado y por lo tanto no tiene valor,
     * son diferentes por lo que nos da false.
     */
    console.log('null === undefined', null === undefined);
}

comparacionNull();
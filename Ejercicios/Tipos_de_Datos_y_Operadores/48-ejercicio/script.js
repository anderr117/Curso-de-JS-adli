'use strict';

/**
 * Ejercicio 48
 * Comprueba si NaN == NaN. ¿Qué resultado obtienes? ¿Por qué tiene sentido?
 */

/**
 * NaN -> Not a Number
 * Da false, porque NaN == NaN o NaN === NaN siempre es false
 * porque representa un valor "no numerico" y por definición un valor
 * indeterminado nunca puede ser igual a otro valor indeterminado,
 * ni siquiera a sí mismo, js sigue la especificación IEEE-754
 * cualquier comparación con NaN devuleve false.
 */

if(NaN == NaN){
    console.log('Se cumple la condición', NaN == NaN);
}else{
    console.log('No se cumple la condición');
}
'use strict'

/**
 * Ejercicio 9
 * ¿Qué tipo tiene una función? Ejemplo: typeof function(){}
 */

console.log(typeof function(){}) // Una funcion es de tipo function

/**
 * En JavaScript, el tipo de dato de una función es "function" 
 * (devuelto por el operador typeof). Sin embargo, estructuralmente, las funciones son objetos.
 * ¿Por qué ocurre esto?Son objetos especiales: En JavaScript, las funciones son un subtipo del 
 * tipo general de objetos. La principal diferencia es que son invocables (pueden ser ejecutadas 
 * usando paréntesis ()).Son objetos de primera clase: Esto significa que puedes tratar una función
 *  exactamente igual que a cualquier otro valor. Puedes asignarla a una variable, pasarla como argumento a
 * otra función o devolverla desde otra función.
*/
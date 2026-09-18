'use strict';

/**
 * Ejercicio 41
 * Compara 5 == "5" y 5 === "5". Explica la diferencia.
 * 
 * 5 == "5"
 * Es considerado una comparación débil porque solo el valor y no el tipo.
 * 
 * 5 === "5"
 * Es una comparación fuerte porque compara tipo y valor.
 */

if(5 === "5"){
    console.log('verdadero'); // si quitamos un = de los === da verdadero.
}else{
    console.log('falso'); // si mantenemos los tres === da falso.
}

// function compararValores() {
//     console.log('5 == "5" es:', 5 == "5");   // Imprime: true

//     console.log('5 === "5" es:', 5 === "5"); // Imprime: false
// }

// compararValores();
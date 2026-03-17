'use strict'

/**
 * 
 */

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // ¿Qué imprime? - 0 1 2
    }, 1000);
}
//Sin ejecutar: ¿qué imprime y por qué ? imprime del 0 al 2 después de un segundo
/**
 * Imprime del 0 al 1 porque se inicializa la variable i en 0,
 * además la condición dice que debe ser menor que 3
 * Se imprimen después de 1 segundo porque así lo indica setTimeout
 */
'use strict'

/**
 * Ejercicio 96 (Closure para contador privado)
 * Crea una función crearContador() que devuelva un objeto con
 * métodos incrementar, decrementar y getValor. La variable del contador debe ser privada (no
 * accesible directamente).
 */

function crearContador() {
    // Esta variable es PRIVADA. No se puede leer ni modificar desde fuera de la función.
    let contador = 0;

    // Retornamos el objeto con los métodos que "recuerdan" el scope de esta función (Closure)
    return {
        incrementar: function () {
            contador++; // Suma exactamente 1 cada vez que se ejecuta
            console.log(`Contador incrementado.`);
        },

        decrementar: function () {
            contador--; // Resta exactamente 1 cada vez que se ejecuta
            console.log(`Contador decrementado.`);
        },

        getValor: function () {
            // Retorna o muestra directamente el valor actual de la variable privada
            console.log(`El valor actual del contador es: ${contador}`);
            return contador;
        }
    };
}


const miContador = crearContador();

miContador.getValor();      // Imprime: 0
miContador.incrementar();   // Sube a 1
miContador.incrementar();   // Sube a 2
miContador.getValor();      // Imprime: 2

miContador.decrementar();   // Baja a 1
miContador.getValor();      // Imprime: 1

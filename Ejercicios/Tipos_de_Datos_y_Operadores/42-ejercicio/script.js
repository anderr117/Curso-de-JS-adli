'use strict'

/**
 * Ejercicio 42
 * Compara 0 == false y 0 === false. ¿Por qué dan resultados diferentes?
 */

function demostrarCoercionBoolean() {
    // Igualdad débil (==): 'false' se convierte automáticamente al número 0 -> (0 == 0)
    console.log('0 == false  ->', 0 == false);   // Imprime: true

    // Igualdad estricta (===): Compara tipo (number vs boolean) y valor sin convertir nada
    console.log('0 === false ->', 0 === false);  // Imprime: false
}

demostrarCoercionBoolean();
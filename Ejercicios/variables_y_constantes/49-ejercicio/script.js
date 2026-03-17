'use strict'

/**
 * Ejercicio 49
 * Declara una constante MAX_INTENTOS = 3. Luego, en un bucle, usa esta constante como
 * límite.
 */

const MAX_INTENTOS = 3;

for (let i = 1; i <= MAX_INTENTOS; i++) {
    console.log(`Intento número ${i} de ${MAX_INTENTOS}`);

    if (i === MAX_INTENTOS) {
        console.log("Has alcanzado el límite máximo de intentos.");
    }
}
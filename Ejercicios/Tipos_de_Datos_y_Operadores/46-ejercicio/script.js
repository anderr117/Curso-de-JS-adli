'use strict';

/**
 * Ejercicio 46
 * ¿Qué da "2" > "12"? (string "2" vs string "12"). Piensa: comparación lexicográfica.
 */


/**
 * Es true porque js compara caracter por caracter, 2 > 1 si, usando el caracter Unicode de cada uno
 * como 2 -> código unicode 50 y 1 > código 49
 * Al cumplirse la condición js ya no avanza con el siguiente caracter
 */

function comparacionLexicografica() {
    // Comparación entre strings (orden lexicográfico / de diccionario)
    // Se compara '2' (Unicode 50) contra '1' (Unicode 49) -> 50 > 49 es true
    console.log('"2" > "12" (Strings):', "2" > "12"); // Imprime: true

    // Contraste: Comparación entre números (orden numérico real)
    console.log(' 2  >  12  (Números):', 2 > 12);   // Imprime: false
}

comparacionLexicografica();
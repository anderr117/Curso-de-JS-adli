'use strict';

/**
 * Ejercicio 37
 * Declara let texto = "Hola ". Usa += para concatenar "Mundo".
 */

function concatenarTexto(mensaje) {
    if (typeof mensaje !== 'string') {
        console.log('Error: Debe ser texto');
        return;
    }

    let texto = 'Hola ';
    texto += mensaje;

    return texto;
}

let resultado = concatenarTexto('Mundo');

if (resultado !== undefined) {
    console.log(`El resultado de concatenar texto: ${resultado}`);
}
'use strict';

/**
 * Ejercicio 83
 * Convierte "123abc" a número. ¿Qué obtienes?
 */

function conversionTextoInvalido(texto) {
    if (typeof texto !== 'string') {
        return 'Error: Debe ser texto';
    }

    // Number() intenta convertir la cadena completa -> falla y devuelve NaN (Not a Number);
    const convEstricta = Number(texto);

    // parseInt() lee dígitos de izquierda a derecha -> extrae el 123
    const convParcial = parseInt(texto, 10);

    return `Texto procesado: "${texto}"
- Con Number()   : ${convEstricta} (${typeof convEstricta})
- Con parseInt() : ${convParcial} (${typeof convParcial})`;
}

const resultado = conversionTextoInvalido('123abc');
console.log(resultado);
'use strict';

/**
 * Ejercicio 72
 * Ternario para determinar si un año es bisiesto.
 */

'use strict';

function esBisiesto(anio) {

    if (typeof anio !== 'number' || !Number.isInteger(anio)) {
        return 'Error: Debe ser un numero entero';
    }

    const resultado =
        (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)
            ? `${anio} es bisiesto`
            : `${anio} no es bisiesto`;

    return resultado;
}

console.log(esBisiesto(2027));

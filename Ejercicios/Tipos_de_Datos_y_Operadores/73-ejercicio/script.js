'use strict';

/**
 * Ejercicio 73
 * Asigna a tipoCambio "EUR" si moneda es "€", "USD" si es "$", "GBP" si es "£", y "desconocida"
 * por defecto.
 */

function obtenerTipoCambio(moneda) {
    if (typeof moneda !== 'string') {
        return 'Error: Debe ser texto';
    }

    const tipoCambio = moneda === '€' ? 'EUR'
        : moneda === '$' ? 'USD'
            : moneda === '£' ? 'GBP'
                : 'desconocida';

    return tipoCambio === 'desconocida'
        ? `Moneda ${tipoCambio}`
        : `${moneda} es ${tipoCambio}`;
}


console.log(obtenerTipoCambio('€'));
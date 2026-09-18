'use strict';

/***
 * Ejercicio 74
 * Ternario para validar si un email tiene '@'.
 */

'use strict';

function validaSiEsEmail(email) {

    if (typeof email !== 'string') {
        return 'Error: Debe ser texto';
    }

    const esEmailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validarEmail = esEmailValido
        ? `${email} es un email válido`
        : `${email} no es un email válido`;

    return validarEmail;
}

console.log(validaSiEsEmail('s@ssd.com'));

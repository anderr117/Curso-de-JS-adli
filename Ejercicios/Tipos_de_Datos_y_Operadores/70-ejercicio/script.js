'use strict';

/**
 * Ejercicio 70
 * Asigna a saludo "Buenos días" si es antes de las 12, "Buenas tardes" si es entre 12 y 20,
 * "Buenas noches" si es después.
 */

function saludo(horaManual) {
    // Si no enviamos una hora manual, toma la hora actual del sistema (0-23)
    const hora = horaManual !== undefined ? horaManual : new Date().getHours();

    const resultado = hora < 12 ? 'Buenos días'
        : hora < 20 ? 'Buenas tardes'
            : 'Buenas noches';

    return resultado;
}

console.log('Hora actual:', saludo());


console.log('A las 9 AM :', saludo(9));
console.log('A las 3 PM :', saludo(15));
console.log('A las 10 PM:', saludo(22));
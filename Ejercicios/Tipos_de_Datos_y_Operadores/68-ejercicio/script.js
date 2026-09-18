'use strict';

/**
 * Ejercicio 68
 * Ternario anidado: clasifica una nota en "Suspenso" (<5), "Aprobado" (5-7), "Notable" (7-9),
 * "Sobresaliente" (>=9).
 */

function clasificacionNotas(nota) {
    if (typeof nota !== 'number' || nota < 0 || nota > 10) {
        return 'Error: La nota debe ser un número entre 0 y 10';
    }

    const resultado = nota < 5 ? 'Suspenso'
        : nota < 7 ? 'Aprobado'
            : nota < 9 ? 'Notable'
                : 'Sobresaliente';

    return `${resultado} con ${nota} puntos`;
}

console.log(clasificacionNotas(4));
console.log(clasificacionNotas(6));
console.log(clasificacionNotas(8));
console.log(clasificacionNotas(10));
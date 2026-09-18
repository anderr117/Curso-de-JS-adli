'use strict';

/**
 * Ejercicio 96 (Calculadora de propina avanzada)
 * Declara cuenta = 100, calidad = "buena". Usa un objeto propinas = {mala: 0.1, regular: 0.15,
 * buena: 0.2, excelente: 0.25}. Calcula la propina usando el valor del objeto y operadores. Si la
 * calidad no existe, usa 0.1 por defecto.
 */

'use strict';

const propinas = {
    mala: 0.1,
    regular: 0.15,
    buena: 0.2,
    excelente: 0.25,
};

const cuenta = 100;

const operaciones = {
    mala: () => cuenta * propinas.mala,
    regular: () => cuenta * propinas.regular,
    buena: () => cuenta * propinas.buena,
    excelente: () => cuenta * propinas.excelente
};

function calcularPropina(calidad) {

    if (propinas.hasOwnProperty(calidad)) {
        return operaciones[calidad]();
    } else {
        return cuenta * propinas.mala;
    }
}

const calidad = 'buena';

console.log(calcularPropina(calidad));

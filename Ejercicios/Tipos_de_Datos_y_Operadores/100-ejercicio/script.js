/**
 * Ejercicio 100 (Mini-calculadora con tipos)
 * Crea una función operar que reciba a, b y operacion ("suma", "resta", "multiplica", "divide").
 * Asegúrate de:
 * 1. Convertir a y b a números si son strings numéricos
 * 2. Si algún valor no es número válido, devolver "Error: tipo inválido"
 * 3. Realizar la operación correspondiente
 * 4. Manejar división entre 0
 */


function operar(a, b, operacion) {

    const regexNumerico = /^[0-9]+(\.[0-9]+)?$/;

    if (typeof a === "string" && regexNumerico.test(a.trim())) {
        a = Number(a);
    }

    if (typeof b === "string" && regexNumerico.test(b.trim())) {
        b = Number(b);
    }


    if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
        return "Error: tipo inválido";
    }


    if (operacion === "divide" && b === 0) {
        return "Error: división entre 0";
    }

    switch (operacion) {
        case "suma":
            return a + b;

        case "resta":
            return a - b;

        case "multiplica":
            return a * b;

        case "divide":
            return a / b;

        default:
            return "Error: operación inválida";
    }
}


let resultado = operar(10, 20, 'multiplica');
console.log(resultado);
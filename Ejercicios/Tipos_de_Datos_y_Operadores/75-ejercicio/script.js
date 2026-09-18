'use strict';

/**
 * Ejercicio 75
 * Compara ternario vs if-else: ¿cuándo usar cada uno?
 */

function verificarAcceso(nombre, edad) {
    // 1. Usamos if-else para validación de tipo y flujo de control (acciones)
    if (typeof nombre !== 'string' || typeof edad !== 'number' || edad < 0) {
        return 'Error: Datos de entrada no válidos';
    }

    console.log(`Verificación iniciada para "${nombre}"...`);

    // 2. Usamos ternario para una asignación limpia de valor según condición simple
    const mensaje = edad >= 18
        ? `Puede seguir, ${nombre} tiene ${edad} años y es mayor de edad.`
        : `${nombre} tiene ${edad} años, es menor de edad y no puede seguir.`;

    return mensaje;
}

console.log(verificarAcceso('Pedro', 19));

/**
 * ¿Solo vas a asignar una variable o retornar un texto según una condición simple? Usa Ternario.
 * ¿Tienes varias líneas de código dentro de las ramas, o más de dos caminos (else if)? Usa if-else.
 */
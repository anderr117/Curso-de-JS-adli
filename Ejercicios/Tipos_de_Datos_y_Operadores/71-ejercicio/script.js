'use strict';

/**
 * Ejercicio 71
 * Usa ternario para elegir entre dos colores según el tema.
 */

function elegirColorPorTema(tema) {
    const temaNormalizado = typeof tema === 'string' ? tema.toLowerCase() : '';

    if (temaNormalizado !== 'claro' && temaNormalizado !== 'oscuro') {
        return 'Error: Debe elegir entre un tema "Claro" u "Oscuro"';
    }

    const color = temaNormalizado === 'claro' ? 'Blanco' : 'Negro';

    return `Tema seleccionado: ${tema} -> Color asignado: ${color}`;
}

// Pruebas
console.log(elegirColorPorTema('Oscuro'));
console.log(elegirColorPorTema('claro'));
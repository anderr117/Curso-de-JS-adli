'use strict'

/**Ejercicio 70 (Media de calificaciones)
 * Declara tres variables nota1, nota2, nota3.
 * Calcula la media y guarda en media. Luego,
 * determina si está aprobado (media >= 5) y guarda en aprobado. */


function mediaCalificaciones(nota1, nota2, nota3) {
    let media;
    let aprobado;

    if (typeof nota1 === 'number' && typeof nota2 === 'number' && typeof nota3 === 'number') {
        
        media = (nota1 + nota2 + nota3) / 3;

        aprobado = media >= 5;

        console.log(`La media es: ${media.toFixed(2)}`);
        
        if (aprobado) {
            console.log("Estado: APROBADO");
        } else {
            console.log("Estado: SUSPENDIDO");
        }

    } else {
        console.error('Error: Todos los argumentos deben ser números.');
    }
}

mediaCalificaciones(5, 6, 3);

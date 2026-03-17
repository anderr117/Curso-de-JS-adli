'use strict'

/**
 * Ejercicio 34
 * Crea un escenario donde una variable let dentro de un bloque if NO sea accesible fuera, pero
 * una variable var SÍ lo sea.
 */

function prueba() {
    if (true) {
        let nombre = 'Scott'; // Vive solo dentro de este IF que cree
        var apellido = 'Macoll'; // Se "escapa" del IF y vive en toda la función

        console.log("Dentro del IF funciona:", nombre, apellido);
    }

    // Fuera del IF, pero dentro de la función
    console.log("Apellido (con var) funciona:", apellido);
    console.log("Nombre (con let) dará ERROR:", nombre);
}

prueba();
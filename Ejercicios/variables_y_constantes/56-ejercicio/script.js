'use strict'

/**
 * Ejercicio 56
 * Crea un ejemplo donde un mal nombre de variable haga el código difícil de entender. Luego
 * refactorízalo con buenos nombres.
 */

//Ejemplo malo

// ¿Qué hace esto? ¿Quién es 'x'? ¿Por qué paramos en 'd'? - esto esta mal
let d = 5;
let x = 0;

for (let i = 1; i <= d; i++) {
    x += 10;
    console.log("Status: " + x);
}

//Refactorizado
// nombrando correctamente las variables - Ahora queda claro: es un sistema de carga de batería
const MAX_NIVEL_CARGA = 5;
let porcentajeBateria = 0;

for (let intentoCarga = 1; intentoCarga <= MAX_NIVEL_CARGA; intentoCarga++) {
    porcentajeBateria += 20;
    console.log(`Cargando... ${porcentajeBateria}%`);
}
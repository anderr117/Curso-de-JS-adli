'use strict'

/**
 * Ejercicio 74 (Juego de vidas)
 * Declara let vidas = 3. Crea funciones perderVida y ganarVida que modifiquen el contador, sin
 * pasar de cierto límite ni bajar de 0.
 */

'use strict'

/**
 * Ejercicio 74 (Juego de vidas)
 */

let vidas = 3;
const MAX_VIDAS = 5;
const MIN_VIDAS = 0;

function perderVida() {
    if (vidas > MIN_VIDAS) {
        vidas--;
        console.log(`¡Ouch! Perdiste una vida. Te quedan: ${vidas}`);
    } else {
        console.log("GAME OVER: No te quedan más vidas.");
    }
}

function ganarVida() {
    if (vidas < MAX_VIDAS) {
        vidas++;
        console.log(`¡Genial! Ganaste una vida. Tienes: ${vidas}`);
    } else {
        console.log("Máximo de vidas alcanzado. ¡Estás a tope!");
    }
}

perderVida(); // 2
perderVida(); // 1
perderVida(); // 0
perderVida(); // Mensaje de Game Over

ganarVida();  // 1

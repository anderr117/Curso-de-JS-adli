'use strict';

/**
 * Ejercicio 65
 * ¿Qué devuelve 0 || "default"? (Patrón común para valores por defecto)
 */

function comparacionOrDefault() {
    // 0 es un valor falsy. El operador || pasa al segundo operando y devuelve "default".
    console.log('0 || "default" -> nos da:', 0 || "default"); // Imprime: "default"
}

comparacionOrDefault();
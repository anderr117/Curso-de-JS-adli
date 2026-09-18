'use strict';

/**
 * Ejercicio 78
 * Convierte cualquier valor a booleano usando !!.
 */

function conversionBooleana(valor) {
    // La doble negación fuerza la conversión directa a booleano
    const convertir = !!valor;

    return `El valor "${valor}" se convierte a: ${convertir} (${typeof convertir})`;
}

// Pruebas con valores truthy y falsy
console.log(conversionBooleana('hola'));
console.log(conversionBooleana(0));
console.log(conversionBooleana(null));
console.log(conversionBooleana(undefined));

/**
 * truthy y falsy NO son valores booleanos reales.
 * Son categorías que indican si un valor se comporta 
 * como true o como false cuando JavaScript lo convierte implícitamente a booleano.
 * true y false sí son booleanos reales del tipo boolean.
 * 
 * 
 * truthy / falsy → comportamiento lógico al convertir un valor a booleano.
 * true / false → valores booleanos auténticos.
 */

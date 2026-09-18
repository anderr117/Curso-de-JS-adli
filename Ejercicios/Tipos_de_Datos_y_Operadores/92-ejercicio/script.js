'use strict';

/**
 * Ejercicio 92
 * Comprueba si "0" es falsy.
 */

'use strict';

function comprobarCero(valor) {
    // La conversión implícita de 0 a booleano siempre da false
    if (valor) {
        return `El valor ${valor} es TRUTHY (tipo: ${typeof valor})`; //Imprime Truthy
    } else {
        return `El valor ${valor} es FALSY (Tipo: ${typeof valor})`; 
    }
}

// Pruebas comparativas con ceros
console.log(comprobarCero("0"));  // TRUTHY (¡Cuidado! Una cadena con "0" no está vacía)
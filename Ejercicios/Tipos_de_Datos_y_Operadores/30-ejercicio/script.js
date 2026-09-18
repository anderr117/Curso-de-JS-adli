'use strict'

/**
 * Ejercicio 30
 * Calcula la media de 7, 12, 5, 9 y 2.
 */

'use strict'

function mediaCalculo(...numeros){
    if (!numeros.every(num => typeof num === 'number')) {
        console.log('Error: Todos los valores deben ser números');
        return;
    }

    let totalidad = numeros.reduce((total, num) => total + num, 0);
    let longitud = numeros.length;

    return totalidad / longitud;
}

let resultado = mediaCalculo(7, 12, 5, 9, 12);

if (resultado !== undefined) {
    console.log(`El promedio o media es: ${resultado}`);
}

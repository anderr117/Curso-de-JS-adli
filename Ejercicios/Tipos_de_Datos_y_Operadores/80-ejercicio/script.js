'use strict';

/**
 * Ejercicio 80
 * Convierte null a número. ¿Qué obtienes?
 */

function conversion(valor) {

    //Cuando ocurre una coersión null se convierte a número como 0
    const convUno = Number(valor);
    const convDos = +valor;
    const convTres = valor * 1;
    const convCuatro = valor - 0;

    return `Valor procesado: ${valor}
- Number(null) : ${convUno} (${typeof convUno})
- +null        : ${convDos}
- null * 1     : ${convTres}
- null - 0     : ${convCuatro}`;
}

const resultado = conversion(null);
console.log(resultado);
'use strict'

/**Utilizar un bucle para calcular la suma y la media de los numero introducidos
 * hasta introducir un numero negativo y ahi mostrar el resultado
 */


let suma = 0;
let contador = 0;
let media = 0;

do{
    let numero = parseInt(prompt('Introduce numeros hasta que introduzcas uno negativo', 0));

    if(isNaN(numero)){
        numero = 0;
    } else if(numero >=0){
        suma = suma + numero;
        contador++;
    }

} while(numero >= 0)

    media = suma/contador;
    console.log('La suma es: '+suma);
    console.log('la media es: '+media);//La suma de los numeros ingresado dividido la cantidad
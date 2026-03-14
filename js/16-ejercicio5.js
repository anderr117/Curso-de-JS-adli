'use strict'

//Muestra todos los numeros divisores de un numero ingreado en prompt

let numero;

do {
    numero = parseInt(prompt('Ingrese el número para hallar sus divisores', 1));
} while (isNaN(numero));

document.write('<h3>Los divisores del número ' + numero + ' son:</h3>');

for(let i = 1; i <= numero; i++){
    if(numero % i === 0){
        document.write('Divisor ' + i + '<br>')
    }
}

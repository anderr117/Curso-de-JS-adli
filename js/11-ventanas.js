'use strict'
//ALERTAS
alert('Hola, estamos aprendiendo JS')
alert ('Estas es un ventana de alerta')

//CONFIRMACIÓN
confirm('¿Estas seguro de querer continuar?')

var mi_resultado = confirm('Estas seguro de continuar')
console.log(mi_resultado); /**si toco aceptar me devuelve true, cancelar false */

//INGRESO DATOS (Prompt siempre devuelve un string)

var resultado = prompt('¿Que edad tienes?', 25);
console.log(resultado);

/**Convertimos a numero entero */
var resultado1 = parseInt(prompt('¿Que edad tienes?', 25));
console.log(resultado1);
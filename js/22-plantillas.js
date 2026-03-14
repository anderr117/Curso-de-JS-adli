'use strict'

//Crear plantillas para interpolacion de variables


var nombre = prompt('ingresa tu nombre');
var apellido = prompt('ingresa tu apellido');

//Forma normal
// var texto = 'Mi nombre es '+nombre+'y mi apellido es '+apellido;


/**
 * Interpolación de variables
 * 
 * Es una tecnica para combinar cadenas
 * de texto con valores de
 * variables de manera elegante
 * sin necesidad de concatenarlas
 * utilizando plantillas literales
 */


var texto = `<h1>hola que tal</h1>
<h3>mi nombre es ${nombre}</h3>
<h3> mi apellido es ${apellido}</h3
`

document.write(texto)

'use strict'

/**
 * Ejercicio 38
 * Intenta hacer lo siguiente con un array const: miArray = [1, 2, 3]; luego miArray =
 * []; ¿Funciona? Explica.
 */

const miArray = [1, 2, 3];
miArray = [];

//No funciona porque es una constante

/**
 * cuando se declara const miArray = [1, 2, 3], JavaScript reserva un espacio en la memoria para ese 
 * array y hace que el nombre miArray apunte a esa dirección específica.
 */
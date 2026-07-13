'use strict'

/**
 * Ejercicio 89
 * Explica qué es la "Zona Muerta Temporal" (Temporal
 * Dead Zone - TDZ).
 */

/**
 * La zona muerta es un fenomeno que ocurre en js, 
 * cuando se declara una variable e intentamos
 * imprimir (o usar) la variable antes de que ocurra
 * la línea de su declaración. no mostrará 
 * el valor aunque js sabe que existe pero no puede
 * acceder a ella por estar en la TDZ.
 */


/**
 * La Zona Muerta Temporal (TDZ) es el espacio de
 * tiempo y código que va desde el inicio del bloque
 * (scope) donde se crea una variable con let o
 * const, hasta la línea exacta donde el motor de
 * JavaScript ejecuta su declaración e
 * inicialización. Durante este trayecto, la variable
 * no puede ser accedida y cualquier intento de
 * lectura lanzará un ReferenceError.
 */
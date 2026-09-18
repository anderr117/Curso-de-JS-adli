'use strict'

/**
 * Ejercicio 12
 * ¿Qué tipo tiene typeof typeof 42? (Pista: el primer typeof devuelve un string)
 */



console.log(typeof typeof 42) //Devuelve string

/**
 * Primera evaluación: El operador evalúa typeof 42. Como \(42\) es un valor numérico, 
 * el operador devuelve la cadena "number".Segunda evaluación: Ahora se ejecuta typeof 
 * "number". Como "number" es literalmente un texto (una cadena), el operador devuelve "string".
 */
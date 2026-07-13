'use strict'

/**
 * Ejercicio 88
 * Explica qué es hoisting con tus palabras.
 */

/**
 * El hoistin es un comportamiento que tienen
 * palabras reservadas de js epecificamente var, let
 * y const. Var, cuando se imprime el valor de una
 * variable no declarada al principio sino después 
 * nos dará undefined, aunque js sabe que existe 
 * no imprimirá su valor pero si dará undefines
 * en ves de un error de delaración.
 * Con let y const pasa algo diferente, si se
 * intenta imrpimir un valor de una variable
 * antes de ser declarada lo que va a pasar es que
 * js mostrará un error de definición de la variable, 
 * este error no es porque no exista ya que se declara despues
 * js sabe que existe pero esta está atrapada en lo que
 * se conoce como ZONA MUERTA TEMPORAL (TDZ).
 */
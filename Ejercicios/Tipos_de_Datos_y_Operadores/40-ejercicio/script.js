'use strict';

/**
 * Ejercicio 40
 * Demuestra la diferencia entre x = x + 5 y x += 5. Son equivalentes, pero ¿cuál es más concisa?
 * 
 * Explicación:
 * Ambas sintaxis son funcionalmente idénticas: ambas evalúan la suma y reasignan 
 * el resultado a la variable en una sola línea.
 * 
 * La diferencia es que `x += 5` es la forma más concisa y limpia, ya que evita tener 
 * que repetir el nombre de la variable a la derecha del signo igual.
 */

let x = 5;

// Forma explícita o tradicional (Reasigna x sumándole 5 -> x pasa a ser 10)
x = x + 5;
console.log(`x después de la suma tradicional: ${x}`);

// Forma concisa usando asignación compuesta (Reasigna x sumándole 5 -> x pasa a ser 15)
x += 5;
console.log(`x después de la asignación compuesta: ${x}`);
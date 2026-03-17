'use strict'

/***
 * Ejercicio 31 
 * Crea un objeto const llamado persona. Dentro de una función, intenta reasignar persona a un
 * nuevo objeto. Luego intenta modificar una propiedad de persona. ¿Cuál funciona?
 */

const persona = {
    miObjeto: 'objeto',
    fecha: '14/03/2025'
};

// este si funciona (Mutación)
persona.miObjeto = 'Hola'; 
console.log(persona.miObjeto); // Imprime: Hola

function intentarTodo(){
    // este da error (Reasignación)
    // El programa se detendrá aquí y no leerá nada más de la función
    persona = { nombre: 'Nuevo' }; 
}

intentarTodo();

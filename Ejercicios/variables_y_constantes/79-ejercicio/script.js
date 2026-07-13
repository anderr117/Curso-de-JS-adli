'use strict'
/**
 * Ejercicio 79 (Lista de tareas)
 * Declara const tareas = []. Crea funciones agregarTarea(texto) y completarTarea(indice).
 */


const tareas = [];

function agregarTarea(texto) {
    if (typeof texto !== 'string' || texto.trim() === "") {
        return console.error('Error: La tarea debe ser un texto válido.');
    }

    tareas.push(texto);
    console.log(`Tarea "${texto}" agregada.`);
    console.log('Lista actual de tareas:', tareas);
}

function completarTarea(indice) {
    if (typeof indice !== 'number') {
        return console.error('Error: El índice debe ser un número.');
    }

    
    if (indice < 0 || indice >= tareas.length) {
        console.error('Error: Índice de tarea no encontrado.');
        return;
    }

    const tareaEliminada = tareas.splice(indice, 1);
    
    console.log(`Tarea "${tareaEliminada}" completada y eliminada.`);
    console.log('Tareas restantes:', tareas);
}

agregarTarea('Hacer tareas de la U');
agregarTarea('Hacer pan');

completarTarea(0);
completarTarea(0);
'use strict'

/**
 * Ejercicio 84 (Pokemon - equipo)
 * Declara const equipoPokemon = []. Crea funciones agregarPokemon(nombre,
 * nivel) y liberarPokemon(nombre).
 */



const equipoPokemon = [];
const MAX_EQUIPO = 6;

function agregarPokemon(nombre, nivel) {
    if (typeof nombre !== 'string' || nombre.trim() === '') {
        return console.error('Error: El nombre debe ser un texto válido.');
    }
    if (typeof nivel !== 'number' || nivel <= 0) {
        return console.error('Error: El nivel debe ser un número mayor a 0.');
    }

    if (equipoPokemon.length >= MAX_EQUIPO) {
        return console.warn(`¡Tu equipo está lleno! Debes liberar un Pokémon antes de agregar a ${nombre}.`);
    }


    equipoPokemon.push({ nombre, nivel });
    
    console.log(`¡${nombre} (Nivel ${nivel}) se ha unido a tu equipo!`);
    console.log('Equipo actual:', equipoPokemon);
}

function liberarPokemon(nombre) {
    if (typeof nombre !== 'string') {
        return console.error('Error: El nombre debe ser texto.');
    }

    const indice = equipoPokemon.findIndex(pokemon => pokemon.nombre.toLowerCase() === nombre.toLowerCase());

    if (indice !== -1) {
        equipoPokemon.splice(indice, 1);
        console.log(`Bye-bye, ${nombre}. ¡Te hemos liberado con éxito!`);
        console.log('Equipo actualizado:', equipoPokemon);
    } else {
        console.warn(`No se encontró ningún Pokémon llamado "${nombre}" en el equipo.`);
    }
}

agregarPokemon('Pikachu', 5);
agregarPokemon('Charizard', 36);

liberarPokemon('pikachu');
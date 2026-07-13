'use strict'

/**
 * Ejercicio 97 (Singleton con const)
 * Usando una constante global, crea un objeto CONFIG que no pueda ser reemplazado, pero
 * tenga métodos para actualizar sus propiedades de forma controlada.
 */


const CONFIG = {
    nombreSocio: 'Alexis',
    versionApp: '1.0.0',

    actualizarNombre: function (nuevoNombre) {
        if (typeof nuevoNombre !== 'string' || nuevoNombre.trim() === '') {
            return console.error('Error: El nombre debe ser un texto válido.');
        }

        if (nuevoNombre.length <= 2) {
            return console.warn('Error: El nombre es demasiado corto (mínimo 3 caracteres).');
        }

        this.nombreSocio = nuevoNombre;
        console.log(`Nombre actualizado con éxito a: ${this.nombreSocio}`);
    }
};

// ---- PRUEBAS DEL SINGLETON ----

console.log('Estado inicial:', CONFIG);


CONFIG.actualizarNombre('Pablo'); 
CONFIG.actualizarNombre('Pe'); // Da error por ser muy corto

console.log('Estado final:', CONFIG); 

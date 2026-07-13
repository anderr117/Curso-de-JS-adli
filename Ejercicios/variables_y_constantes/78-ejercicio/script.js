'use strict'

/**
 * Ejercicio 78 (Usuario actual)
 * Declara let usuarioActual = null. Crea funciones login(nombre) que asigne el usuario
 * y logout() que lo ponga en null.
 */

'use strict'


let usuarioActual = null;

function login(nombre) {
    if (typeof nombre !== 'string' || nombre.trim() === "") {
        return console.error('Error: Nombre de usuario no válido');
    }

    if (usuarioActual !== null) {
        console.warn(`Ya hay una sesión activa (${usuarioActual}). Cierra sesión primero.`);
        return;
    }

    usuarioActual = nombre;
    console.log(`Bienvenido, ${usuarioActual}.`);
}

function logout() {
    if (usuarioActual === null) {
        console.warn('No hay ninguna sesión activa para cerrar.');
    } else {
        console.log(`Adiós, ${usuarioActual}. Sesión finalizada.`);
        usuarioActual = null;
    }
}

// Pruebas
login('Pablo');
login('Andrés');
logout();
logout();
'use strict'

/**
 * Ejercicio 36 
 * Declara una constante USUARIO como objeto con propiedades nombre y email. Crea una 
 * función cambiarEmail que reciba un nuevo email y actualice la propiedad.
 */

const usuario = {
    nombre: 'admin',
    email: 'soyeladmin@gmail.com'
};

function cambiarEmail(nuevoEmail) {
    if (nuevoEmail.includes('@')) {
        usuario.email = nuevoEmail;
        console.log("Email actualizado con éxito.");
    } else {
        console.log("Error: El formato del email no es válido.");
    }

    return usuario;
}

const usuarioActualizado = cambiarEmail('nuevo-admin@empresa.com');
console.log(usuarioActualizado);

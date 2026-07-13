'use strict'

/**
 * Ejercicio 73 (Configuración de app)
 * Crea un objeto const config con propiedades: tema, idioma, notificaciones. Crea funciones
 * para cambiar cada propiedad individualmente.
 */


const config = {
    tema: 'Oscuro',
    idioma: 'Español',
    notificaciones: true
};

function esTextoValido(valor) {
    return typeof valor === 'string' && valor.trim() !== "";
}

function cambiarTema(nuevoTema) {
    if (esTextoValido(nuevoTema)) {
        config.tema = nuevoTema;
        console.log(`Tema actualizado a: ${config.tema}`);
    } else {
        console.error('Error: El tema debe ser un texto válido.');
    }
}

function cambiarIdioma(nuevoIdioma) {
    if (esTextoValido(nuevoIdioma)) {
        config.idioma = nuevoIdioma;
        console.log(`Idioma actualizado a: ${config.idioma}`);
    } else {
        console.error('Error: El idioma debe ser un texto válido.');
    }
}

function cambiarNotificaciones(estado) {
    if (typeof estado === 'boolean') {
        config.notificaciones = estado;
        console.log(`Notificaciones: ${config.notificaciones ? 'Activadas' : 'Desactivadas'}`);
    } else {
        console.error('Error: Las notificaciones deben ser true o false.');
    }
}

cambiarTema('Light Mode');
cambiarIdioma('Inglés');
cambiarNotificaciones(false);

console.log('Configuración final:', config);


// const config = {
//     tema: 'JavaScript',
//     idioma: 'Español',
//     notificaciones: 'Alerta'
// }

// function cambiarTema(nuevoTema){

//     if(typeof nuevoTema !== 'string'){
//         console.log('Error, no es un texto');
//         alert('Debe ser un texto');
//     } else{
//         console.log(`El nuevo tema es`, config.tema = nuevoTema);
//         console.log(`Configuración actualizada`, config);
//     }

// }



// function cambiarIdioma(nuevoIdioma){

//     if(typeof nuevoIdioma !== 'string'){
//         console.log('Error, no es un texto');
//         alert('Debe ser un texto');
//     } else{
//         console.log(`El nuevo idioma es`, config.idioma = nuevoIdioma);
//         console.log(`Configuración actualizada`, config);
//     }

// }

// function cambiarNotificaciones(nuevaNotificacion){

//     if(typeof nuevaNotificacion !== 'string'){
//         console.log('Error, no es un texto');
//         alert('Debe ser un texto');
//     } else{
//         console.log(`El nuevo idioma es`, config.notificaciones = nuevaNotificacion);
//         console.log(`Configuración actualizada`, config);
//     }

// }

// cambiarTema('c++')
// cambiarIdioma('Ingles')
// cambiarNotificaciones('Peligro')
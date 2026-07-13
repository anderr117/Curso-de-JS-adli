'use strict'

/**
 * Ejercicio 100 (Mini-framework de estado)
 * Crea una función crearEstado(estadoInicial) que:
 * • Use let estado = estadoInicial (privado)
 * • Devuelva un objeto con:
 * o getEstado(): devuelve el estado actual
 * o setEstado(nuevoEstado): actualiza (solo si es objeto)
 * o suscribir(callback): guarda callbacks en un array const suscriptores
 * o Al cambiar el estado con setEstado, llama a todos los suscriptores
 */


function crearEstado(estadoInicial) {
    
    let estado = estadoInicial;
    const suscriptores = [];

    return {
        getEstado: function () {
            return estado;
        },

        setEstado: function (nuevoEstado) {

            if (typeof nuevoEstado !== 'object' || nuevoEstado === null || Array.isArray(nuevoEstado)) {
                return console.error('Error: El nuevo estado debe ser un objeto literal ({}).');
            }

            estado = { ...estado, ...nuevoEstado };
            console.log('Estado actualizado internamente.');

            // Notificar a todos los suscriptores ejecutando sus funciones callback
            suscriptores.forEach(callback => callback(estado));
        },

        suscribir: function (callback) {
            if (typeof callback !== 'function') {
                return console.error('Error: El suscriptor debe ser una función.');
            }

            suscriptores.push(callback);
            console.log('Nuevo suscriptor registrado en el sistema.');
        }
    };
}



// 1. Inicializamos nuestro almacén de datos (Store)
const store = crearEstado({ usuario: 'Alexis', tema: 'oscuro', notificaciones: true });

// 2. Creamos un suscriptor (por ejemplo, una función que simula actualizar la interfaz de usuario)
const renderInterfaz = (nuevoEstado) => {
    console.log(`[UI] La pantalla se ha vuelto a renderizar para el usuario: ${nuevoEstado.usuario} con tema: ${nuevoEstado.tema}`);
};

// 3. Registramos el suscriptor en el sistema
store.suscribir(renderInterfaz);

console.log('--- Primera actualización ---');
// 4. Cambiamos el estado de manera controlada. ¡Esto disparará automáticamente la alerta al suscriptor!
store.setEstado({ tema: 'claro' }); 

console.log('--- Segunda actualización ---');
// Modificamos otra propiedad distinta
store.setEstado({ usuario: 'Alexis_Dev' });

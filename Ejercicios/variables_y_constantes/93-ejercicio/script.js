'use strict'

/**
 * Ejercicio 93
 * Crea un ejemplo donde la TDZ con let te proteja de un error lógico.
 */


let misProductos = [];


function agregarProducto(producto, precio){

    if(typeof producto !== 'string'){
        console.log('Error. Debe ser texto')
    }

    misProductos.push({producto, precio})
    console.log(`El producto ${producto} con precio de ${precio} fue agregado con éxito`);
    console.log(misProductos);

    console.log(`Descuento aplicado ${total}`);
    let descuento = 0.100
    let total = precio * descuento;
}

agregarProducto('Cereal', 10)


/**
 * RESUELTO
 */


// let misProductos = [];

// function agregarProducto(producto, precio) {
//     if (typeof producto !== 'string' || producto.trim() === '') {
//         return console.error('Error: El nombre del producto debe ser un texto válido.');
//     }
//     if (typeof precio !== 'number' || precio <= 0) {
//         return console.error('Error: El precio debe ser un número mayor a 0.');
//     }

//     misProductos.push({ producto, precio });
//     console.log(`🛒 El producto "${producto}" con precio de Q${precio} fue agregado con éxito.`);

//     // CORRECCIÓN: Primero declaramos e inicializamos (Fin de la TDZ)
//     let descuento = 0.10; 
//     let total = precio * descuento;

//     // Ahora es 100% seguro acceder a las variables
//     console.log(`📉 Descuento aplicado (10%): Q${total}`);
//     console.log('Lista de productos actual:', misProductos);
// }

// agregarProducto('Cereal', 10);
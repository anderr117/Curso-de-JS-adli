'use strict'

/**
 * Ejercicio 71 (Carrito de compras)
 * Declara un array const carrito = []. Crea una
 * función agregarProducto que reciba un nombre y
 * lo agregue al carrito. Crea otra verCarrito.
 */

const carrito = [];

function agregarProducto(nombreProducto) {
    if (typeof nombreProducto === 'string' && nombreProducto.trim() !== "") {
        
        carrito.push(nombreProducto);
        
        console.log(`"${nombreProducto}" ha sido añadido al carrito.`);
    } else {
        console.error('Error: El nombre del producto no es válido.');
    }
}

function verCarrito() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        console.log(`Tienes ${carrito.length} productos en tu carrito:`);
        console.log(`Items: ${carrito.join(', ')}`);
    }
}

agregarProducto('Cebolla');
agregarProducto('Tomate');
verCarrito();
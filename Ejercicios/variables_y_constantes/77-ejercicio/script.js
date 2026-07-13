'use strict'

/**
 * Ejercicio 77 (Inventario)
 * Declara const inventario = {}. Crea funciones
 * agregarItem(item, cantidad) y usarItem(item).
 */

const inventario = {};

function agregarItem(item, cantidad){
    if(typeof item !== 'string'){
        console.log('Error: Debes usar letras');
    }

    if(typeof cantidad !== 'number'){
        console.log('Error: Debe usar numeros')
    }

    

    inventario.item = item;
    inventario.cantidad = cantidad;

    let nuevoInventario = inventario;



    console.log(`El inventario tiene los siguientes elmentos`, inventario, nuevoInventario)
}

agregarItem('Short', 5)
agregarItem('Pantalon', 7)


function usarItem(item){

    
    console.log(`Estas usando ${item}`)

}

usarItem('')
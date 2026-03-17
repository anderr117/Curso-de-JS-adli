'use script'

/**
 * Ejercicio 30 
 * ¿Qué es la "cadena de ámbitos" (scope chain)? Explica con un ejemplo.
 */

let soyGlobal = 'Soy Global' //Varaible global

function externa(){
    let x = 'JS'; //variable externa

    function interna(){
        console.log(soyGlobal); //Busca la variable global, no la local, no la externa
        console.log(x); //Busca la variable externa, no la externa
    }
    interna();
}

externa();
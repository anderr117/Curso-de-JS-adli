'use strict'

/**
 * 1-Pida 6 numero por pantalla e ingresalos en un array
 * 2-mostrar el array entero (todos los elementos en el cuerpo de la pagina y en la consola)
 * 3-invertir su orden y mostrarlo
 * 4-ordenarlo y mostrarlo
 * 5-cuantos elementos tiene el array
 * 6-busqueda de un valor introducido por el usuario que nos diga si lo encuentra y su indice
 * (se valorara el uso de funciones)
 */


var array = [];
var i = 1;

function mostrar(array, opcional = ''){
    document.write('<h1>edades de personas '+opcional+'</h1>')

    document.write('<ul>');

    for(let variable in array){
        document.write('<li>'+array[variable]+'</li>');
    }

    document.write('</ul>');

    if(opcional === ''){
        console.log(array);
    }
}

do{
    var elemento = parent(prompt('Ingrese una edad (solo numeros mayores a 0)', 1));
    if(elemento > 0){
        array.push(elemento)
        i++;
    }
}while (i <= 6);

mostrar(array);


var array_invertido = array.reverse();
mostrar(array_invertido, 'invertido');

var array_ordenado = array.sort(function(a,b){return a-b});
mostrar(array_ordenado, 'ordenado');


document.write('cantidad de elementos'+array.length);

do{
    var edad = parseInt(prompt('ingrese una edad a buscar (solo numeros mayores a 0)', 1));
}while(isNaN(edad) || edad <= 0);

var busqueda = array.findIndex(element => element === edad);

if (busqueda >= 0){
    document.write('<h1>la edad de '+edad+'si se ha encontrado, esta es la posición'+busqueda+'</h1>');
}else{
    document.write('<h1>la edad de'+edad+'no se ha encontrado</h1>')
}



// // Función para mostrar el array en la página y consola
// function mostrarArray(elementos, textoCustom = "") {
//     document.write(`<h3>Contenido del array ${textoCustom}:</h3>`);
//     document.write("<ul>");
//     elementos.forEach(dato => {
//         document.write(`<li>${dato}</li>`);
//     });
//     document.write("</ul>");
//     console.log(textoCustom, elementos);
// }

// // 1. Pedir 6 números e ingresarlos en un array
// var numeros = [];

// for (let i = 0; i < 6; i++) {
//     let input;
//     do {
//         input = parseInt(prompt(`Introduce el número ${i + 1}:`, 0));
//     } while (isNaN(input));
//     numeros.push(input);
// }

// // 2. Mostrar el array entero
// mostrarArray(numeros, "Original");

// // 4. Ordenarlo y mostrarlo (Paso el 4 antes porque sort() modifica el array original)
// // Usamos una función de comparación para que ordene números correctamente (1, 2, 10...)
// numeros.sort((a, b) => a - b);
// mostrarArray(numeros, "Ordenado");

// // 3. Invertir su orden y mostrarlo
// numeros.reverse();
// mostrarArray(numeros, "Invertido");

// // 5. Cuántos elementos tiene
// document.write(`<h4>El array tiene: ${numeros.length} elementos</h4>`);

// // 6. Búsqueda de un valor introducido por el usuario
// let busqueda = parseInt(prompt("Busca un número en el array:", 0));
// let indice = numeros.indexOf(busqueda);

// if (indice != -1) {
//     document.write(`<hr><h4>ENCONTRADO: El número ${busqueda} está en el índice: ${indice}</h4>`);
// } else {
//     document.write(`<hr><h4>LO SIENTO: No se encontró el número ${busqueda}</h4>`);
// }




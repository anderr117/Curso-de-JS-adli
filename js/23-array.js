'use strict'

//Formas de crear arrays
//forma 1
var nombre = ['ariana', 'maria', 25, true, 'jelenik', 'jenni']

//forma 2
var lenguaje = new Array('php', 'jquery', 'bootstrap', 'javascript', 33, false);

console.log(nombre, lenguaje);

//Mostrar un solo elemento del array
console.log(nombre[0])

//cantidad de elmentos
console.log(lenguaje.length);


// var elemento = parseInt(prompt('¿Que elemento del array quieres ver?', 0));

// if (elemento >= nombre.length){
//     alert('Introduce un numero menor a '+nombre.length);
// }else{
//     document.write(nombre[elemento]);
// }


//Recorrer elementos del array

document.write('ELEMENTOS DEL ARRAY')
document.write('<ul>')


for (var i = 0; i < nombre.length; i++) {
    document.write('<li>' + nombre[i] + '</li>');
}

document.write('</ul>')


/**
 * FOREACH
 * viene con una función de callback
 * indice, array estas dos no hacen falta
 */

// lenguaje.forEach((elemento, indice, array)=>{
//     console.log(array);
//     document.write('<li>' + indice + '-' + elemento + '</li>')
// })

document.write('<ul>')

lenguaje.forEach((elemento) => {
    document.write('<li>' + elemento + '</li>')
})

document.write('</ul>')



//AGREGAR ELEMENTOS AL ARRAY
var damas = ['belen', 'malaspina', 'karina', 'jelenik', 'romina'];
var damas2 = ['ana', 'maria', 'sabrina', 'sol perez', 'thalia'];

//agregar elementos al array con push
damas.push('lara crof');
console.log(damas);


//ARRAY MULTIDIMENSIONALES
var mujeres = [damas, damas2];
//aca accedo al array 1 posicion 1
console.log(mujeres[0][1]);
//aca accedo al array 2 posicion 3
console.log(mujeres[1][3]);

var elem = ''

while(elem != 'terminar'){
    elem = prompt('Ingresa un nombre');

    damas.push(elem);
}

/**
 * Pop eleiminar el utlimo elemento del array
 * en ese caso eliminaria el elemento terminar
 */

damas.pop();
console.log(damas)

/**
 * Eliminar del array un elemento en concreto
 * AL SER UN ARRAY, CADA ELEMENTO ES COMO SI
 * CONTARA UN CARACTER EMPEZANDO DESDE 0
*/

var indice = damas.indexOf('karina')
console.log(indice);

if(indice > -1){
    /**
     * splice me borra en un array todos los elementos
     * que yo le indique, en este caso (indice, 1)
     * indice me dice desde donde borro y el 1 cuantos
     * osea que borre solo el lemento del indice
     */
    damas.splice(indice, 1);
} 

console.log(damas);


/**
 * join me convierte el array en un string
 * separando los elementos con comas
 */

var damas_string = damas.join();
console.log(damas_string);

/**
 * split (',')
 * Convierte una cadena de texto en un array
 */

var cadena = 'texto1, text2,texto3';
var cadena_array = cadena.split();
console.log(cadena_array);

var cadena_array = cadena.split(',');
console.log(cadena_array);

/**
 * sort
 * me ordena el array de forma alfabetica 
 */
console.log(damas.sort());


/**
 * reverse
 * me muestra del ultimo elemento hasta el primero
 */
console.log(damas.reverse());

/**
 * otra forma de recorres los array
 * for of
 * me lanza el elemento
 * for in
 * me lanza los indices (posiciones)
 */

document.write('<ul>')
/**
 * damasx va tomando la posicion
 * del elemento del array
 */
for (let damasx in damas){
    document.write('<li>' + damas[damasx] + '</li>')
}

document.write('</ul>')


document.write('<ul>')

for (let damasx of damas){
    document.write('<li>' + damasx + '</li>')
}

document.write('</ul>')


/**Buscar elementos en un array usando funciones*/
var busqueda = damas.find(function(dama){
    return dama == 'jelenik'
});
console.log(busqueda);

/**Los mismo pero reducido */
var busqueda = damas.find(dama => dama == 'jelenik');
console.log(busqueda);


/**
 * findIndex
 * me saca el indice
 */
var busqueda = damas.findIndex(dama => dama == 'jelenik');
console.log(busqueda);

/**
 * some
 * una forma de busqueda y comparación con 
 * array de numero
 * me devuelve un true o false
 */

var precios = [145, 25, 45, 100, 722, 855];
var busqueda = precios.some(precio => precio >= 40);
console.log(busqueda);


/**
 * Ordenar numeros de menor a mayor a - b
 * Ordenar numeros de mayor a menor b - a
 */
var numeros = [22, 78, 1, 12, 77, 18];
let ordenados = numeros.sort((a,b) => a - b);
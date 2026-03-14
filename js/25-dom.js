/**
 * DOM (modelo de objeto del documento) es una interfaz de programación para
 * los documentos HTML, XML y SVG. Proporciona una representación estructurada del documento
 * permitiendo a los programas modificar la estructura, estilo y contenido del documento.
 * Cuando una página web se carga en un navegador, el navegador construye una estructura de 
 * árbol de objetos que representa la página web. Este arbol se conoce como el DOM
 */


'use strict'

/**
 * getElementById me busca el id en html llamado micaja y lo guarda en la variable
 */
// var caja = document.getElementById('micaja');
// console.log(caja);
// caja.style.background = 'blue';

/**
 * Otra forma de elegir el id o también puede ser una clase o etiqueta etc...
 */

// var caja = document.querySelector('#micaja');

// function cambiarcolor(color){
//     caja.style.background = color;
// }

// cambiarcolor('red');



/**
 * Seleccionar etiqueta, no importa se se usa "" o '' (comillar dobles o simples tanto para el id, etiqueta, clase, etc)
 * querySelector me selecciona el primer elemento indicado
 */
// var etiqueta = document.querySelector("h1");
// etiqueta.style.background = ('green');


/**
 * innerHTML para recoger el contenido actual de un contenedor o insertar nuevo
 * contenido en ese contenedor
 */

// var caja = document.getElementById('micaja').innerHTML;
// console.log(caja)


/**
 * Cambiar el contenido que es un texto
 */
var caja = document.getElementById('micaja');
// caja.innerHTML = ('el texto fue cambiado por javascript');
// console.log(caja);

caja.style.padding = '20px';
caja.style.color = 'white';
caja.style.background = 'green';
caja.className = 'Hola'
console.log(caja);

/**
 * Conseguir elementos por su etiqueta
 * getElemntsByTagName ingresa conviertiendo un array a todos los elementos
 * indicados de dicha etiqueta conviertiendolos en un array
 */

var todoslosdiv = document.getElementsByTagName('div');
console.log(todoslosdiv); //lo muestro como array

// var contenido = todoslosdiv[2].textContent;
// console.log(contenido);


var contenido = todoslosdiv[2];
/**
 * Manipulo cambiando el div
 */

contenido.innerHTML = 'Hola soy ander';
console.log(contenido);


/**
 * --CREAR ELEMENTOS ETIQUETA ETC--
 */

/**
 * con createElement creo un hr
 * elijo el id y obtenemos la section
 */

// var seccion = document.querySelector('#miseccion');
// var h1 = document.getElementById('mih1');
// var hr = document.createElement('hr');

//append añade al DOM
// seccion.append('estoy agregandome al dom');
// seccion.append(hr);

//prepend añade antes
// seccion.prepend('estoy agregandome al dom antes del elemento que ya esta');

// var p = document.createElement('p');
// p.append('Estoy agregandome antes del elemento especificado');
// seccion.insertBefore(p,h1); //se posiciona primero que el elemento especificado


/**
 * Ejercicio
 */

//Elijo el ID
var seccion = document.querySelector('#miseccion');

//con createElement creo un hr
var hr = document.createElement('hr');
var h1 = document.getElementById('mih1');

/**
 * Con este for voy iterando los div, valor seria el indice (la)
 */
for(let valor in todoslosdiv){

    /**
     * todos los div que es el vector con posición [valor] y .textContent que recoge el texto
     * este if los hago porque el vector todoslosdiv tiene otros valores autogenerados y
     */

    if(typeof todoslosdiv[valor].textContent == 'string'){
        /**
         * document.createElement creo el elemento
         */
        var parrafo = document.createElement('p');
        /**
         * createTextNode creo el texto que en este caso con textContent agarrlo el texto
         */
        var texto = document.createTextNode(todoslosdiv[valor].textContent);

        //con append le añade el texto al parrafo
        parrafo.append(texto)

        //append añade despues
        seccion.append(parrafo);
    }
}

seccion.append(hr)


/**
 * Conseguir elementos por su clase
 */
/**
 * getElementsByClassName es recomendable para seleccionar muchas clases porque querySelector solo agarra una
 */
var divrojos = document.getElementsByClassName('rojo');
var divamarillos = document.getElementsByClassName('amarillo');
// console.log(divrojos);
// divrojos.style.background = 'red';

divamarillos[0].style.background = 'yellow'

for(var indice in divrojos){
    // console.log(divrojos[indice]);
    if (divrojos[indice].className == 'rojo'){
        divrojos[indice].style.background = 'blue';
    }
}

var elems_varios = document.querySelectorAll('h1, #mih1, .amarillo, h3');
console.log(elems_varios);

var seccion = document.querySelector('#miseccion');

elems_varios.forEach((element) => {
    var parrafo = document.createElement('p');
    var texto = document.createTextNode(element.innerHTML); //recogemos el contenido
    parrafo.append(texto);
    seccion.append(parrafo);
});


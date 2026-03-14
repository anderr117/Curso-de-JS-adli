'use strict'

window.addEventListener('load', () => {

    if (typeof(Storage) !== 'undefined'){
        console.log('localStorage compatible')
    } else {
        console.log('localStorage incompatible')
    }

    //GUARDAR DATOS
    /**
     * PARA VER EL STORAGE QUE ES COMO UNA SESSION EN JS
     * SE PUEDE VER EN inspeccionar -> Elemento -> Application -> Storage alli se ve la key y el value
     * En este caso KEY es titulo y VALUE es curso de javascript
     * 
     */

    localStorage.setItem('Titulo', 'Curso de JavaScript'); //setItem esto invoca un parametro

    /**
     * Consigo un elemento del localStorage (elemento que esta en la memoria de mi navegador)
     */
    // console.log(localStorage.getItem('Titulo'));

    // document.querySelector('#peliculas').innerHTML = localStorage.getItem('Titulo');


    //Para guardar objetos debo convertirlos en formato String

    var usuario = {
        nombre: 'Ander',
        Apodo: 'Master Chief',
        web: 'masterchief.com'
    };

    //JSON.stringify(usuario) lo coniverto en formato string
    localStorage.setItem('usuario', JSON.stringify(usuario));

    /**
     * Para conseguir el elemento OBJETO que ya esta
     * como string hay que hacer esto:
     * JSON.parse lo convierto para mostrarlo como objeto y poder usarlo en JavaScript
     */
    var userjs = JSON.parse(localStorage.getItem('usuario'));
    console.log(userjs);

    //document.querySelector('#peliculas') selecciono el id .append(' ' + userjs.web + ' - ' + userjs.nombre);
    document.querySelector('#peliculas').append(' ' + userjs.web + ' - ' + userjs.nombre);
    document.querySelector('#datos').append(' ' + userjs.web + ' - ' + userjs.nombre);

    //remover
    localStorage.removeItem('usuario'); //eliminar el localStorage del objeto usuario

    //eliminar todo el localStorage
    localStorage.clear();
})
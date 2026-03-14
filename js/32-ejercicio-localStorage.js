'use strict'

/**
 * Este evento es para que pueda poner el script que carga todo esto al principio del body
 */

window.addEventListener('load', () =>{


    //Seleccionamos el id del formulario
    var formulario = document.querySelector('#formpeliculas');
    
    //Capturamos el evento submit del formulario
    formulario.addEventListener('submit', function(){



        //selecciono el id del input y tal value lo guardo en la variable
        var titulo = document.querySelector('#addpelicula').value;

        //si titulo tiene algo entro al if
        if(titulo.length >= 1){
            //En este caso KEY es titulo y VALUE es titulo
            localStorage.setItem(titulo, titulo);
        }
    })

    //Seleccionamos el id de la ul

    var ul = document.querySelector('#peliculas-list');

    //recorremos el localStorage
    for (var i in localStorage){
        //si tal posicion es un string entro al if
        if (typeof localStorage[i] == 'string'){
            //creamos el elemento li
            var li = document.createElement('li');

            //colocamos el localStorage[i] en el li
            li.append(localStorage[i]);

            //Colocamos el li en el ul
            ul.append(li);
        }
    }

    //formulario de borrado
    var formulariob = document.querySelector('#formBorrarPeliculas');

    formulariob.addEventListener('submit', function(){
        //selecciono el id del input y tal value y lo guardo en la viarable
        var titulo = document.querySelector('#borrarPelicula').value;

        //si titulo tiene algo entro al if
        if (titulo.length >= 1){
            localStorage.removeItem(titulo);
        }
    })

}) //fin del load
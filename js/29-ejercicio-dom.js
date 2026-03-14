'use strict'

window.addEventListener('load', () => {
    console.log('dom cargado')

    //seleccionamos el id del formulario
    var formulario = document.querySelector('#formulario');

    //seleccionamos la clase del div dashed
    var box_dashed = document.querySelector('.dashed')


    box_dashed.style.display = 'none'; //ponemos al div en none para que no se vea

    //al tocar el boton submit atrapo el evento
    formulario.addEventListener('submit', function () {
        console.log('evento subtmi capturado')
        //value es el valor de el input (lo que tiene escrito)
        var nombre = document.querySelector('#nombre').value;
        var apellidos = document.querySelector('#apellidos').value;
        var edad = parseInt(document.querySelector('#edad').value);

        //VALIDAR
        //esta es una forma de validar
        //trim es para eliminar esapcios adelante y atras
        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert('El nombre no es valido')
            document.querySelector('#error_nombre').innerHTML = 'El nombre esta mal'
            return false; //sale de la funcion con un false
        }


        //Esta es otra
        if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert('el apellido no es valido')
            return false;
        }

        /**
         * isNaN es una función de alto nivel y no está asociada a ningún objeto
         * isNaN intenta convertir el parametro pasado a un numero.
         * Si el parametro no se puede convertir, devuelve true
         * en caso contrario, devuelve false
         */

        if(edad == null || edad <= 0 || isNaN(edad) == true){
            alert('La edad no es valida')
            return false;
        }


        box_dashed.style.display = 'block'; //lo ponemos en block para que sea vea
        var p_nombre = document.querySelector('#p_nombre span');
        var p_apellidos = document.querySelector('#p_apellidos span');
        var p_edad = document.querySelector('#p_edad span');

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos,
        p_edad.innerHTML = edad;

    })

})
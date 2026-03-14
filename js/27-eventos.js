'use strict'
/**
 * addEventListener captura(registra) el evento
 * load es el evento a registar que seria cuando se carga la pagina en el navegador
 * con esto evitamos que en el htm tengamos que colocar el script al final del body
 */

/**
 * Para el primer ejemplo se agregar esto fuera del evento
 */
// function cambiarColor(){
//     var boton = document.getElementById('boton');
//     boton.style.background = 'red';
// }



window.addEventListener('load', () => {

    // function cambiarColor(){
    //     var boton = document.getElementById('boton');
    //     boton.style.background = ('red');
    // }

    var boton = document.querySelector('#boton')

    function cambiarColor() {

        // var boton = document.querySelector('#boton');

        /**
         * Ponemos el color de fondo en la variable
         */
        var bg = boton.style.background;

        /**
         * le preguntamos si tiene color verde
         */
        if (bg == 'green') {
            boton.style.background = ('red'); //lo cambiamos a rojo
        } else {
            boton.style.background = ('green'); //lo cambiamos a verde
        }
    }


    //Click
    boton.addEventListener('click', () => {
        cambiarColor();
    });

    //Mouseover cuando paso por encima del boton
    boton.addEventListener('mouseover', function () {
        boton.style.background = 'yellow';
    });

    //Mouseout cuando sales de tocar al boton
    boton.addEventListener('mouseout', function () {
        boton.style.background = '#ccc';
    });

    //Focus
    /**
     * Cada vez que me posiciono en el input hace esto
     */

    var input = document.querySelector('#campo_nombre');
    //addEventListener puedo capturar cualquier evento
    input.addEventListener('focus', function () {
        console.log('[focus] estas adentro del input');
    });

    //Blur
    /**
     * Si me salo del input hace esto
     * 
     * addEventListener puedo capturar cualquier evento
     */

    input.addEventListener('blur', function () {
        console.log('[blur] estas fuera del input')
    });

    //keydown
    /**
     * me muestra todas las teclas que presiono del teclado
     * String.fromCharCode atrapa algo del teclado y lo convierte en un string
     * console.log('[keydown] pulsando esta tecla', String.fromCharCode(event.keyCode));
     */

    input.addEventListener('keydown', function (event) {
        console.log('[keydown] pulsando esta tecla', event);
    });

    /**
     * keyup
     * me muestra todas las teclas que dejo de presionar del teclado
     * 
     * String.fromCharCode atrapa algo del teclado y lo convierte en un string
     * console.log('[keydown] pulsando esta tecla', String.fromCharCode(event.keyCode));
     */

    input.addEventListener('keyup', function (event) {
        console.log('[keyup] tecla soltada', String.fromCharCode(event.keyCode));
    })

}) //Fin del evento load
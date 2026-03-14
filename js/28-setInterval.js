/**
 * SetInterval es una función que permite
 * ejecutar repetidamente una
 * función cada cierto intervalo de tiempo
 */

'use strict'

window.addEventListener('load', () => {
    var encabezado = document.querySelector('h1');
    var star = document.querySelector('#start');
    var stop = document.querySelector('#stop');
    var tiempo = null;

    function intervalo() {
        if (tiempo == null) { //Esto para que no multiplique el bucle si toco start varias veces


            tiempo = setInterval(() => {
                if (encabezado.style.background == 'red') {
                    encabezado.style.background = 'green'
                } else {
                    encabezado.style.background = 'red';
                }
            }, 1000);
        }
    }

    start.addEventListener('click', function () {
        intervalo();
    });

    stop.addEventListener('click', function () {
        clearInterval(tiempo);
        tiempo = null;
    });

})


//SETINTERVAL
// window.addEventListener('load', () => {
//     var encabezado = document.querySelector('h1');

//     setInterval(() => {
//         if (encabezado.style.background == 'red') {
//             encabezado.style.background = 'green';
//         } else {
//             encabezado.style.background = 'red';
//         }
//     }, 1000);
// })

//TIMEOUT

// window.addEventListener('load', () => {
//     var encabezado = document.querySelector('h1');

//     setTimeout(() => {
//         if (encabezado.style.background == 'red') {
//             encabezado.style.background = 'green';
//         } else {
//             encabezado.style.background = 'red';
//         }
//     }, 1000);
// })
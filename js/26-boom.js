'use strict'

/**
 * Permite acceder y modificar las propiedades de las ventanas del propio navegador 
 */

//me saca la anchura y la altura de la consola de mi navegador
function getBoom() {
    console.log(window.innerWidth);
    console.log(window.innerHeight);

    //también así
    console.log(screen.width);
    console.log(screen.height);

    //me saca la url
    console.log(window.location.href);
}

/**
 * ¿Por qué no funciona?
Los navegadores modernos bloquean cualquier intento de abrir ventanas emergentes (popups) que no sean iniciados directamente por una acción del usuario (como un clic o presionar una tecla).
 */

function redirect(url) {
    window.location.href = url;
} //Si pongo esto redirect ('https://google.com'); en la consola se va a google

function abrirVentana(url) {
    //window.open me abre el sistion en otra ventana
    // window.open(url);
    window.open(url, '', 'width=400,height=300');
}

abrirVentana('https://google.com');

// redirect('https://google.com');


// getBoom();
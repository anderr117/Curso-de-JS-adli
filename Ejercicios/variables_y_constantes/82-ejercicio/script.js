'use strict'

/**
 * Ejercicio 82 (Historial de navegación)
 * Declara const historial = [] y let posicionActual
 * = -1. Simula navegar a páginas y retroceder.
 */

const historial = [];
let posicionActual = -1;

function visitarPagina(nuevaPagina){

    if(typeof nuevaPagina !== 'string' || nuevaPagina.trim() === ''){
        return console.log('Error. URL NO  VALIDA')
    }

    historial.push(nuevaPagina);
    
    posicionActual = historial.length - 1;

    console.log(`La nueva pagina es: ${nuevaPagina} - La posición es: ${posicionActual}`);

}



function retrocederPagina(){

    if(posicionActual > 0){
        posicionActual--;
        console.log(`Has regresado a: ${historial[posicionActual]}`)
    }else{
        console.warn('no hay mas paginas para retroceder')
    }

}

visitarPagina('google.com')
visitarPagina('gemini.com')
visitarPagina('Chat.com')
retrocederPagina()
retrocederPagina()
retrocederPagina()

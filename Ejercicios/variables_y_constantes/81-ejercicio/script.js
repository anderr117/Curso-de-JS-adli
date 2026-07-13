'use strict'

/**
 * Ejercicio 81 (Tema oscuro/claro)
 * Declara let tema = "claro". Crea una función
 * toggleTema() que cambie entre "claro" y "oscuro".
 */


let tema = 'claro';

function toggleTema() {

    if (typeof tema != 'string') {
        console.log('Error. Debe ser texto')
    }

    if (tema != 'claro') {
        tema = 'claro'
        console.log('Tema claro aplicado')
    } else {
        tema = 'oscuro'
        console.log('tema oscuro aplicado')
    }

}

toggleTema();
toggleTema();
toggleTema();


//FORMA MAS LIMPIA


// 'use strict'


// let tema = 'claro';

// function toggleTema() {
//     if (typeof tema !== 'string') {
//         return console.error('Error: El tema debe ser una cadena de texto.');
//     }

//     tema = (tema === 'claro') ? 'oscuro' : 'claro';

//     console.log(`Tema cambiado. Estado actual: Modo ${tema.toUpperCase()}`);
//     // En un proyecto real, aquí conectaría con el DOM:
//     // document.body.className = tema;
// }

// toggleTema();
// toggleTema();
// toggleTema();
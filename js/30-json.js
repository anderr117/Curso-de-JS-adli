'use strict'

window.addEventListener('load', () =>{
    //OBJETO
    //Defino lo que sería la clase

    var pelicula = {
        titulo: 'Transformers',
        year: 2018,
        pais: 'EEUU'
    };

    console.log(pelicula.titulo)

    pelicula.titulo = 'Superman vs Batman'

    console.log(pelicula.titulo)

    var peliculas = [
        {
            titulo: 'Tachero nocturno', year: 1991, pais: 'Argentina'
        },
        pelicula
    ];

    console.log(peliculas);


    var caja_peliculas = document.querySelector('#peliculas');

    for (let value in peliculas){
        var p = document.createElement('p');

        p.append(peliculas[value].titulo + " " + peliculas[value].year);
        caja_peliculas.append(p);
    }

})
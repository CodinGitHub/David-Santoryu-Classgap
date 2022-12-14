import data from './movies.json' assert {type: 'json'}

console.log(data);

/* 
David, en la variable data esta el listado de peliculas, es un arreglo de objetos. 
Sobre él debes trabajar. Puedes mirar en consola que es el que se imprime, sugiero
cambiar los filtros ya que es ligeramente diferete la informaciòn de estas peliculas:

Filtrar por:

Año -> Ejemplo peliculas que sean de 1980 en adelante
Genero -> Peliculas que sean solo de 'Drama' por ejemplo

Siente libre de agregar mas filtros si deseas
*/

let moviesContainer = document.querySelector('.movies-container');

data.forEach(movie => {
    moviesContainer.innerHTML += `
    <div class="movie">
        <img class="img" src="${movie.posterurl}" alt="pelicula">
        <p class="title">${movie.title}</p>
        <p class="year">${movie.year}</p>
    </div>`
});
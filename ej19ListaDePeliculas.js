/* Dado un array de objetos de películas (título, director, vista) mostrar todas las películas indicando cual has visto y cual no

Ejemplo:
misPeliculas(película)

Devuelve:
Ya has visto: "El señor de los anillos de Peter Jackson"
Aún no has visto: "La liga de la justicia de Zack Snyder"

TODO: Cómo hacerlo:
-Crear un array de objetos
-Crear una función para recorrer y mostrar
*/

const movies = moviesList => {
  for (const movie of moviesList) {
    let displayMovies = `${movie.title} de ${movie.director}`;
    if (movie.vista) {
      console.log(`Ya has visto ${displayMovies}`);
    } else {
      console.log(`Aún no has visto ${displayMovies}`);
    }
  }
};

const moviesCollection = [
  {
    title: 'El señor de los anilos',
    director: 'Peter Jackson',
    vista: true,
  },
  {
    title: 'La liga de la justicia',
    director: 'Zack Snyder',
    vista: false,
  },
  {
    title: 'Advengers End Game',
    director: 'Joe Russo',
    vista: true,
  },
  {
    title: 'Batman vs Superman',
    director: 'Zack Snyder',
    vista: false,
  },
];

movies(moviesCollection);

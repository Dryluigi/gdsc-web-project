function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

function createMovieCardElement(movie) {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');

  const moviePoster = document.createElement('img');
  moviePoster.classList.add('movie-card__poster');
  moviePoster.src = `${IMAGE_BASE_URL}${movie.poster_path}`;
  moviePoster.alt = 'movie-poster';

  const movieInfo = document.createElement('div');
  movieInfo.classList.add('movie-card__info');

  const movieTitle = document.createElement('p');
  movieTitle.classList.add('movie-card__title');
  movieTitle.innerText = movie.title;

  const movieDesc = document.createElement('p');
  movieDesc.classList.add('movie-card__description');
  movieDesc.innerText = truncateString(movie.overview, 100);

  movieInfo.appendChild(movieTitle);
  movieInfo.appendChild(movieDesc);

  movieCard.appendChild(moviePoster);
  movieCard.appendChild(movieInfo);

  return movieCard;
}

window.addEventListener('DOMContentLoaded', () => {
  const movieList = document.querySelector('.movie-list');

  movies.map(movie => {
    movieList.appendChild(createMovieCardElement(movie));
  });
});
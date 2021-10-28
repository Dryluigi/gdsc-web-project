function searchHandler(event) {
  event.preventDefault();
  const search = document.querySelector('#search').value;

  const filteredMovies = movies.filter(m => m.title.includes(search));
  appendMovies(filteredMovies);
}
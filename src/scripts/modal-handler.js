function closeModal() {
  document.querySelector('#modal').classList.remove('d-block');
  document.querySelector('#overlay').classList.remove('d-block');
  document.querySelector('#modal').classList.add('d-none');
  document.querySelector('#overlay').classList.add('d-none');
}

function openModal() {
  document.querySelector('#modal').classList.remove('d-none');
  document.querySelector('#overlay').classList.remove('d-none');
  document.querySelector('#modal').classList.add('d-block');
  document.querySelector('#overlay').classList.add('d-block');
}

function onCardClick(event) {
  const id = event.target.getAttribute('data-id');
  const movie = movies.find(m => m.id === +id);
  openModal();
  document.querySelector('#movie-poster').setAttribute('src', IMAGE_BASE_URL + movie.poster_path);
  document.querySelector('#movie-title').innerHTML = movie.title;
  document.querySelector('#movie-overview').innerHTML = movie.overview;
}
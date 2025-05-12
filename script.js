const apiKey = '8f94459b'; 


function searchMovie() {
  const title = document.getElementById('movieTitle').value.trim(); 
  if (!title) {
    alert('Por favor, digite o título do filme.');
    return;
  }

  const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}&r=json`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.Response === 'True') {
        displayMovie(data);
      } else {
        document.getElementById('movieInfo').innerHTML = `<p>Filme não encontrado: ${data.Error}</p>`;
      }
    })
    .catch(error => {
      console.error('Erro ao buscar o filme:', error);
      alert('Ocorreu um erro ao buscar o filme. Tente novamente mais tarde.');
    });
}
function displayMovie(movie) {
  const movieInfo = document.getElementById('movieInfo');
  movieInfo.innerHTML = `
    <h2>${movie.Title} (${movie.Year})</h2>
    <img src="${movie.Poster}" alt="${movie.Title}" style="max-width: 200px;">
    <p><strong>Gênero:</strong> ${movie.Genre}</p>
    <p><strong>Diretor:</strong> ${movie.Director}</p>
    <p><strong>Atores:</strong> ${movie.Actors}</p>
    <p><strong>Sinopse:</strong> ${movie.Plot}</p>
  `;
}
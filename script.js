async function loadFilms() {
  const gallery = document.getElementById('gallery');
  const response = await fetch('films.json');
  const films = await response.json();

  films.forEach(film => {
    const div = document.createElement('a');
    div.classList.add('film');
    div.href = film.link;
    div.innerHTML = `
      <img src="${film.thumbnail}" alt="${film.title}">
      <div class="overlay">${film.title}</div>
    `;
    gallery.appendChild(div);
  });
}

window.addEventListener('DOMContentLoaded', loadFilms);

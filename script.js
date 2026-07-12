// define event listener that is triggered when the DOM is fully loaded upon visiting the website.
document.addEventListener('DOMContentLoaded', async function() {
  const response = await fetch('http://localhost:3000/api/songs');
  const songs = await response.json();

  let html = '';
  for (let song of songs) {
    html += `<li>${song.title} - ${song.artist}</li>`;
  }
  
  document.querySelector('#addedSongs').innerHTML = html;
});
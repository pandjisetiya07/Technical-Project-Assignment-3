// fetch('https://api.themoviedb.org/3/discover/movie?api_key=50cbb0191a40a4e02aca0c7719a71e39&sort_by=popularity.desc')
// .then(response => response.json())
// .then(data => console.log(data.results)) 


const API_KEY = 'api_key=50cbb0191a40a4e02aca0c7719a71e39';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;


const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


const prev = document.getElementById('prev')
const next = document.getElementById('next')
const current = document.getElementById('current')

getMovie(API_URL);

function getMovie(url) {
    fetch(url).then(res => res.json()).then(data => {
        tampilkanMovie(data.results);
        console.log(data)
    })
}

function tampilkanMovie(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, release_date, overview, vote_average, id } = movie;
        const formListMovie = document.createElement('div');
        formListMovie.classList.add('movie');
        formListMovie.innerHTML = `
              
`
    main.appendChild(formListMovie);

    });
}

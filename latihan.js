// fetch('https://api.themoviedb.org/3/discover/movie?api_key=50cbb0191a40a4e02aca0c7719a71e39&sort_by=popularity.desc')
// .then(response => response.json())
// .then(data => console.log(data.results)) 


const API_KEY = 'api_key=50cbb0191a40a4e02aca0c7719a71e39';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;


// const album =  document.getElementById('album')
// const form = document.getElementById('form');
// const search = document.getElementById('search');


// const prev = document.getElementById('prev')
// const next = document.getElementById('next')
// const current = document.getElementById('current')

const album =  document.getElementById('album')
const staticBackdrop =  document.getElementById('staticBackdrop')

getMovie(API_URL);

function getMovie(url){
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        tampilkanMovie(data.results);
        console.log(data)
    })
}


function tampilkanMovie(data){
    album.innerHTML = '';

            data.forEach(movie => {
                const { title, poster_path, release_date, overview, vote_average, id } = movie;
                const formListMovie = document.createElement('div');
                formListMovie.classList.add('movie');
                formListMovie.innerHTML =`
                <div class="col-12 col-sm-6 col-md-3 py-3">
                    <div class="card" >
                    <img src="${poster_path ? IMG_URL + poster_path : "/ ujr5pztc1oitbe7ViMUOilFaJ7s.jpg"}" alt = "${title}">
                    <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text"> ${vote_average}</p>
                    <p class="stok">${release_date}</p>
                    </div>
                    </div>
                </div>
                `
                album.appendChild(formListMovie);
        })

}


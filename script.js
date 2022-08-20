// fetch('https://api.themoviedb.org/3/discover/movie?api_key=50cbb0191a40a4e02aca0c7719a71e39&sort_by=popularity.desc')
// .then(response => response.json())
// .then(data => console.log(data.results)) 


const API_KEY = 'api_key=50cbb0191a40a4e02aca0c7719a71e39';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

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
                <div class="col-10 mt-3">
                <div class="card box-shadow">
                    <img class="card-img-top" src="${poster_path ? IMG_URL + poster_path : "/ ujr5pztc1oitbe7ViMUOilFaJ7s.jpg"}" alt = "${title}" >
                <div class="card-body">
                    <p class="title">${title}</p>
                    <div class="d-flex justify-content-between align-items-center ${id}">
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop">
                                Deskripsi Film
                            </button>
                        </div>
                        
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="deskripsi">Deskripsi Film</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" >
                                        <p class="card-text">${overview}</p>
                                    </div>
                                    <div class="modal-header">
                                        <h5 class="modal-title">Rating Film</h5>
                                    </div>
                                    <div class="modal-body">
                                        <p class="card-text overview" id="vote_average">${vote_average}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                         <button type="button" class="btn btn-primary">Understood</button> 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <small class="small">${release_date}</small>
                    </div>
                </div>
                </div >
            </div >
                `
                album.appendChild(formListMovie);
        })

}



import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Movies } from './movies-older.js';

let movieObj;
let currentMovie;
$(document).ready(function () {
  movieObj = new Movies();
  attachMovieListeners(); 

  $("#showFMovieList").click(function () {
    showFavoriteMovieList(movieObj);
    $("#fMovieList").toggle();
  });

  $("#details").on("click", "button", function () {
    $("#details").hide();
    $('#results').hide();
  });
  
  $("#details").on("click", "label", function () {
    $("#details").hide();
    movieObj.addfavoriteMovieList(currentMovie);
  });

  $("#details").on("click", "a", function () {
    $('#results').hide();
    $("#details").show();
  });

  $('#movie-title').click(function () {
    $(".search-msg").show();
    $("#details").html("");
    $("#results").html("");
    $("#fMovieList").html("");
    $("#results").show();

    let title = $('#movie').val();
    $('#movie').val("");

    (async () => {
      const response = await movieObj.getMoviebyTitle(title);
      getElements(response);
      showNumOfResults(response);
    })();

    function showNumOfResults(response) {
      $('#num-of-results').text(`${response.results.length}`);
    }
    function getElements(response) {
      if (response) {
        let htmlInfo;
          for (let i = 0; i < response.results.length; i++) {
            htmlInfo = `<a id="${response.results[i].id}" href="#">                        
                             <div class="card2">
                             <h5 class="title-result">${response.results[i].original_title}</h5>   
                                <img class="card-img-top1" src="https://image.tmdb.org/t/p/w94_and_h141_bestv2${response.results[i].poster_path}" style="width: 9rem" alt="Card image cap">
                                <p class="year-title">Year :${response.results[i].release_date}</p>
                             </div>     
                        </a>`
              $('#results').append(`${htmlInfo}`);
        }
      } else {
        $('#results').text(`There was an error handling your request.`);
      }
    }
  });
});

function attachMovieListeners() {

  $("#results").on("click", "a", function (event) {
    $("#results").hide();
    $("#fMovieList").hide();
    $("#details").show();
    event.preventDefault();

    (async () => {
      const response = await movieObj.displayDetailPage(this.id);
      getDetails(response);
    })();

    function getDetails(response) {
      if (response) {
        currentMovie = response;
        let movieInfo="";
        console.log(currentMovie);

        movieInfo += `<div class="row">
        <div class="col-sm-3.2">
          <div class="card-image">
            <img class="card-img-top" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2${response.backdrop_path}" style = "width: 25rem" alt="Card image cap"/>
            <div class="card-body">
            </div>
          </div>
        </div>
        
        <div class="col-sm-6">
          <div class="card card1">
            <div class="card-body">
              <h5 class="card-title">${response.original_title}</h5>
              <p id="text-year">Year :${response.release_date}</p>
              <p class="card-text">${response.overview}</p>
              <input id="favoriteMovieList toggle-heart" type="checkbox" />
              <label for="favoriteMovieList toggle-heart">❤</label>
              <button type="button" class="btn btn-primary" id="backToList">Back</button>          
            </div>
          </div>
        </div> 
      </div>`
        $('#details').html(`${movieInfo}`);
      } else {
        $('#details').text(`There was an error handling your request.`);
      }
    }
  })
}

function showFavoriteMovieList(movieObj) {
  let movieListInfo = "";
  movieObj.favoriteMovieList.forEach(function (movie) {
    movieListInfo += `<div class="row">
    <div class="col-sm-3.2">
      <div class="card-image">
        <img class="card-img-top" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.backdrop_path}"style="width: 25rem" alt="Card image cap"/>
      </div>
    </div>
    
    <div class="col-sm-6">
      <div class="card card1">
        <div class="card-body">
          <h5 class="card-title">${movie.original_title}</h5>
          <p id="text-year">Year :${movie.release_date}</p>
          <p class="card-text">${movie.overview}</p>      
        </div>
      </div>
    </div>
  </div>`
    $("#fMovieList").html(movieListInfo);
  });
}

{/* <button type="button" class="heart" id="favoriteMoveiList">Add To Your Favorites</button> */ }


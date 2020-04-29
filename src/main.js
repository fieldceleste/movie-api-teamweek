import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Movies } from './movies-older.js';


let movieObj;
let currentMovie;
$(document).ready(function(){
  movieObj = new Movies();
  attachMovieListeners();

  $("#showFMovieList").click(function(){
    showFavoriteMovieList(movieObj);
    $("#fMovieList").toggle();
  });
  
  $("#details").on("click", "button",function(){
    $("#details").hide();
    console.log(currentMovie)
    movieObj.addfavoriteMovieList(currentMovie);
  });

// show movie list
  $('#movie-title').click(function () {
    $("#details").html("");
    $("#results").html("");
    $("#fMovieList").html("");
    
    $("#results").show();
    
    let title = $('#movie').val();
    $('#movie').val("");
    
    (async () => {
      //let movieTitle = new Movies();
      const response = await movieObj.getMoviebyTitle(title);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        let htmlInfo;
        for (let i = 0; i < response.results.length; i++) { 
                                               
          htmlInfo = `<div class="p-2 border d-flex flex-wrap align-content-center bg-light">
                  <h5><a id="${response.results[i].id}" href="#">${response.results[i].original_title}</h5>
                  <div class="card">    
                    <p>Year :${response.results[i].release_date}</p>
                    <img class="card-img-top" src="https://image.tmdb.org/t/p/w94_and_h141_bestv2${response.results[i].poster_path}" style="width: 7rem" alt="Card image cap">
                  </div></a>
              </div>` 
             
           $('#results').append(`${htmlInfo}`);
        
        }
      } else {
        $('#results').text(`There was an error handling your request.`);
      }
    }
  });
});
  
//get movie details
  function attachMovieListeners() {
    
  $(".movieList").on("click","a", function(event) {
    $("#results").hide();
    $("#fMovieList").hide();
    $("#details").show();
    event.preventDefault();
    
    (async () => {
      const response = await movieObj.displayDetailPage(this.id);
      getDetails(response);
    })();

    
    function getDetails(response) {
      // let movieInfo;
      if (response) {
        currentMovie = response;
        console.log(response.original_title + " ----response.original_title");
        //movieObj.addfavoriteMovieList(response);
        //showFavoriteMovieList(movieObj);

        let movieInfo = `<div class="p-2 border d-flex flex-wrap align-content-center bg-light">
                <div class="card"><h5>${response.original_title}</h5>   
                  <p>Year :${response.release_date}</p>
                  <img class="card-img-top" src="https://image.tmdb.org/t/p/w94_and_h141_bestv2${response.poster_path}" style="width: 18rem" alt="Card image cap"/>
                  <button type="button" class="btn btn-primary" id="favoriteMoveiList">Add To Your Favorite Movie List</button>        
                  </div>
              </div>` 
            $('#details').html(`${movieInfo}`);
        } else {
        $('#details').text(`There was an error handling your request.`);
      }
    }
  })
  }  

  function showFavoriteMovieList(movieObj){
    let movieListInfo="";
    movieObj.favoriteMovieList.forEach(function(movie){
      
      movieListInfo =  `<div class="p-2 border d-flex flex-wrap align-content-center bg-light"><br>
              <div class="card">
                <h3> Favorite Movei List</h3>
                <h5>${movie.original_title}</h5>   
                <p>Year :${movie.release_date}</p>
                <img class="card-img-top" src="https://image.tmdb.org/t/p/w94_and_h141_bestv2${movie.poster_path}" style="width: 18rem" alt="Card image cap">
              </div>
            </div>` 
          $("#fMovieList").append(movieListInfo);
    });
  }



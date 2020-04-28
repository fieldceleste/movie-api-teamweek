import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Movies } from './movies-older.js';

$(document).ready(function () {

// diplayDeatils
  $("#result").click(function(){
    let value = $("#result").val(); 

    (async () => {
      let movie = new Movies();
      const response = await movie.displayDetailPage(value);
      getElements(response);
      console.log(response.results);
    })();

    function getElements(response) {
      if (response) {
        let htmlInfo;
        for (let i = 0; i < response.results.length; i++) {
          htmlInfo = `<div class="p-2 border d-flex flex-wrap align-content-center bg-light" ><h5><a href="https://www.themoviedb.org/movie/${response.results[i]}"><p>${response.results[i].original_title}</p></h5>
                        <div class="card"">    
                          <p>Year :${response.results[i].release_date}</p>
                          <img class="card-img-top" src="https://image.tmdb.org/t/p/w94_and_h141_bestv2${response.results[i].poster_path}" style="width: 7rem" alt="Card image cap">
                        </div>
                     </div></a>` 
           $('#results').append(`${htmlInfo}`);
        }
      } else {
        $('#results').text(`There was an error handling your request.`);
      }
    }
  });
//end display Details

// show movie list
  $('#movie-title').click(function () {
    let title = $('#movie').val();
    $('#movie').val("");

    (async () => {
      let movieTitle = new Movies();
      const response = await movieTitle.getMoviebyTitle(title);
      getElements(response);
      console.log(response.results);
    })();
    
    function getElements(response) {
      if (response) {
        let htmlInfo;
        for (let i = 0; i < response.results.length; i++) {
          htmlInfo = `<div class="p-2 border d-flex flex-wrap align-content-center bg-light"><h5><a href="https://www.themoviedb.org/movie/${response.results[i]}"><p>${response.results[i].original_title}</p></h5>
                        <div class="card"">    
                          <p>Year :${response.results[i].release_date}</p>
                          <img class="card-img-top" src="https://image.tmdb.org/t/p/w94_and_h141_bestv2${response.results[i].poster_path}" style="width: 7rem" alt="Card image cap">
                        </div>
                     </div></a>` 
           $('#results').append(`${htmlInfo}`);

        }
      } else {
        $('#results').text(`There was an error handling your request.`);
      }
    }
  });

});



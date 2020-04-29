import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Movies } from './movies-older.js';

$(document).ready(function(){
  
  console.log("value")
  attachMovieListeners();
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
      console.log('line 26 response: ', response)
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
function attachMovieListeners() {
   console.log("value2"); 
  $(".movieList").on("click","a", function(event) {
    $("#results").hide();
    event.preventDefault();
    
    (async () => {
      let movieDetails = new Movies();
      console.log("value1 " + this.id)
      const response = await movieDetails.displayDetailPage(this.id);
      
      getDetails(response);
      
    })();

    

    function getDetails(response) {
     // let movieInfo;
      if (response) {
        let movieInfo =  `<div class="p-2 border d-flex flex-wrap align-content-center bg-light"><br>
                            <div class="card">
                              <h5>${response.original_title}</h5>   
                              <p>Year :${response.release_date}</p>
                              <img class="card-img-top" src="https://image.tmdb.org/t/p/w94_and_h141_bestv2${response.poster_path}" style="width: 18rem" alt="Card image cap">
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

//https://api.themoviedb.org/3/movie/${response.results[i].id}

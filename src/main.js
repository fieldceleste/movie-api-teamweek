import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Movies } from './movies-older.js';
import { MovieImages } from './movies-image.js';



$(document).ready(function () {
  $('#movie-results').click(function () {
    let title = $('#movie').val();
    let movieId = $("movie").val();
    $('#movie').val("");

    (async () => {
      let movieTitle = new Movies();
      const response = await movieTitle.getMoviebyTitle(title);
      getElements(response, title);
      movieIdArr(response);
      
      console.log(movieId);
    })();

    function getElements(response, title) {
      console.log(title);
      if (response) {
        for (let i = 0; i < response.results.length; i++) {
          $('#results-title').append(`<li id =${response.results[i].id}>${response.results[i].original_title}</li>`);
          $("#results-img").append(`<img src="" alt="photo here">`);
        }
      } else {
        $('#results').text(`There was an error handling your request.`);
      }
    }
    function movieIdArr(response) {
      let Arr = [];
      if (response) {
        for (let i = 0; i < response.results.length; i++) {
          Arr.push(response.results[i].id);
        }
        return Arr;
      }
    }

    (async () => {
      let movieImg = new MovieImages();
      const imageResponse = await movieImg.getMovieImage(684139);
      dispImg(imageResponse);
    })();
    function dispImg(response) {
      console.log(response);
      if (response) {
        $("#results-img").html(`<img src=${response.backdrops.posters} alt="photo here">`);
      }
    }


    // $('.images').html(`<img src = ${animalResponse.photos[0].src.medium} id = ${id}>`);


  });
});



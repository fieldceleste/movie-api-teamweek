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
//----------Movie Title Function--------------------------------------------
    (async () => {
      let movieTitle = new Movies();
      const response = await movieTitle.getMoviebyTitle(title);
      getElements(response, title);
      movieIdArr(response);
      
      console.log(movieId); //---Undefined
    })();

    function getElements(response, title) {
      console.log(title); //-----Working
      if (response) {
        for (let i = 0; i < response.results.length; i++) {
          $('#results-title').append(`<li id =${response.results[i].id}>${response.results[i].original_title}</li>`);
          Img(response.results[i].id);
        }
      } else {
        $('#results').text(`There was an error handling your request.`);
      }
    }
    //---------End of Movie Title-----------------------------------------------
    function movieIdArr(response) {
      console.log(response); //---showing array of image details
      let Arr = [];
      if (response) {
        for (let i = 0; i < response.results.length; i++) {
          Arr.push(response.results[i].id);
          // console.log(Arr);
        }
        return Arr;
      }
    }

    function Img (movieId){
      (async () => {
        let movieImg = new MovieImages();
        const imageResponse = await movieImg.getMovieImage(movieId); //use movieIdArr to push each id in here
        console.log(movieId);//------Undefined
        // movieIdArr(imageResponse); //[346765, 2343453, 345234]  --maybe add movieId
        dispImg(imageResponse);
      })();
  
      function dispImg(response) {
        if (response) {
          console.log(response); //----Getting object  
          $("#results-title").append(`<img src="https://image.tmdb.org/t/p/w94_and_h141_bestv2${response.posters[0].file_path}">`);
        }
      }
    }


    // $('.images').html(`<img src = ${animalResponse.photos[0].src.medium} id = ${id}>`);


  });
});



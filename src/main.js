import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Movies } from './movies-older.js';
// import { MovieImages } from './movies-image.js';



$(document).ready(function () {
  $('#movie-title').click(function () {
    let title = $('#movie').val();
    $('#movie').val("");

    (async () => {
      let movieTitle = new Movies();
      const response = await movieTitle.getMoviebyTitle(title);
      getElements(response, title);
      getMovieId(response); 
      console.log(response.results);
    })();

    function getElements(response, title) {
      console.log(response,title);
      if (response) {
        console.log(response,title);
        for (let i = 0; i < response.results.length; i++) {
          $('#results').append(`<li id =${response.results[i].id}>${response.results[i].original_title}</li>`);         
        }
      } else {
        $('#results').text(`There was an error handling your request.`);
      }
    }

    function getMovieId (response){
      if (response) {
        console.log(response.results[0].id);
      }
    }


// response.results[i].id = 234897654

    // (async () => {
    //   let movieImage = new MovieImages();
    //   const response = await movieImage.getMovieImages(movieId);
    //   getImg(response, movieId);
    //   // console.log(response.movieId);
    // })();
    // function getImg(response, movieId) {
    //   console.log(response,movieId);
    //   if (response) {
    //     console.log(response,movieId);
    //     for (let i = 0; i < response.movieId.length; i++) {
    //       // if (response.results.includes(title)) {
    //       // console.log("val");
    //       // }
    //       $('#results').append(`<li>${response.posters}</li>`);         
    //     }
    //   } else {
    //     $('#results').text(`There was an error handling your request.`);
    //   }
    // }


  });

  
});



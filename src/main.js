import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Movies } from './movies-older.js';


$(document).ready(function () {
  $('#movie-results').click(function () {
    let title = $('#movie').val();
    $('#movie').val("");

    (async () => {
      let movieTitle = new Movies();
      const response = await movieTitle.getMoviebyTitle(title);
      getElements(response, title);
    })();

    function getElements(response) {
      if (response) {
        const respResults = response.results;
        for (let i = 0; i < respResults.length; i++) {
          $('#results-title').append(`<li id =${respResults[i].id}> <img src="https://image.tmdb.org/t/p/w94_and_h141_bestv2${respResults[i].poster_path}"> ${respResults[i].original_title} </li>`);
        }
      } else {
        $('#results').text(`There was an error handling your request.`);
      }
    }
  });
});

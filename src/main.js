import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Movies } from './movies-older.js';

$(document).ready(function() {
  $('#movie-title').click(function() {
    let title = $('#movie').val();
    $('#movie').val("");

    (async () => {
      let movieTitle = new Movies();
      const response = await movieTitle.getMoviebyTitle(title);
      getElements(response,title);
      console.log(response.results);
    })();

    function getElements(response, title) {
      console.log(response, title)
      if (response) {
        console.log(response, title)
        for (let i = 0; i<response.results.length; i++){
          if(response.results.includes(title)){
            console.log(response.results[i].original_title + " --------");
            $('#results').append(`${response.results[0].original_title}`);
          }
        } 
       } else {
        $('#results').text(`There was an error handling your request.`);
     
      }
    }
  });
});


// getTitle(respons,title){
//   for(let i=0;i<respons.length;i++){
//   if(respons.results[i].title === title){
  
//      return respons.results[i];
//   }
  
//   }
// }
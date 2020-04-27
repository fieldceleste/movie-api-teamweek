export class MovieImages {

 async getMovieImage(movieId) {
  let jsonifiedResponse;
  try {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${process.env.API_KEY}&language}=en-US`);
    if (response.ok && response.status == 200) {
      jsonifiedResponse = await response.json();
    } else {
      jsonifiedResponse = false;
    }
  } catch (error) {
    return false;
  }
  return jsonifiedResponse;
}

}
// https://api.themoviedb.org/3/movie/338762/images?api_key=ced83ccd2ee66a3e7d710304f25a076f&language=en-US
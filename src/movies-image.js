export class MovieImages {

 async getMovieImage(movieId) {
  let jsonifiedResponse;
  try {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${process.env.API_KEY}&language}=en-US&append_to_response=images`);
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
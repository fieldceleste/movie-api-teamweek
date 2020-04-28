export class Movies {
  async getMoviebyTitle(title) {
    let jsonifiedResponse;
    try {
      let response = await fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${process.env.api_key}&query=${title}`);
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






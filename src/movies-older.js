export class Movies {
  async getMoviebyTitle(title) {
    let jsonifiedResponse;
    try {
      let response = await fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${process.env.API_KEY}&query=${title}`);
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



//http://api.themoviedb.org/3/search/movie?api_key=ced83ccd2ee66a3e7d710304f25a076f&query=Fight%20Club

// `https://api.themoviedb.org/3/search/movie/?${process.env.API_KEY}&query=${title}`);
// https://api.themoviedb.org/3/search/movie/?api_key=ced83ccd2ee66a3e7d710304f25a076f&query=les miserables

//https://api.themoviedb.org/3/movie/550?api_key=ced83ccd2ee66a3e7d710304f25a076f

// https://api.themoviedb.org/3/search/movie/?api_key=ced83ccd2ee66a3e7d710304f25a076f&query=string  

// https://api.themoviedb.org/3/search/movie/?api_key=ced83ccd2ee66a3e7d710304f25a076f&query=fight%club 

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1

// https://api.themoviedb.org/3/search/movie/?api_key=ced83ccd2ee66a3e7d710304f25a076f&query=avengers



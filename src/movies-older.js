export class Movies {

  constructor(){
    this.favoriteMovieList = [];
  }
  
  addfavoriteMovieList(response){
    this.favoriteMovieList.push(response);
  }

  

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


  async displayDetailPage(id) {
    let jsonifiedResponse;
    try {
      let response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.api_key}`);
   
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


  
  // displayDetailPage() {

    
  //   if (htmlInfo === "none") {
  //     htmlInfo = "block";
  //   } else {
  //     htmlInfo = "none";
  //   }
  // }




  
}






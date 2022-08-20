
import axios from 'axios';

const movieApiurl = 'http://www.omdbapi.com';

export async function  getMovieById(Id) {
    
    if (Id === null)
      console.error("Must pass movie Id " );

    var params = new URLSearchParams();
    params.append("apikey", '18a01f17');
    params.append("i",  Id);
    var request = { params: params };
    
    await axios.get(movieApiurl , request)
      .then(resp => {
        console.log("Response Data -> " + resp.data.Title);
        return resp.data;
    })
    .catch(err => {
        // Error Handle
        console.error("Error -> " + err);
    }).finally(() => {
    });
    }

    
export async function  getAllMovies() {
 
  var params = new URLSearchParams();
  params.append("apikey", '18a01f17');
  params.append("s",  'movie');
  params.append("page",  1);
  
  var request = { params: params };
  
  await axios.get(movieApiurl , request)
    .then(resp => {
      console.log("getAllMovies response list -> " + resp.data.Search);
      
      return resp.data.Search;
  })
  .catch(err => {
      // Handle Error Here
      console.error("Error " + err);
  }).finally(() => {
  });
  }

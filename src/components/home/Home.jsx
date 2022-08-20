import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieListing from "../movieListing/MovieListing";
import SerchIcon from "./search.svg";
import "./home.scss";
import { useSelector, useDispatch } from "react-redux";
import { setBoxOfficeMovies } from "../../redux/movieSlice";
import MovieModal from "../movieModal/MovieModal";

function Home() {
  const [movies, setMovies] = useState([]);
  const [originalmovielist, setOriginalmovies] = useState([]);
  const [moviesInTheaters, setMoviesInTheaters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const moviesStore = useSelector((state) => state);
  const dispatch = useDispatch();
  const[open, setOpen] = useState(false);
  const[movieId, setMovieId] = useState('');

  const baseUrl = "https://z7wi4gpnd6.execute-api.us-east-1.amazonaws.com/stage/recommendedmovies1";
  const baseUrlBOXOffice= "https://s3fg8dpp37.execute-api.us-east-1.amazonaws.com/stage/boxofficemovies";
  const theatherMovies = "https://3pc0qac8vi.execute-api.us-east-1.amazonaws.com/stage/intheatersmovies";
  const recommendMovies="https://z6mb46uo8i.execute-api.us-east-1.amazonaws.com/stage/recommendedmovies";


  useEffect(() => {
    getMovies();
    getBoxOfficeMovies();
    getMoviesInTheaters();
   
  }, []);

  const getMovies = () => {
    var params = new URLSearchParams();
    params.append("apikey", "18a01f17");
    params.append("s", "batman");
    params.append("page", 1);

    var request = { params: params };

    axios
      .get(process.env.REACT_APP_AWS_URL, request)
      .then((resp) => {
        console.log("getAllMovies count -> " + resp.data.Search.length);
        setMovies(resp.data.Search);
        setOriginalmovies(resp.data.Search);
      })
      .catch((err) => {
        console.error("Error " + err);
      });
  };

  const getMoviesfromAws = () => {
    axios
      .get(baseUrl)
      .then((resp) => {
        console.log("AWS MOVIES COUNT -> " + resp.data.Search);
        resp.data.Search.forEach(element => {
          console.log(element.Title)
          
        });
        
      })
      .catch((err) => {
        console.error("Error " + err);
      });
  };

  const getMoviesfromAws1 = () => {
    axios
      .get(recommendMovies)
      .then((resp) => {
        console.log("AWS Recommend Movies-> " + resp.data.Search);
        resp.data.Search.forEach(element => {
          console.log(element.Title)
          
        });
        
      })
      .catch((err) => {
        console.error("Error " + err);
      });
  };
  const getBoxOfficeMoviesAWS = () => {
    axios
      .get(baseUrlBOXOffice)
      .then((resp) => {
        console.log("AWS BoxOffice Movies  -> " + resp);
        resp.data.items.forEach(element => {
          console.log(element.title)
          
        });
        
      })
      .catch((err) => {
        console.error("Error " + err);
      });
  };

  const getMoviesInTheaterAWS = () => {
    axios
      .get(theatherMovies)
      .then((resp) => {
        console.log("AWS Theater Movies  -> " + resp);
        resp.data.items.forEach(element => {
          console.log(element.title)
          
        });
        
      })
      .catch((err) => {
        console.error("Error " + err);
      });
  };

  const getMoviesInTheaters = () => {
    axios
      .get(process.env.REACT_APP_INTHEATERS_URL)
      .then((resp) => {
        console.log("getMoviesInTheaters count -> " + resp.data.items.length);
        setMoviesInTheaters(resp.data.items);
      })
      .catch((err) => {
        console.error("Error " + err);
      });
  };

  const getMoviesbysearchTerm = (searchTerm) => {
    let filterlist = movies.filter((value) => {
      return value.Title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setMovies(filterlist);
  };

  const getBoxOfficeMovies = () => {
    if (moviesStore.movieReducer.boxOfficeMovies.length === 0) {
      axios
        .get(process.env.REACT_APP_BOXOFFICE_URL)
        .then((resp) => {
          console.log("Boxoffice Movies list -> " + resp.data.items);
          dispatch(setBoxOfficeMovies(resp.data.items));
        })
        .catch((err) => {
          console.error("Error " + err);
        });
    }
  };

  const getMovieTrailerObj = (imdbID) => {
    axios.get(process.env.REACT_APP_TRAILER_URL + imdbID)
    .then(resp => {
      console.log("getMovie Trailer response -> " + resp.data.videoTitle);
      setMovieId(resp.data.linkEmbed);
  })
    .catch(err => {
         console.error("Error " + err);
    })
  } 

  const showTrailerModel = (imdb) => {
    console.log("Clicked: "+ imdb);
    setOpen(true);
    getMovieTrailerObj(imdb)
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className="Movielist">
      <div style={{ background: "#0f171e" }}>
        <div className="search">
          <input
            placeholder="Search for Movies"
            value={searchTerm}
            onChange={(e) => {
              if (e.target.value.trim().length === 0) {
                console.log("movies", originalmovielist);
                setMovies(originalmovielist);
              } else {
                getMoviesbysearchTerm(e.target.value);
              }

              setSearchTerm(e.target.value);
            }}
          />
          <img src={SerchIcon} alt="search" />
        </div>

        <MovieListing
          movies={movies}
          sectiontitle={"Recommended Movies"}
          showTrailer={showTrailerModel}
        ></MovieListing>
        <MovieListing
          movies={moviesStore.movieReducer.boxOfficeMovies}
          sectiontitle={"Box Office"}
          showTrailer={showTrailerModel}
        ></MovieListing>
        <MovieListing
          movies={moviesInTheaters}
          sectiontitle={"In Theaters"}
          showTrailer={showTrailerModel}
        ></MovieListing>
        <MovieModal showModel={showTrailerModel} handleClose={handleClose} modalState={open} selectedMovieId = {movieId}/>

      </div>
    </div>
  );
}

export default Home;

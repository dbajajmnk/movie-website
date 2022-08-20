import React, { useEffect } from 'react';
import './movieDetail.scss';
import {useParams} from "react-router-dom";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setMovieTrailer, setSelectedMovie, setUserRatings } from '../../redux/movieSlice'
import MovieTrailer from '../movieTrailer/MovieTrailer';
import Rating from '../rating/rating';
import {Link} from "react-router-dom";
import UserRating from '../userRating/UserRating';
import { Grid } from '@mui/material';
import {LocalCacheHandler} from '../movieDetail/LocalCacheHandler'

const MovieDetail = () => {
    const store = useSelector((state) => state);
    const movieDetailObj = store.movieReducer.selectedMovie;
    const movieTrailer = store.movieReducer.movieTrailer;
    const userReviews = store.movieReducer.userRatings;
    const dispatch = useDispatch();
    const { imdbID } = useParams()
    useEffect(()=> {
      getMovieDetailObj();  
      getMovieTrailerObj(); 
      getUserRating();
    },[imdbID])
    
    const getMovieDetailObj = () => {
    let seletedObject = LocalCacheHandler.getMovieById(imdbID);
     console.log("Selected Object",seletedObject)
      if(seletedObject===undefined)
      {
      var params = new URLSearchParams();
      params.append("apikey", '18a01f17');
      params.append("i",  imdbID);
  
      var request = { params: params };
  
      axios.get(process.env.REACT_APP_OMDAPI_URL , request)
      .then(resp => {
        console.log("getMovieDetail response -> " + resp.data);
        LocalCacheHandler.addMovie(resp.data)
        dispatch(setSelectedMovie(resp.data))
      })
      .catch(err => {
           console.error("Error " + err);
      })
    }
    else{
      dispatch(setSelectedMovie(seletedObject))
    }
    }   
    
    
    const getMovieTrailerObj = () => {
    let seletedTrailerObject = LocalCacheHandler.getMovieTrailerById(imdbID);
     console.log("Selected  Trailer Object",seletedTrailerObject)
      if(seletedTrailerObject===undefined)
      {
      axios.get(process.env.REACT_APP_TRAILER_URL + imdbID)
      .then(resp => {
        console.log("getMovieTrailer response -> " + resp.data);
        LocalCacheHandler.addMovieTrailor(resp.data)
        dispatch(setMovieTrailer(resp.data))
    })
      .catch(err => {
           console.error("Error " + err);
      })
    }
    else{
      dispatch(setMovieTrailer(seletedTrailerObject))
    }
    }
    
    const getUserRating = () => {
     let seletedRatingObject = LocalCacheHandler.getMovieRatingById(imdbID);
     console.log("Selected Rating Object",seletedRatingObject)
      if(seletedRatingObject===undefined)
      {
      axios.get(process.env.REACT_APP_USERRATING_URL + imdbID)
      .then(resp => {
        console.log("getMovie Rating response -> " + resp.data);
        LocalCacheHandler.addMovieRating(resp.data)
        dispatch(setUserRatings(resp.data.items))
    })
      .catch(err => {
           console.error("Error " + err);
      })
    }
    else{
      dispatch(setUserRatings(seletedRatingObject.items))
    }
    }
    
    if(movieDetailObj && movieDetailObj.Ratings && userReviews) {
    return (<div className="movie-info">
            <div className="row-link">
              <Link to='/movie-website/'>Go to Home Page</Link>
            </div>
            <div className="row">
                <div className="movie-info">
                    <img className="img" src={movieDetailObj.Poster} alt="" />
                        <div className="card-body">
                            <h2 className="movie-info">{movieDetailObj.Title}</h2>
                        </div>
                </div>
                <div className="movie-info">
                    <div className="card-body">
                        <h3 className="movie-info">Rated : {movieDetailObj.Rated}</h3>
                        <h3 className="movie-info">Runtime : {movieDetailObj.Runtime}</h3>
                        <h3 className="movie-info">Genre : {movieDetailObj.Genre}</h3>
                        <h3 className="movie-info">Language : {movieDetailObj.Language}</h3>
                        <h3 className="movie-info">Director : {movieDetailObj.Writer}</h3>
                        <h3 className="movie-info">Year : {movieDetailObj.Year}</h3>
                        <h3 className="movie-info">Actors : {movieDetailObj.Actors}</h3>
                        <h3 className="movie-info">Plot : {movieDetailObj.Plot}</h3>
                    </div>
                </div>
                <div>
                <MovieTrailer embeddedLink={movieTrailer.linkEmbed}/>
                </div>
            </div>
            <div className="row">
              {movieDetailObj.Ratings.map(({ Source, Value}) => (
                <Rating title={Source} percent={(Math.floor(Math.random()*(100-1+1))+1)/100}/>
              ))} 
            </div>
            {userReviews.map((rating, index) => (<Grid item lg={6} sx={{ padding :2}}  key={index}> <UserRating key={index} rating={rating}/> </Grid> ))}
    </div> );
};}
export default MovieDetail;
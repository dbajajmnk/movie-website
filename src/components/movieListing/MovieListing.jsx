import { Grid } from '@mui/material'
import React from 'react'
import MovieCard from '../movieCard/MovieCard'
import '../movieListing/movieListing.scss'

const MovieListing = (props) => {
     if (props.movies && props.movies.length > 0) {
          return (
               <div style={{ color: 'white'}}> 
                    <h2> {props.sectiontitle}</h2>
                    <Grid container spacing={3} padding={2}>
                         {props.movies.map(function(movie, index) { 
                              var imageName, movieTypeValue, movieId, movieValue, movieYearValue, movieRating;
                              switch (props.sectiontitle) { 

                                   case "Box Office":
                                        imageName=movie.image;
                                        movieTypeValue = movie.gross;
                                        movieId=movie.id;
                                        movieValue = movie.title;
                                        movieYearValue = movie.rank; 
                                        break;  

                                   case "In Theaters":
                                        imageName=movie.image;
                                        movieTypeValue=movie.genres;
                                        movieId=movie.id;
                                        movieValue = movie.title;
                                        movieYearValue = movie.year; 
                                        movieRating = movie.imDbRating/2;
                                        break;  

                                  default:
                                        imageName=movie.Poster;     
                                        movieTypeValue=movie.Type;
                                        movieId=movie.imdbID;
                                        movieValue = movie.Title; 
                                        movieYearValue = movie.Year; 
                                        break;
                              }
                              return (
                              <Grid item lg={2} key={index}>
                                   <MovieCard imageName={imageName} movieValue={movieValue} movieYearValue={movieYearValue} 
                                   movieTypeValue={movieTypeValue}  movieId={movieId} movieRatingValue={movieRating}
                                   showTrailer={props.showTrailer} ></MovieCard>
                              </Grid> )
                         })}
                    </Grid>
               </div>
          )
     } else {
          return(
               <div className='Nodatafound'>
               <h1>No movies found</h1>
               </div>
          )
     }
  }

export default MovieListing

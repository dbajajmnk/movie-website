import React from 'react'
import { Link } from 'react-router-dom';
import './movieCard.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RatingIcon from '@mui/material/Rating'

  const MovieCard =(props)=> {
    return (
     <div id=''>
       <div className="container">
          <div className='movie'>
            <div>
              <p>{props.movieYearValue}</p>
            </div>
            <div>
            <Link to={`movie/${props.movieId}`}><img src={props.imageName} alt={props.movieValue}/></Link>
            </div>
            <div>
               <span>{props.movieTypeValue}  <RatingIcon defaultValue={props.movieRatingValue} readOnly/></span>
               <h3>Title: {props.movieValue} <PlayArrowIcon onClick={event => props.showTrailer(props.movieId)} fontSize="small" style={{ color: "white" }} /></h3>
               <span></span>
            </div>
           </div> 
         </div>
      </div>
       
       )
  }


export default MovieCard
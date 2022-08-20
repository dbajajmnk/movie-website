import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    movies: [],
    selectedMovie: {},
    boxOfficeMovies:[],
    movieTrailer:{},
    userRatings:[]
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setSelectedMovie:(state, {payload}) => {
            state.selectedMovie = payload;
        },
        setBoxOfficeMovies:(state, {payload}) => {
            state.boxOfficeMovies = payload;
        },
        setMovieTrailer:(state, {payload}) => {
            state.movieTrailer = payload;
        },
        setUserRatings:(state, {payload}) => {
            state.userRatings = payload;
        }
 
    },
});

export const { setSelectedMovie } = movieSlice.actions;
export const getSelectedMovie = (state) => state.selectedMovie;
export const { setMovieTrailer } = movieSlice.actions;
export const getMovieTrailer = (state) => state.movieTrailer;
export const { setBoxOfficeMovies } = movieSlice.actions;
export const getBoxOfficeMovies = (state) => state.boxOfficeMovies;
export const { setUserRatings } = movieSlice.actions;
export const getUserRatings = (state) => state.userRatings;

export default movieSlice.reducer;
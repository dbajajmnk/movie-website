import { render, screen } from '@testing-library/react';
import MovieCard from '../MovieCard';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
let movie = null
let route= null
beforeAll(() =>{
   
   movie = {
    "Title": "Harry Potter and the Deathly Hallows: Part 2",
    "Year": "2011",
    "imdbID": "tt1201607",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
  }
  route = `movie/${movie}`;
})

test('renders title', () => {
  render(<MemoryRouter initialEntries={[route]}
    >
    <MovieCard  movieValue={movie.Title} ></MovieCard>
     </MemoryRouter>);

  
  const titleElement = screen.getByText("Title: " +movie.Title);
  expect(titleElement).toBeInTheDocument();
});

test('renders year', () => {
    
    render(<MemoryRouter initialEntries={[route]}
    >
    <MovieCard  movieYearValue={movie.Year}
     ></MovieCard>
     </MemoryRouter>);
    const titleyear = screen.getByText(movie.Year);
    expect(titleyear).toBeInTheDocument();
  });

  test('renders poster', () => {
   
    render(<MemoryRouter initialEntries={[route]}
      >
      <MovieCard imageName={movie.Poster} movieValue={movie.Title} ></MovieCard>
       </MemoryRouter>);
      const Poster = screen.getByAltText(movie.Title);
      expect(Poster).toBeInTheDocument();
    });

    test('renders type', () => {
   
      render(<MemoryRouter initialEntries={[route]}
        >
        <MovieCard movieTypeValue={movie.Type} ></MovieCard>
         </MemoryRouter>);
      const Type = screen.getByText(movie.Type);
      expect(Type).toBeInTheDocument();
    });
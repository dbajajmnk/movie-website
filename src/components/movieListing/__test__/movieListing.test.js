import { render, screen } from '@testing-library/react';
import MovieListing from '../movieListing';
import '@testing-library/jest-dom/extend-expect';

function showTrailerModel () {
}

let movie = null
let nomovie = 'No movies found'

test('renders No Movies', () => {
  render(
        <MovieListing
        movies={movie}
        sectiontitle={"Recommended Movies"}
        showTrailer={showTrailerModel}
      ></MovieListing>
  )
  const movieElement = screen.getByText(nomovie);
  expect(movieElement).toBeInTheDocument();
});


import { render, screen } from '@testing-library/react';
import MovieTrailer from '../movieTrailer';
import '@testing-library/jest-dom/extend-expect';

const linkEmbed = "https://www.imdb.com/video/imdb/vi2959588889/imdb/embed"
test('renders trailer', () => {
    render(
          <MovieTrailer embeddedLink={linkEmbed}/>
    )
    const trailerElement = screen.getByTestId('trailer');
    expect(trailerElement).toBeInTheDocument();
  });
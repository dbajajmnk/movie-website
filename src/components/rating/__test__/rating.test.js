import { render, screen } from '@testing-library/react';
import Rating from '../rating';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
let Source = null

beforeAll(() =>{
  Source=
  {
    "title": "Internet Movie Database",
    "percent": .36
  }
  
})

test('renders rating', () => {
  render(<Rating title={Source.title} percent={(Source.percent)}/>);

  const ratingeElement = screen.getByText((Source.percent*100)+'%');
  expect(ratingeElement).toBeInTheDocument();
});

test('renders title', () => {
  render(<Rating title={Source.title} percent={(Source.percent)}>
  </Rating>);

  const element = screen.getByText(Source.title);
  expect(element).toBeInTheDocument();
});




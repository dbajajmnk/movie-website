import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders App Component', () => {
  const component = render(<App />);
});

test('renders Header Component in the document', () => {
  const component = render(<App />);
  const childHeaderElement = component.getByText("Movie Catalog");
  expect(childHeaderElement).toBeInTheDocument();
});

test('renders Footer Component in the document', () => {
  const component = render(<App />);
  const childFooterElement= component.getByTestId('footer-id');
  expect(childFooterElement).toBeInTheDocument();
});

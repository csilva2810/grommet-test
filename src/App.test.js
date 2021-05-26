import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the form with name field', () => {
  render(<App />);
  const name = screen.getByText(/name/i);
  expect(name).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import Register from './Register';

test('Checks User Name Input', () => {
  render(<Register />);
  const userName = screen.getByPlaceholderText(/@User-Name/i);
  expect(userName).toBeInTheDocument();
});

test('Checks For Email Input', () => {
    render(<Register />);
    const email = screen.getByPlaceholderText(/Email/i);
    expect(email).toBeInTheDocument();
});

test('Checks Submit Button', () => {
    render(<Register />);
    const button = screen.getByText(/submit/i);
    expect(button).toBeInTheDocument();
});
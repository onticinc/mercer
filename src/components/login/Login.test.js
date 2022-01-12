import { render, screen } from '@testing-library/react';
import Login from './Login';

test('Check For Email Input', () => {
    render(<Login />);
    const email = screen.getByPlaceholderText(/hello@example.com/i);
    expect(email).toBeInTheDocument();
});

test('Check Password Input', () => {
    render(<Login />);
    const password = screen.getByPlaceholderText(/Password/i);
    expect(password).toBeInTheDocument();
  });

test('Check For Submit Button', () => {
    render(<Login />);
    const loginButton = screen.getByText(/Login/i);
    expect(loginButton).toBeInTheDocument();
});

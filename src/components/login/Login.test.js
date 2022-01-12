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

test('Check Submit Button', () => {
    render(<Login />);
    const loginButton = screen.getByText(/Login/i);
    expect(loginButton).toBeInTheDocument();
});

test('Check Remember Me Checkbox', () => {
    render(<Login />);
    const loginButton = screen.getByText(/Remember Me:/i);
    expect(loginButton).toBeInTheDocument();
});
import { render, screen } from '@testing-library/react';
import Signup from './Signup';


test('Check Name Input', () => {
    render(<Signup />);
    const email = screen.getByPlaceholderText(/Name/i);
    expect(email).toBeInTheDocument();
  });

test('Check Profile Picture', () => {
    render(<Signup />);
    const profilePic = screen.getByPlaceholderText(/Profile Picture URL/i);
    expect(profilePic).toBeInTheDocument();
});

test('Check Email Input', () => {
    render(<Signup />);
    const profilePic = screen.getByPlaceholderText(/Email/i);
    expect(profilePic).toBeInTheDocument();
});

test('Check Address', () => {
    render(<Signup />);
    const addressInput = screen.getByPlaceholderText(/Address/i);
    expect(addressInput).toBeInTheDocument();
});

test('Check Phone Number Input', () => {
    render(<Signup />);
    const phoneInput = screen.getByPlaceholderText(/Phone Number/i);
    expect(phoneInput).toBeInTheDocument();
});

test('Check Password', () => {
    render(<Signup />);
    const password = screen.getByPlaceholderText(/Password/i);
    expect(password).toBeInTheDocument();
});

test('Check Confirm Password', () => {
    render(<Signup />);
    const confirmPassword = screen.getByPlaceholderText(/Confirm Password/i);
    expect(confirmPassword).toBeInTheDocument();
});
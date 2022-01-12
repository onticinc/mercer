import { render, screen } from '@testing-library/react';
import CreateSale from './CreateSale';

test('Check For Sale Name Input', () => {
    render(<CreateSale />);
    const saleName = screen.getByPlaceholderText(/Sale Name/i);
    expect(saleName).toBeInTheDocument();
  });

test('Check For Location Input', () => {
    render(<CreateSale />);
    const location = screen.getByPlaceholderText(/Location/i);
    expect(location).toBeInTheDocument();
});

test('Check For Picture Url Input', () => {
    render(<CreateSale />);
    const pictureUrl = screen.getByPlaceholderText(/Picture URL/i);
    expect(pictureUrl).toBeInTheDocument();
});

test('Check For Description Input', () => {
    render(<CreateSale />);
    const description = screen.getByPlaceholderText(/Description/i);
    expect(description).toBeInTheDocument();
});

test('Check For Time Input', () => {
    render(<CreateSale />);
    const time = screen.getByPlaceholderText(/Time/i);
    expect(time).toBeInTheDocument();
});

test('Check For Date Input', () => {
    render(<CreateSale />);
    const date = screen.getByPlaceholderText(/Date/i);
    expect(date).toBeInTheDocument();
});


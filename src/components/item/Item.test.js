import { render, screen } from '@testing-library/react';
import NewItem from './NewItem';

test('Check For Item Name Input', () => {
    render(<NewItem />);
    const itemName = screen.getByPlaceholderText(/Item Name/i);
    expect(itemName).toBeInTheDocument();
});

test('Check for Item Price Input', () => {
    render(<NewItem />);
    const itemPrice = screen.getByPlaceholderText(/Item Price/i);
    expect(itemPrice).toBeInTheDocument();
  });

test('Check for Item Description Input', () => {
    render(<NewItem />);
    const itemDescription = screen.getByPlaceholderText(/Item Description/i);
    expect(itemDescription).toBeInTheDocument();
});

test('Check for Item Tags Input', () => {
    render(<NewItem />);
    const itemTags = screen.getByPlaceholderText(/Item Tags/i);
    expect(itemTags).toBeInTheDocument();
});

test('Check for Item Tags Input', () => {
    render(<NewItem />);
    const itemImage = screen.getByPlaceholderText(/Image Link/i);
    expect(itemImage).toBeInTheDocument();
});



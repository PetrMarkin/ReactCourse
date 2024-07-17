import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from '../components/Card/Card';
import { mockResults } from './mock';

const mockOnClick = vi.fn();
const mockItem = mockResults[0];

describe('Card component', () => {
  it('displays the correct card data', () => {
    render(<Card index={0} item={mockItem} onClick={mockOnClick} />);
    const cardNameElement = screen.getByText(mockItem.name);
    expect(cardNameElement).toBeInTheDocument();
  });

  it('opens detailed card component on click', () => {
    render(<Card index={0} item={mockItem} onClick={mockOnClick} />);
    const cardElement = screen.getByTestId('result-item');
    fireEvent.click(cardElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

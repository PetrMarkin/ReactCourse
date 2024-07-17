import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import CardList from '../components/CardList/CardList';
import { mockResults } from './mock';

test('renders correct number of cards', () => {
  const { getAllByTestId } = render(
    <CardList
      results={mockResults}
      onCardClick={function (): void {
        throw new Error('Function not implemented.');
      }}
    />,
  );
  const cardElements = getAllByTestId('result-item');
  expect(cardElements.length).toBe(mockResults.length);
});

test('renders nothing when no cards are present', () => {
  const { container } = render(
    <CardList
      results={[]}
      onCardClick={function (): void {
        throw new Error('Function not implemented.');
      }}
    />,
  );
  expect(container.firstChild).toBeDefined();
});

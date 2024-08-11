import { render, screen, waitFor } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import { fetchPersonDetails } from '../helpers/api';
import { useTheme } from '../helpers/Contexts/ThemeConstants';
import DetailedCard from '../components/DetailedCard/DetailedCard';

vi.mock('../helpers/api', () => ({
  fetchPersonDetails: vi.fn(),
}));

vi.mock('../hooks/useOutsideClick', () => ({
  default: () => ({ ref: null, isActive: true }),
}));

vi.mock('../helpers/Contexts/ThemeConstants', () => ({
  useTheme: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  useSearchParams: () => new URLSearchParams('details=1'),
}));

describe('DetailedCard component', () => {
  const mockData = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  };

  it('should render the detailed card with data', async () => {
    (fetchPersonDetails as Mock).mockResolvedValue(mockData);
    (useTheme as Mock).mockReturnValue({ theme: 'light' });

    render(<DetailedCard id='1' />);

    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
      expect(screen.getByText('Height: 172')).toBeInTheDocument();
      expect(screen.getByText('Mass: 77')).toBeInTheDocument();
      expect(screen.getByText('Hair Color: blond')).toBeInTheDocument();
      expect(screen.getByText('Skin Color: fair')).toBeInTheDocument();
      expect(screen.getByText('Eye Color: blue')).toBeInTheDocument();
      expect(screen.getByText('Birth Year: 19BBY')).toBeInTheDocument();
      expect(screen.getByText('Gender: male')).toBeInTheDocument();
    });
  });

  it('should handle errors while fetching data', async () => {
    (fetchPersonDetails as Mock).mockRejectedValue(
      new Error('Failed to fetch'),
    );

    render(<DetailedCard id='1' />);

    await waitFor(() => {
      expect(screen.queryByText('Luke Skywalker')).toBeNull();
    });
  });
});

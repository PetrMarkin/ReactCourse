import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import DetailedCard from '../components/DetailedCard';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { mockResults } from './mock';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
  useLoaderData: vi.fn(),
}));

describe('DetailedCard component', () => {
  const mockItem = mockResults[0];

  beforeEach(() => {
    (useNavigate as unknown as Mock).mockReturnValue(vi.fn());

    (useLoaderData as unknown as Mock).mockReturnValue(mockItem);
    vi.doMock('../hooks/useOutsideClick', () => ({
      default: () => ({
        ref: { current: null },
        isActive: true,
        setIsActive: vi.fn(),
      }),
    }));
  });

  it('renders detailed card with correct data', async () => {
    render(<DetailedCard />);

    await waitFor(() => {
      expect(screen.getByText(mockItem.name)).toBeInTheDocument();
    });

    expect(screen.getByText(`Height: ${mockItem.height}`)).toBeInTheDocument();
    expect(screen.getByText(`Mass: ${mockItem.mass}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Hair Color: ${mockItem.hair_color}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Skin Color: ${mockItem.skin_color}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Eye Color: ${mockItem.eye_color}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Birth Year: ${mockItem.birth_year}`),
    ).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${mockItem.gender}`)).toBeInTheDocument();
  });
});

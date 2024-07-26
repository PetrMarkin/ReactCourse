import { describe, it, expect, vi, Mock } from 'vitest';
import { CardLoader } from '../helpers/CardLoader';
import { store } from '../store/store';
import { mockResults } from './mock';

vi.mock('../store/store', () => ({
  store: {
    dispatch: vi.fn(),
  },
}));

describe('CardLoader', () => {
  it('returns data when cardId is provided', async () => {
    const mockCardId = '1';
    const mockData = mockResults[0];

    (store.dispatch as Mock).mockResolvedValue({
      data: mockData,
    });

    const params = { cardId: mockCardId };
    const request = new Request('https://swapi.dev/api/');
    const result = await CardLoader({ params, request });

    expect(result).toEqual(mockData);
  });

  it('throws an error when cardId is missing', async () => {
    const params = { cardId: undefined };
    const request = new Request('http://example.com');

    await expect(CardLoader({ params, request })).rejects.toThrow(
      'Card ID parameter is missing',
    );
  });

  it('throws an error when fetch fails', async () => {
    const mockCardId = '1';

    (store.dispatch as Mock).mockImplementation(() => ({
      error: { status: 500, data: 'Internal Server Error' },
    }));

    const params = { cardId: mockCardId };
    const request = new Request('http://example.com');

    await expect(CardLoader({ params, request })).rejects.toThrow(
      'Failed to fetch data',
    );
  });
});

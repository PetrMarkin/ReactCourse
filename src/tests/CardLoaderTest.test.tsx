import { describe, it, expect, vi, Mock } from 'vitest';
import { CardLoader } from '../helpers/CardLoader';
import { getPersonById } from '../helpers/api';

vi.mock('../helpers/api');

describe('CardLoader', () => {
  it('returns data when cardId is provided', async () => {
    const mockCardId = '1';
    const mockData = { name: 'Luke Skywalker', height: '172', mass: '77' };

    (getPersonById as Mock).mockResolvedValue(mockData);

    const params = { cardId: mockCardId };
    const request = new Request('http://example.com');
    const result = await CardLoader({ params, request });

    expect(result).toEqual(mockData);
    expect(getPersonById).toHaveBeenCalledWith(mockCardId.slice(-1));
  });

  it('throws an error when cardId is missing', async () => {
    const params = { cardId: undefined };
    const request = new Request('http://example.com');

    await expect(CardLoader({ params, request })).rejects.toThrow(
      'Card ID parameter is missing',
    );
  });
});

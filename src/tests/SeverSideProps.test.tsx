import { describe, it, expect, vi, Mock } from 'vitest';
import { getServerSideProps } from '../helpers/serverSideProps';

global.fetch = vi.fn();

describe('getServerSideProps', () => {
  beforeEach(() => {
    (fetch as unknown as Mock).mockClear();
  });

  it('should return null data and error when fetch fails', async () => {
    (fetch as unknown as Mock).mockResolvedValueOnce({
      ok: false,
    } as Response);

    const context = { query: { details: '1' } };
    const result = await getServerSideProps(context);

    expect(result).toEqual({
      props: {
        initialData: null,
        initialError: null,
      },
    });
  });

  it('should handle fetch errors', async () => {
    (fetch as unknown as Mock).mockRejectedValueOnce(
      new Error('Failed to fetch'),
    );

    const context = { query: { details: '1' } };
    const result = await getServerSideProps(context);

    expect(result).toEqual({
      props: {
        initialData: null,
        initialError: null,
      },
    });
  });
});

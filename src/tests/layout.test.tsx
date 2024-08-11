import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import RootLayout from '../../app/layout';

vi.mock('../src/helpers/Contexts/ThemeContext', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

vi.mock('../src/helpers/Contexts/SelectedItemsContext', () => ({
  SelectedItemsProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('RootLayout component', () => {
  it('should render its children', () => {
    render(
      <RootLayout>
        <div>Child Component</div>
      </RootLayout>,
    );

    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });

  it('should wrap children with ThemeProvider and SelectedItemsProvider', () => {
    render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>,
    );

    const child = screen.getByText('Test Child');
    expect(child).toBeInTheDocument();
  });
});

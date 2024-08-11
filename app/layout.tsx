import { ThemeProvider } from '../src/helpers/Contexts/ThemeContext';
import '../src/index.css';
import { SelectedItemsProvider } from '../src/helpers/Contexts/SelectedItemsContext';

export const metadata = {
  title: 'Star Wars Database',
  description: 'Next.js App Router Api Integration',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>
        <SelectedItemsProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </SelectedItemsProvider>
      </body>
    </html>
  );
}

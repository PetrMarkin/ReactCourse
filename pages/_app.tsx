import Head from 'next/head';
import '../src/index.css';
import ErrorBoundary from '../src/components/common/ErrorBoundary';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../src/helpers/Contexts/ThemeContext';
import { store } from '../src/store/store';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <link rel='icon' type='image/svg+xml' href='/star-wars.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Star Wars Database</title>
      </Head>
      <ErrorBoundary>
        <Provider store={store}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </ErrorBoundary>
    </>
  );
}

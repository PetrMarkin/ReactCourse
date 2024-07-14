import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';
import App from '../App';
import DetailedCard from '../components/DetailedCard';
import { CardLoader } from './CardLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/details/:cardId',
        element: <DetailedCard />,
        loader: CardLoader,
      },
    ],
  },
]);

export default router;

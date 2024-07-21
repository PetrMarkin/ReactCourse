import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import App from '../App';
import DetailedCard from '../components/DetailedCard/DetailedCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'details/:id',
        element: <DetailedCard />,
      },
    ],
  },
]);

export default router;

import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pagination from '../components/Pagination';

describe('Pagination component', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <Pagination />
      </Router>,
    );
  });

  it('updates URL parameter "page" when clicking "Previous" link', () => {
    const { getByText } = render(
      <Router>
        <Pagination />
      </Router>,
    );
    fireEvent.click(getByText('Previous'));
  });

  it('updates URL parameter "page" when clicking "Next" link', () => {
    const { getByText } = render(
      <Router>
        <Pagination />
      </Router>,
    );

    fireEvent.click(getByText('Next'));
  });
});

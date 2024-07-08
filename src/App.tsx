import React from 'react';
import './App.css';
import { getPeople, searchPeople, Result } from './api';
import SearchSection from './components/SearchSection';
import ResultsSection from './components/ResultsSection';
import Loader from './components/Loader';

interface AppState {
  searchTerm: string;
  results: Result[];
  throwError: boolean;
  isLoading: boolean;
}

class App extends React.Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchTerm: '',
      results: [],
      throwError: false,
      isLoading: false,
    };
  }

  componentDidMount() {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      this.setState({ searchTerm: savedSearchTerm }, () => {
        this.fetchResults(savedSearchTerm)
          .then()
          .catch((error) => {
            console.error('Error in handleSearchClick:', error);
          });
      });
    } else {
      this.fetchResults()
        .then()
        .catch((error) => {
          console.error('Error in handleSearchClick:', error);
        });
    }
  }

  fetchResults = async (query = ''): Promise<void> => {
    this.setState({ isLoading: true });
    try {
      const data = query ? await searchPeople(query.trim()) : await getPeople();
      this.setState({ results: data.results });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearch = () => {
    this.fetchResults(this.state.searchTerm)
      .then(() => {
        localStorage.setItem('searchTerm', this.state.searchTerm);
      })
      .catch((error) => {
        console.error('Error in handleSearchClick:', error);
      });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleThrowError = () => {
    this.setState({ throwError: true });
  };

  render() {
    if (this.state.throwError) {
      throw new Error('Test Error');
    }

    const { searchTerm, results, isLoading } = this.state;

    return (
      <div className='app'>
        <SearchSection
          searchTerm={searchTerm}
          onSearch={this.handleSearch}
          onChange={this.handleChange}
          onThrowError={this.handleThrowError}
        />
        <hr />
        {isLoading ? <Loader /> : <ResultsSection results={results} />}
      </div>
    );
  }
}

export default App;

import { Result } from '../api';
import React from 'react';

interface ResultsSectionProps {
  results: Result[];
}

class ResultsSection extends React.Component<ResultsSectionProps> {
  render() {
    const { results } = this.props;
    return (
      <div className='bottom-section'>
        {results.map((item, index) => (
          <div key={index} className='result-item'>
            <h3>{item.name}</h3>
            <p>Height: {item.height}</p>
            <p>Mass: {item.mass}</p>
            <p>Hair Color: {item.hair_color}</p>
            <p>Skin Color: {item.skin_color}</p>
            <p>Eye Color: {item.eye_color}</p>
            <p>Birth Year: {item.birth_year}</p>
            <p>Gender: {item.gender}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ResultsSection;

import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useOutsideClick from '../hooks/useOutsideClick';
import { Result } from '../interfaces/interfaces';

function DetailedCard() {
  const item = useLoaderData() as Result;
  const navigate = useNavigate();
  const { ref, isActive, setIsActive } = useOutsideClick(true);

  useEffect(() => {
    if (!isActive) {
      navigate(-1);
    }
  }, [isActive, navigate]);

  return (
    <div className='detailed-card' ref={ref}>
      <button
        className='btn-close'
        data-testid='close'
        onClick={() => {
          setIsActive(false);
        }}
      >
        Close
      </button>
      <div className='result-item'>
        <h3>{item.name}</h3>
        <p>Height: {item.height}</p>
        <p>Mass: {item.mass}</p>
        <p>Hair Color: {item.hair_color}</p>
        <p>Skin Color: {item.skin_color}</p>
        <p>Eye Color: {item.eye_color}</p>
        <p>Birth Year: {item.birth_year}</p>
        <p>Gender: {item.gender}</p>
      </div>
    </div>
  );
}

export default DetailedCard;

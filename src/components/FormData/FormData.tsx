import { useSelector } from 'react-redux';
import styles from './FormData.module.css';
import { RootState } from '../../store/store';

export default function FormData() {
  const formData = useSelector((state: RootState) => state.form);

  return (
    <div>
      {formData.isActive && (
        <div className={styles.dataContainer}>
          <p>Name: {formData.name}</p>
          <p>Age: {formData.age}</p>
          <p>Email: {formData.email}</p>
          <p>Password: {formData.password}</p>
          <p>Gender: {formData.gender}</p>
          <p>
            Terms and Conditions: {formData.terms ? 'Accepted' : 'Not Accepted'}
          </p>
          <p>
            Picture: <img src={formData.image || ''} alt='Profile' />
          </p>
          <p>Country: {formData.selectedCountry}</p>
        </div>
      )}
    </div>
  );
}

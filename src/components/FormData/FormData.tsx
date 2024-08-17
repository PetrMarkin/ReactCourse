import { useSelector } from 'react-redux';
import styles from './FormData.module.css';
import { RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Form, LocationState } from '../../helpers/interfaces';

export default function FormData() {
  const formData = useSelector((state: RootState) => state.form.forms);
  const location = useLocation();
  const [lastFormId, setLastFormId] = useState<string | null>(null);

  useEffect(() => {
    const state = location.state as LocationState;
    if (state?.lastFormId) {
      setLastFormId(state.lastFormId);
      setTimeout(() => setLastFormId(null), 3000);
    }
  }, [location]);

  const forms = formData.map((item: Form, index: number) => (
    <div
      key={index}
      className={`${styles.dataContainer} ${lastFormId === item.id ? styles.highlight : ''}`}
    >
      <p>Name: {item.name}</p>
      <p>Age: {item.age}</p>
      <p>Email: {item.email}</p>
      <p>Password: {item.password}</p>
      <p>Gender: {item.gender}</p>
      <p>Terms and Conditions: {item.terms ? 'Accepted' : 'Not Accepted'}</p>
      <p>
        Picture: <img src={item.image} alt='Profile' />
      </p>
      <p>Country: {item.country}</p>
    </div>
  ));

  return <div className={styles.wrapper}>{forms}</div>;
}

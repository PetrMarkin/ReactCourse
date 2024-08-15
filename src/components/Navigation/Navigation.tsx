import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <ul className={styles.navigationList}>
        <li>
          <Link to='/uncontrolled'>Uncontrolled Form</Link>
        </li>
        <li>
          <Link to='/controlled'>Controlled Form</Link>
        </li>
      </ul>
    </nav>
  );
}

import { useTheme } from '../../../helpers/Contexts/ThemeConstants';
import styles from './Loader.module.css';

function Loader() {
  const { theme } = useTheme();
  return (
    <div data-testid='loader-container' className={styles.loaderContainer}>
      <div
        data-testid='loader'
        className={`${styles.loader} ${styles[theme]}`}
      ></div>
    </div>
  );
}

export default Loader;

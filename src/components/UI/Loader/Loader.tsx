import styles from './Loader.module.css';

function Loader() {
  return (
    <div data-testid='loader-container' className={styles.loaderContainer}>
      <div data-testid='loader' className={styles.loader}></div>
    </div>
  );
}

export default Loader;

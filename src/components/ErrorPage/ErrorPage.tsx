import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  return (
    <div className={styles.errorPage} data-testid='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Error 404</i>
      </p>
      <p>May the Force be with you</p>
    </div>
  );
}

import styles from './Header.module.css'

export const Header: React.FC<{}> = (props) => {
  return (
    <>
      <h1 className={styles.title}>Header</h1>
      <p className={styles.title__elo}>ello</p>
    </>
  );
};

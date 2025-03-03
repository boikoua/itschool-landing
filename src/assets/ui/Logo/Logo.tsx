import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.figures}>
        <div className={styles.square}></div>
        <div className={styles.circle}></div>
      </div>

      <p className={styles.text}>Logo</p>
    </div>
  );
};

export default Logo;

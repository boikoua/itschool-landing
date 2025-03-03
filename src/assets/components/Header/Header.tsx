import Navigation from '../Navigation';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <Navigation />
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.wrapper}>
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                officia molestiae dolorum tempora ut accusamus cupiditate!
                Nesciunt tempora reiciendis libero voluptate!
              </p>
            </div>

            <img src="/img/header-image.png" alt="Technology" />
          </div>

          <div className={styles.bottom}>
            <div className={styles.users}>
              <img src="/img/header-users.png" alt="Users" />

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </div>

            <a className={styles.btn} href="#">
              Зарегистрироваться
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

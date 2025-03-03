import { navLinks } from '../../api/navLinks';
import cn from 'classnames';
import Logo from '../../ui/Logo';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const showNavigation = navLinks.map((item) => (
    <li className={styles.item} key={item.id}>
      <a
        className={cn(styles.link, { [styles.btn]: item.title === 'Home' })}
        href={item.link}
      >
        {item.title}
      </a>
    </li>
  ));

  return (
    <nav className={styles.nav}>
      <div className={styles.mobile}>
        <Logo />

        <img
          className={styles.burger}
          src="/img/icons/burger.svg"
          alt="Burger menu"
        />
      </div>

      <div className={styles.desktop}>
        <ul className={styles.items}>{showNavigation}</ul>
      </div>
    </nav>
  );
};

export default Navigation;

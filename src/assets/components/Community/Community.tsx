import styles from './Community.module.scss';

const Community = () => {
  return (
    <section className={styles.community}>
      <div className="container">
        <h2 className={styles.title}>Експертна спільнота</h2>

        <div className={styles.card}>
          <div className={styles.top}>
            <h3 className={styles.subtitle}>Центр карьеры</h3>

            <p className={styles.text}>
              ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi
              aut qui est ab, corporis quis maiores reiciendis explicabo odio
              tenetur nulla sint vel.
            </p>
          </div>

          <img className={styles.img} src="/img/community/1.png" alt="Career" />

          <div className={styles.bottom}>
            <a className={styles.btn} href="#">
              Востребованные профессии
            </a>
            <a className={styles.btn} href="#">
              Практика на реальных задачах
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;

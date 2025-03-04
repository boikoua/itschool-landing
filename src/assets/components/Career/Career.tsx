import styles from './Career.module.scss';

const Career = () => {
  return (
    <section className={styles.career}>
      <div className="container">
        <h2 className={styles.title}>Центр кар'єри</h2>

        <div className={styles.card}>
          <div className={styles.top}>
            <h3 className={styles.subtitle}>Для взрослых</h3>

            <p className={styles.text}>
              ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi
              aut qui est ab, corporis quis maiores reiciendis explicabo odio
              tenetur nulla sint vel.
            </p>
          </div>

          <img className={styles.img} src="/img/career/1.png" alt="Career" />

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

export default Career;

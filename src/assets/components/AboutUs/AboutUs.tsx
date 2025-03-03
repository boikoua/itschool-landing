import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <h2 className={styles.title}>Кому буде корисний курс</h2>

        <div className={styles.cards}>
          <article className={`${styles.card} ${styles.main}`}>
            <h3 className={styles.subtitle}>
              Trusted By Worldwide Clients Since 1
            </h3>

            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia
              molestiae dolorum tempora ut accusamus cupiditate! Nesciunt
              tempora reiciendis libero voluptate!
            </p>
          </article>

          <div className={styles.wrapper}>
            <article className={styles.card}>
              <h3 className={styles.subtitle}>First On Field</h3>

              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, iste
              </p>
            </article>
            <article className={styles.card}>
              <h3 className={styles.subtitle}>Worldwide</h3>

              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, iste
              </p>
            </article>
            <article className={styles.card}>
              <h3 className={styles.subtitle}>Easy to reach</h3>

              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, iste
              </p>
            </article>
            <article className={styles.card}>
              <h3 className={styles.subtitle}>24/7 Support</h3>

              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, iste
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import styles from './InfoCard.module.scss';

const InfoCard = () => {
  return (
    <article className={styles.card}>
      <img className={styles.photo} src="/img/speakers/1.jpg" alt="Photo" />

      <div className={styles.content}>
        <div className={styles.block}>
          <h3 className={styles.title}>Web Development</h3>

          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            repellendus minima reiciendis nobis dolore obcaecati.
          </p>
        </div>

        <ul className={styles.items}>
          <li className={`${styles.item} ${styles.active}`}>Web Development</li>
          <li className={styles.item}>Digital Marketing</li>
          <li className={styles.item}>SaaS Products</li>
          <li className={styles.item}>Apps Development</li>
          <li className={styles.item}>SEO Services</li>
          <li className={styles.item}>Data Analysis</li>
        </ul>

        <div className={styles.pages}>
          <img src="/img/icons/small_arrow-left.svg" alt="Arrow left" />
          <span>1 / 3</span>
          <img src="/img/icons/small_arrow-right.svg" alt="Arrow right" />
        </div>
      </div>
    </article>
  );
};

export default InfoCard;

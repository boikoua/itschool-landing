import styles from './CourseCard.module.scss';

const CourseCard = () => {
  return (
    <article className={styles.card}>
      <img className={styles.photo} src="/img/program/1.jpg" alt="Photo" />

      <div className={styles.content}>
        <div className={styles.block}>
          <h3 className={styles.title}>Web Development</h3>

          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            repellendus minima reiciendis nobis dolore obcaecati.
          </p>
        </div>

        <div className={styles.panel}>
          <p className={styles.intro}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>

          <div className={styles.btns}>
            <span>1</span>

            <button>
              <img src="/img/icons/arrow-left.svg" alt="Arrow" />
            </button>
            <button>
              <img src="/img/icons/plus.svg" alt="Plus" />
            </button>
            <button>
              <img src="/img/icons/arrow-right.svg" alt="Arrow" />
            </button>

            <span>8</span>
          </div>
        </div>

        <ul className={styles.items}>
          <li className={`${styles.item} ${styles.active}`}>Web Development</li>
          <li className={styles.item}>Digital Marketing</li>
          <li className={styles.item}>SaaS Products</li>
          <li className={styles.item}>Apps Development</li>
          <li className={styles.item}>SEO Services</li>
          <li className={styles.item}>Data Analysis</li>
        </ul>
      </div>
    </article>
  );
};

export default CourseCard;

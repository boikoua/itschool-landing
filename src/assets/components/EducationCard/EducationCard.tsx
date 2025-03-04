import styles from './EducationCard.module.scss';

const EducationCard = () => {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <div className={styles.image}>
          <img src="/img/education/1.jpg" alt="Platform" />
        </div>

        <a className={styles.btn} href="#">
          <img src="/img/icons/play-black.svg" alt="Play" />
          <span>Смотреть видео</span>
        </a>
      </div>

      <div className={styles.bottom}>
        <h3 className={styles.title}>Знакомитесь с платформой</h3>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Felis amet consectetur
          sollicitudin at aliquam tincidunt laoreet auctor elit. Lectus ipsum
          sapien id turpis elit cras ac. Velit risus nisl ut dictum venenatis
          mauris faucibus. Aliquam vehicula gravida fermentum in sodales
          fringilla mi at. Turpis volutpat parturient elit blandit proin magna
          pretium vestibulum elit. A massa adipiscing pellentesque tempor ac
          vel.
        </p>

        <div className={styles.pages}>
          <img src="/img/icons/small_arrow-left.svg" alt="Arrow left" />
          <span>1 / 3</span>
          <img src="/img/icons/small_arrow-right.svg" alt="Arrow right" />
        </div>
      </div>
    </article>
  );
};

export default EducationCard;

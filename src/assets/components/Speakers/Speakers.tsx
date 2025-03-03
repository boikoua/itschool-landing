import InfoCard from '../InfoCard';
import styles from './Speakers.module.scss';

const Speakers = () => {
  return (
    <section className={styles.speakers}>
      <div className="container">
        <h2 className={styles.title}>Спікери курсу</h2>

        <div className={styles.cards}>
          <InfoCard />
        </div>
      </div>
    </section>
  );
};

export default Speakers;

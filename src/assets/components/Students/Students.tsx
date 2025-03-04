import InfoCard from '../InfoCard';
import styles from './Students.module.scss';

const Students = () => {
  return (
    <section className={styles.students}>
      <div className="container">
        <h2 className={styles.title}>Кейси учнів</h2>

        <div className={styles.cards}>
          <InfoCard />
        </div>
      </div>
    </section>
  );
};

export default Students;

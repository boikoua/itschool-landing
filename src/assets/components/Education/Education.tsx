import EducationCard from '../EducationCard';
import styles from './Education.module.scss';

const Education = () => {
  return (
    <section className={styles.education}>
      <div className="container">
        <h2 className={styles.title}>Як проходить навчання</h2>

        <div className={styles.cards}>
          <EducationCard />
        </div>
      </div>
    </section>
  );
};

export default Education;

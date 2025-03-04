import CourseCard from '../CourseCard';
import styles from './Course.module.scss';

const Course = () => {
  return (
    <section className={styles.course}>
      <div className="container">
        <h2 className={styles.title}>Програма курсу </h2>

        <div className={styles.cards}>
          <CourseCard />
        </div>
      </div>
    </section>
  );
};

export default Course;

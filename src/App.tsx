import './App.scss';
import AboutUs from './assets/components/AboutUs';
import Career from './assets/components/Career';
import Course from './assets/components/Course';
import Education from './assets/components/Education';
import Header from './assets/components/Header';
import Speakers from './assets/components/Speakers';
import Students from './assets/components/Students';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <AboutUs />
        <Speakers />
        <Education />
        <Students />
        <Career />
        <Course />
      </main>
    </>
  );
};

export default App;

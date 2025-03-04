import './App.scss';
import AboutUs from './assets/components/AboutUs';
import Career from './assets/components/Career';
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
      </main>
    </>
  );
};

export default App;

import './App.scss';
import AboutUs from './assets/components/AboutUs';
import Education from './assets/components/Education';
import Header from './assets/components/Header';
import Speakers from './assets/components/Speakers';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <AboutUs />
        <Speakers />
        <Education />
      </main>
    </>
  );
};

export default App;

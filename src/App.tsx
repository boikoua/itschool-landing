import './App.scss';
import AboutUs from './assets/components/AboutUs';
import Header from './assets/components/Header';
import Speakers from './assets/components/Speakers';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <AboutUs />
        <Speakers />
      </main>
    </>
  );
};

export default App;

import { useEffect, useState } from 'react';
import Switch from './assets/components/Switch';

const API_KEY = '71c9703614e3f98df03507b272cbfa49';

const lightThemeClasses = ['from-sky-300', 'to-blue-500'];
const darkThemeClasses = ['from-gray-800', 'to-blue-950'];

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [city, setCity] = useState('Kyiv');

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove(...darkThemeClasses);
      document.body.classList.add(...lightThemeClasses);
    } else {
      document.body.classList.remove(...lightThemeClasses);
      document.body.classList.add(...darkThemeClasses);
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`
    )
      .then((response) => response.json())
      .then((data) => setCurrentWeather(data))
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [city]);

  console.log(currentWeather);

  return (
    <>
      <header className="container mx-auto px-2 sm:px-0 py-2 sm:py-3 flex items-center justify-between">
        <div className="logo flex items-center gap-2 sm:gap-3">
          <img className="logoImg w-10 sm:w-16" src="img/logo.svg" alt="logo" />
          <span className="text-white text-xl sm:text-2xl">
            Weather React App
          </span>
        </div>

        <Switch theme={theme} setTheme={setTheme} />
      </header>

      <main className="container mx-auto">
        <input
          type="text"
          placeholder="Your city name"
          onChange={(event) => setCity(event.target.value)}
        />
      </main>
    </>
  );
}

export default App;

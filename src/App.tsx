import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import Switch from './assets/components/Switch';

const API_KEY = '71c9703614e3f98df03507b272cbfa49';

const lightThemeClasses = ['from-sky-300', 'to-blue-500'];
const darkThemeClasses = ['from-gray-800', 'to-blue-950'];

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [city, setCity] = useState('Kyiv');

  const [inputValue, setInputValue] = useState('');

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const debouncedCity = useCallback(
    debounce((cityName: string) => {
      setCity(cityName);
    }, 1000),
    []
  );

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setInputValue(value);
    debouncedCity(value);
  };

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
    if (!city) return;

    setIsLoading(true);

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
      <header className="container mx-auto py-2 sm:py-3 flex items-center justify-between">
        <div className="logo flex items-center gap-2 sm:gap-3">
          <img className="logoImg w-10 sm:w-16" src="img/logo.svg" alt="logo" />
          <span className="text-white text-xl sm:text-2xl">
            Weather React App
          </span>
        </div>

        <Switch theme={theme} setTheme={setTheme} />
      </header>

      <main className="container mx-auto py-10 flex flex-col justify-center items-center gap-30">
        <input
          className="pt-2 pb-1 px-6 text-3xl sm:text-5xl mx-auto w-full sm:w-2xl sm:mx-auto border-b-2 border-slate-300 outline-0 text-white"
          type="text"
          placeholder="Your city name"
          value={inputValue}
          onChange={handleChangeInputValue}
        />

        <article className="bg-gradient-to-r from-sky-400 to-blue-600 p-4 w-full sm:max-w-2xl rounded-2xl shadow-lg from-gray-800 text-white">
          Lorem ipsum dolor sit .
        </article>
      </main>
    </>
  );
}

export default App;

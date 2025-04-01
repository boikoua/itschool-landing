import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { Weather } from './assets/types/Weather';
import Header from './assets/components/Header';
import {
  API_KEY,
  darkThemeClasses,
  lightThemeClasses,
} from './assets/api/constants';
import WeatherCard from './assets/components/WeatherCard';
import Languages from './assets/components/Languages';
import Author from './assets/components/Author';

function App() {
  const [currentWeather, setCurrentWeather] = useState<Weather | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [city, setCity] = useState('Kyiv');
  const [language, setLanguage] = useState(
    localStorage.getItem('lang') || 'en'
  );
  const [inputValue, setInputValue] = useState('');
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
    if (!city) return;

    setIsLoading(true);
    setIsError(false);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=${language}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      })
      .then((data) => setCurrentWeather(data))
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [city, language]);

  const debouncedCity = useCallback(
    debounce((cityName: string) => {
      setCity(cityName.trim());
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

  const handleChangeLang = (val: string) => {
    setLanguage(val);
    localStorage.setItem('lang', val);
  };

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />

      <main className="container mx-auto mb-10 py-10 flex flex-col justify-center items-center gap-20">
        <input
          className="pt-2 pb-1 px-6 text-3xl sm:text-5xl mx-auto w-full sm:w-2xl sm:mx-auto border-b-2 border-slate-300 outline-0 text-white"
          type="text"
          placeholder={
            language === 'en' ? 'Enter the city name' : 'Введіть назву міста'
          }
          value={inputValue}
          onChange={handleChangeInputValue}
        />

        <WeatherCard
          theme={theme}
          isLoading={isLoading}
          isError={isError}
          weather={currentWeather}
          language={language}
        />

        <Languages changeLang={handleChangeLang} />
      </main>

      <footer className="flex justify-center">
        <Author theme={theme} language={language} />
      </footer>
    </>
  );
}

export default App;

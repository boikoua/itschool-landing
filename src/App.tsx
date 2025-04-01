import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import cn from 'classnames';
import Switch from './assets/components/Switch';
import Loader from './assets/components/Loader';
import Error from './assets/components/Error';
import { Weather } from './assets/types/Weather';

const API_KEY = '71c9703614e3f98df03507b272cbfa49';

const lightThemeClasses = ['from-sky-300', 'to-blue-500'];
const darkThemeClasses = ['from-gray-800', 'to-blue-900'];

const lightThemeCardClasses = ['from-sky-400', 'to-blue-600'];
const darkThemeCardClasses = ['from-gray-900', 'to-blue-950'];

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

  console.log(currentWeather);

  const date = new Date();

  const todayEN = {
    day: date.getDate(),
    dayName: date.toLocaleDateString('en-US', { weekday: 'long' }),
    monthName: date.toLocaleDateString('en-US', { month: 'long' }),
  };

  const todayUA = {
    day: date.getDate(),
    dayName: date.toLocaleDateString('uk-UA', { weekday: 'long' }),
    monthName: date.toLocaleDateString('uk-UA', { month: 'long' }),
  };

  const { day, dayName, monthName } = language === 'en' ? todayEN : todayUA;

  function weatherDescription(num: number) {
    if (num >= 200 && num < 300) return 'thunderstorm';
    if (num >= 300 && num < 500) return 'drizzle';
    if (num >= 500 && num < 600) return 'rain';
    if (num >= 600 && num < 700) return 'snow';
    if (num >= 700 && num < 800) return 'atmosphere';
    if (num === 800) return 'clear';
    if (num > 800) return 'clouds';
  }

  const handleChangeLang = (val: string) => {
    setLanguage(val);
    localStorage.setItem('lang', val);
  };

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

        <article
          className={cn(
            'flex flex-col sm:flex-row gap-3 bg-gradient-to-r p-4 w-full sm:max-w-lg rounded-2xl shadow-lg text-white transition duration-500 easy-in delay-100 relative',
            theme === 'light' ? lightThemeCardClasses : darkThemeCardClasses,
            isLoading || isError ? 'justify-center' : ''
          )}
        >
          {isLoading && !isError && <Loader />}

          {!isLoading && isError && <Error />}

          {!isLoading && !isError && currentWeather && (
            <>
              <div>
                <span className="text-7xl">
                  {Math.round(currentWeather.main.temp)}°
                </span>
              </div>

              <div className="flex flex-col justify-end">
                <span className="text-sm">
                  {dayName[0].toUpperCase() + dayName.slice(1)}, {day}{' '}
                  {monthName[0].toUpperCase() + monthName.slice(1)}
                </span>
                <span className="text-sm">
                  {currentWeather.name}, {currentWeather.sys.country},{' '}
                  {currentWeather.weather[0].description}
                </span>
              </div>

              <img
                className="w-18 absolute right-4"
                src={`img/${weatherDescription(
                  currentWeather.weather[0].id
                )}.png`}
                alt="sun"
              />
            </>
          )}
        </article>

        <div className="flex gap-4">
          <span onClick={() => handleChangeLang('ua')}>
            <img
              className="w-16 rounded-full shadow-lg hover:shadow-md hover:shadow-gray-300 transition-shadow duration-300 ease-in-out cursor-pointer"
              src="img/ua.png"
              alt="uk"
            />
          </span>
          <span onClick={() => handleChangeLang('en')}>
            <img
              className="w-16 rounded-full shadow-lg hover:shadow-md hover:shadow-gray-300 transition-shadow duration-300 ease-in-out cursor-pointer"
              src="img/en.png"
              alt="en"
            />
          </span>
        </div>
      </main>

      <footer className="flex justify-center">
        <a
          className={cn(
            'flex items-center gap-3 p-2 rounded-lg bg-gradient-to-r text-white  hover:shadow-lg transition duration-300 ease-in-out',
            theme === 'light'
              ? 'from-sky-400 to-blue-600'
              : 'bg-gray-900 to-blue-950'
          )}
          href="https://github.com/boikoua"
          target="_blank"
        >
          <img
            className="w-8 h-8 rounded-full"
            src="img/github.png"
            alt="github"
          />
          <span className="text-lg font-medium">
            {language === 'en' ? 'Dmitry Boiko' : 'Дмитро Бойко'}
          </span>
        </a>
      </footer>
    </>
  );
}

export default App;

import cn from 'classnames';
import { darkThemeCardClasses, lightThemeCardClasses } from '../api/constants';
import Loader from './Loader';
import Error from './Error';
import weatherDescription from '../utils/weatherDescription';
import { Weather } from '../types/Weather';
import { todayEN, todayUA } from '../api/date';

type Props = {
  theme: string;
  isLoading: boolean;
  isError: boolean;
  weather: Weather | null;
  language: string;
};

const WeatherCard: React.FC<Props> = ({
  theme,
  isLoading,
  isError,
  weather,
  language,
}) => {
  const { day, dayName, monthName } = language === 'en' ? todayEN : todayUA;

  return (
    <article
      className={cn(
        'flex flex-col sm:flex-row gap-3 bg-gradient-to-r p-4 w-full sm:max-w-lg rounded-2xl shadow-lg text-white transition duration-500 easy-in delay-100 relative',
        theme === 'light' ? lightThemeCardClasses : darkThemeCardClasses,
        isLoading || isError ? 'justify-center' : ''
      )}
    >
      {isLoading && !isError && <Loader />}

      {!isLoading && isError && <Error />}

      {!isLoading && !isError && weather && (
        <>
          <div>
            <span className="text-7xl">{Math.round(weather.main.temp)}°</span>
          </div>

          <div className="flex flex-col justify-end">
            <span className="text-sm">
              {dayName[0].toUpperCase() + dayName.slice(1)}, {day}{' '}
              {monthName[0].toUpperCase() + monthName.slice(1)}
            </span>
            <span className="text-sm">
              {weather.name}, {weather.sys.country},{' '}
              {weather.weather[0].description}
            </span>
          </div>

          <img
            className="w-18 absolute right-4"
            src={`img/${weatherDescription(weather.weather[0].id)}.png`}
            alt="sun"
          />
        </>
      )}
    </article>
  );
};

export default WeatherCard;

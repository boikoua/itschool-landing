interface WeatherDescription {
  id: number;
  description: string;
  main: string;
}

export type Weather = {
  name: string;
  sys: { country: string };
  main: { temp: number };
  weather: WeatherDescription[];
};

const date = new Date();

export const todayEN = {
  day: date.getDate(),
  dayName: date.toLocaleDateString('en-US', { weekday: 'long' }),
  monthName: date.toLocaleDateString('en-US', { month: 'long' }),
};

export const todayUA = {
  day: date.getDate(),
  dayName: date.toLocaleDateString('uk-UA', { weekday: 'long' }),
  monthName: date.toLocaleDateString('uk-UA', { month: 'long' }),
};

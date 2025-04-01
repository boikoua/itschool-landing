export default function weatherDescription(num: number) {
  if (num >= 200 && num < 300) return 'thunderstorm';
  if (num >= 300 && num < 500) return 'drizzle';
  if (num >= 500 && num < 600) return 'rain';
  if (num >= 600 && num < 700) return 'snow';
  if (num >= 700 && num < 800) return 'atmosphere';
  if (num === 800) return 'clear';
  if (num > 800) return 'clouds';
}

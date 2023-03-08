import { useState } from 'react';
import axios from 'axios';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
}

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const fetchWeatherData = async () => {
    try {
      let url = '';
      if (/^\d+$/.test(location)) {
        url = `https://api.openweathermap.org/data/2.5/weather?zip=${location}&units=imperial&appid=${apiKey}`;
      } else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
      }
      const response = await axios.get<WeatherData>(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Location or Zipcode'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={fetchWeatherData}>Get Weather</button>
      </form>
      {weatherData && (
        <div>
          <h1>{weatherData.name}</h1>
          <h2>{Math.round(weatherData.main.temp)} °F</h2>
          <p>Feels like: {Math.round(weatherData.main.feels_like)} °F</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;

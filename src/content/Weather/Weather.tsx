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
    <div className='bg-slate-900 text-slate-200 flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold m-5 text-orange-500'>Weather App</h1>
      <form onSubmit={handleSubmit} className='mb-8'>
        <input
          type='text'
          placeholder='Location or Zipcode'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className='px-4 py-2 bg-slate-800 text-slate-200 rounded-lg mr-4 focus:outline-none'
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

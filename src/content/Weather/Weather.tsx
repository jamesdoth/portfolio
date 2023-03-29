import { useState } from 'react';
import axios, { AxiosError } from 'axios';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    weather: string;
  };
  weather: {
    main: string;
    description: string;
  }[];
}

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const fetchWeatherData = async () => {
    if (!location) {
      return;
    }
    try {
      let url = '';
      if (/^\d+$/.test(location)) {
        url = `https://api.openweathermap.org/data/2.5/weather?zip=${location}&units=imperial&appid=${apiKey}`;
      } else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
      }
      const response = await axios.get<WeatherData>(url);
      if (response.status === 200) {
        setWeatherData(response.data);
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error) {
      console.error(error);
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.status === 404
      ) {
        alert('City not found. Please try again.');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className='bg-slate-900 text-slate-200 flex flex-col justify-center items-center p-4'>
      <h1 className='text-4xl font-bold m-5 text-orange-500'>Weather App</h1>
      <form onSubmit={handleSubmit} className='mb-8'>
        <input
          type='text'
          placeholder='Location or Zipcode'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className='px-4 py-2 bg-slate-800 text-slate-200 rounded-lg mr-4 focus:outline-none'
        />
        <button
          onClick={fetchWeatherData}
          className='px-2 py-2 bg-orange-500 text-slate-200 rounded-lg hover:bg-orange-400 focus:outline-none'
        >
          Get Weather
        </button>
      </form>
      {weatherData && (
        <div className='bg-slate-800 px-8 py-3 mb-7 -mt-4 rounded-lg'>
          <h1 className='text-2xl font-bold text-orange-500'>
            {weatherData.name}
          </h1>
          <h2 className='text-4xl font-bold'>
            {Math.round(weatherData.main.temp)} °F
          </h2>
          <p className='font-medium text-lg'>
            <span className='text-orange-500'>Feels like:</span>{' '}
            {Math.round(weatherData.main.feels_like)} °F
          </p>
          <p className='font-medium text-lg -mt-2'>
            <span className='text-orange-500'>Humidity:</span>{' '}
            {weatherData.main.humidity}%
          </p>
          <p className='font-medium text-lg -mt-2'>
            <span className='text-orange-500'>Weather:</span>{' '}
            {weatherData.weather[0].main}
          </p>
          <p className='font-medium text-lg -mt-2'>
            <span className='text-orange-500'>Looks like:</span>{' '}
            {weatherData.weather[0].description.charAt(0).toUpperCase() +
              weatherData.weather[0].description.slice(1)}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;

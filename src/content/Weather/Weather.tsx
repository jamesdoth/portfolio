import { useEffect } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const apiKey = process.env.VITE_OPENWEATHER_API_KEY;

const WeatherApp = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=${apiKey}`
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
    </div>
  );
};

export default WeatherApp;

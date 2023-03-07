import { useEffect } from 'react';
import axios from 'axios';
import 'dotenv/config';

const WeatherApp = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${process.env.API_KEY}`
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

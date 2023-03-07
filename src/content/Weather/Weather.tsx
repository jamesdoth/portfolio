import { useEffect } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`placeholder api`);
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

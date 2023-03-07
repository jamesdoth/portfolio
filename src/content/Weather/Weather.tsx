import React, { useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [location, setLocation] = useState<string>('');
};

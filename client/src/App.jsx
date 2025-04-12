import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [weather, setWeather] = useState(null);

  const getWeather = async (city) => {
    try {

      
      const res = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeather(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🌤️ Weather Dashboard</h1>
      <SearchBar onSearch={getWeather} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;

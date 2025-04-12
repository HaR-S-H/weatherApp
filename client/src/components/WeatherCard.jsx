import React from 'react';

const WeatherCard = ({ weather }) => {
  return (
    <div style={{ marginTop: '2rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '10px' }}>
      <h2>{weather.name}</h2>
      <p>🌡️ {weather.main.temp}°C</p>
      <p>🌬️ {weather.wind.speed} m/s</p>
      <p>🌧️ {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;

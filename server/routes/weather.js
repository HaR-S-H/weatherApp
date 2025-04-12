const express = require('express');
const axios = require('axios');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.WEATHER_API_KEY;


router.get('/', async (req, res) => {
    
  const { city } = req.query;
  if (!city) return res.status(400).json({ error: 'City is required' });

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

module.exports = router;

const express = require("express");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Use the static files
app.use(express.static(__dirname));

app.get('/weather', async function (req, res) {
    const { city, state } = req.query;
    if (!city || !state) {
        return res.status(400).json({ error: 'City and state are required.' });
    }
    // Geocoding API GET request to fetch latitude and longitude
    const geoResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=${process.env.OPENWEATHER_API_KEY}`);

    if (!geoResponse.ok) {
        return res.status(geoResponse.status).json({ error: 'Failed to fetch geolocation data.' });
    }

    const geoData = await geoResponse.json();

    if (!geoData.length) {
        return res.status(404).json({ error: 'Location not found.' });
    }

    const { lat, lon } = geoData[0];
    
    // Weather Data API GET request using latitude and longitude for weather data
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.OPENWEATHER_API_KEY}`);
        
    if (!weatherResponse.ok) {
        return res.status(weatherResponse.status).json({ error: 'Failed to fetch weather data.' });
    }

    const weatherData = await weatherResponse.json();

    // Send the weather data in JSON format
    const result = {
        temperature: weatherData.main.temp,
        description: weatherData.weather[0].description,
        wind_speed: weatherData.wind.speed,
        condition: weatherData.weather[0].main
    };

    res.json(result);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
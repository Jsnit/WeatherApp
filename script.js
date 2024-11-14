document.getElementById('weather-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const weatherDisplay = document.getElementById('weather-display');
    const icon = document.getElementById('weather-icon');

    try {
        // Fetch weather data
        const response = await fetch(`/weather?city=${city}&state=${state}`);
        if (!response.ok) throw new Error('Weather data could not be retrieved.');

        const data = await response.json();

        // Display the fetched data
        document.getElementById('temperature').textContent = `Temperature: ${data.temperature} °F`;
        document.getElementById('description').textContent = `Description: ${data.description}`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind_speed} mph`;

        // Set theme and icon based on condition
        const condition = data.condition.toLowerCase();
        document.body.className = ''; // Reset any previous theme
        if (condition.includes('clear')) {
            document.body.classList.add('weather-sunny');
            icon.src = '/public/icons/clear.svg';
        } else if (condition.includes('cloud')) {
            document.body.classList.add('weather-cloudy');
            icon.src = '/public/icons/cloudy.svg';
        } else if (condition.includes('rain')) {
            document.body.classList.add('weather-rainy');
            icon.src = '/public/icons/rainy.svg';
        } else {
            icon.src = '/public/icons/default.svg'; // Default icon
        }

        weatherDisplay.style.display = 'block';
    } catch (error) {
        alert(error.message);
    }
});

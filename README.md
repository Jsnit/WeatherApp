# Project Name
Weather Dashboard

## Description
This project is a Node.js-based weather dashboard that allows users to retrieve current weather information for any city and US state. The application uses the OpenWeatherMap API to fetch geolocation and weather data, displays the temperature, weather description, and wind speed, and dynamically changes the theme and icon based on the weather condition. It is built with Node.js, Express, and uses environment variables for secure API key handling.

## Setup Instructions
1. **Clone the Repository**:
   ```
   git clone <your-repository-url>
   ```
2. **Navigate to the Project Directory**:
   ```
   cd weather-dashboard
   ```
3. **Install Dependencies**:
   Ensure that you have Node.js installed, then run:
   ```
   npm install
   ```
4. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```
   OPENWEATHER_API_KEY=your_openweathermap_api_key
   PORT=3001
   ```
5. **Run the Application**:
   Start the server by running:
   ```
   npm start
   ```
   The server will run at `http://localhost:3001`.

## Usage
1. **Enter City and State**:
   - Type a city and state into the input fields and click "Get Weather."

2. **View Weather Data**:
   - The dashboard will display the temperature in Fahrenheit, weather description, and wind speed.
   - Background theme and weather icon will change based on the weather condition.

3. **Handle Errors**:
   - If invalid data is entered, or if the location cannot be found, a friendly error message is displayed.

## Additional Notes
   - `server.js`: Handles the backend server and API route for fetching weather data.
   - `index.html`: Contains the form and display elements.
   - `script.js`: Handles form submission and data display.
   - `styles.css`: Provides basic styling, including dynamic background themes based on weather.

## Project Structure
- **public/icons**: Contains custom SVG icons for various weather conditions.
- **server.js**: Main backend server file, with Express route handling.
- **.env**: Stores sensitive API key and port configuration (not included in the repository).
- **styles.css**: Contains CSS styles for the frontend, including dynamic themes.

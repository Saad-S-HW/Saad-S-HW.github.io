// Step 1: Create variables to store references to elements
const cityInputField = document.getElementById("cityInput");
const weatherInfoDiv = document.getElementById("weather-info");
const fetchWeatherButton = document.getElementById("btn");

// Step 2: Add an event listener to the button
fetchWeatherButton.addEventListener("click", () => {
    // Step 3: Get the value of the input field (city name)
    const cityName = cityInputField.value;

    // Step 4: Check if the city input is empty
    if (cityName === "") {
        alert("Please enter a city name.");
    } else {
        // Step 5: Make an HTTP request to OpenWeatherMap API using AJAX
        const apiKey = '3573277b1b1809800dc47c9b860418cb';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        // Step 6: Fetch weather data
        fetchWeather(apiUrl);
    }
});

// Step 6: Function to fetch weather data
function fetchWeather(apiUrl) {
    const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
    xhr.open("GET", apiUrl); // Configure the request method and URL

    // Step 7: Handle the response
    xhr.onload = function () {
        if (xhr.status === 200) { // Check if the response status is OK (200)
            const weatherData = JSON.parse(xhr.responseText); // Parse the JSON response

            // Step 8: Display weather information
            displayWeather(weatherData);
        } else {
            console.error("Error:", xhr.statusText); // Log an error message
            alert("An error occurred while fetching weather data."); // Show an alert for the error
        }
    };

    xhr.send(); // Send the HTTP request
}

// Step 8: Function to display weather information
function displayWeather(weatherData) {
    // Extract weather data from the response
    const weatherDescription = weatherData.weather[0].description;
    const mainTemperature = (weatherData.main.temp - 273.15).toFixed(2);
    const windSpeed = weatherData.wind.speed;
    const city = weatherData.name;

    // Create HTML content to display weather information
    const weatherHTML = `
        <p>The Weather in ${city} is ${weatherDescription}<br>
        The Temperature is ${mainTemperature} °C and the Wind Speed is ${windSpeed}m/s</p>
    `;

    // Insert weather information above the existing content
    weatherInfoDiv.insertAdjacentHTML('afterend', weatherHTML);
}



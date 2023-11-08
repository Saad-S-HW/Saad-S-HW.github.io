// Step 1: Create variables to store references to elements
const cityInputField = document.getElementById("cityInput"); // Get the input field element
const weatherInfoDiv = document.getElementById("weather-info"); // Get the element to display weather info
const fetchWeatherButton = document.getElementById("btn"); // Get the button element

// Step 2: Add an event listener to the button
btn.addEventListener("click", () => {
    // Step 3: Get the value of the input field (city name)
    const cityName = cityInputField.value;

    // Step 4: Check if the city input is empty
    if (cityName === "") {
        alert("Please enter a city name.");
    } else {
        // Step 5: Make an HTTP request to OpenWeatherMap API using AJAX
        const apiKey = '3573277b1b1809800dc47c9b860418cb';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
        xhr.open("GET", apiUrl, true); // Configure the request method and URL

        xhr.onload = function () {
            if (xhr.status === 200) { // Check if the response status is OK (200)
                const weatherData = JSON.parse(xhr.responseText); // Parse the JSON response

                // Extract weather data from the response
                const weatherDescription = weatherData.weather[0].description;
                const mainTemperature = weatherData.main.temp;
                const windSpeed = weatherData.wind.speed;
                const city = weatherData.name;

                // Create HTML content to display weather information
                const weatherHTML = `
                    <p>The Weather in ${city} is ${weatherDescription}</p>
                    <p>The Temperature is ${(mainTemperature-273.15).toFixed(2)} °C and the Wind Speed is ${windSpeed}m/s</p>
                `;
                weatherInfoDiv.innerHTML = weatherHTML; // Display weather information
            } else {
                console.error("Error:", xhr.statusText); // Log an error message
                alert("An error occurred while fetching weather data."); // Show an alert for the error
            }
        };

        xhr.send(); // Send the HTTP request
    }
});

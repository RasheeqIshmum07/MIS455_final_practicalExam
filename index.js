function getWeather() {
    const apiKey = '4312294081b35ccd94ceffe7639aad67';
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-container').innerHTML = 'Error fetching weather data.';
        });
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-container');

    if (data.cod === 'error 404') {
        weatherContainer.innerHTML = 'City not found';
    } else {
        const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
        const description = data.weather[0].description;

        weatherContainer.innerHTML = `<p>Temperature: ${temperature}°C</p>
                                      <p>Description: ${description}</p>`;
    }
}



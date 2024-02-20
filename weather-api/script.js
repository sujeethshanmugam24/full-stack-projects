function getWeather() {
    const apiKey = 'apikey';
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');

    if (cityInput === '') {
        alert('Please enter a city');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const temperature = Math.round(data.main.temp - 273.15);
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;

            weatherInfo.innerHTML = `
                <div class="grid-item">
                    <p>Temperature: ${temperature}°C</p>
                </div>
                <div class="grid-item">
                    <p>Description: ${description}</p>
                </div>
                <div class="grid-item">
                    <p>Condition: ${data.weather[0].main}</p>
                </div>
                <div class="grid-item">
                    <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">
                </div>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
        });
}

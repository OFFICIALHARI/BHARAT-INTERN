
const apiKey ='03397e8b87b79a7637eefa8856ce766a';
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city !== '') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const { name, main, weather } = data;
                const temperature = Math.round(main.temp - 273.15);
                const description = weather[0].description;
                weatherInfo.innerHTML = `<h2>${name}</h2><ul style="line-height:180%;list-style-type:square"><li><p>Temperature: ${temperature}°C</p></li><li><p>Description: ${description}</p></li></ul>`;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                weatherInfo.innerHTML = '<p>City not found</p>';
            });
    } else {
        alert('Please enter a city name');
    }
});

const currentWeather = document.querySelector('#current-weather');
// target the inner container so we don't remove the section's H2 when clearing
const forecast = document.querySelector('#forecast-cards');

const key = 'aa3a96b4d7c691fbce41370696d4b99e';
const lat = -26.2036;
const lon = 28.0304;

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

export async function getCurrentWeather() {
    try {
        const response = await fetch(currentUrl);
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();
        displayCurrentWeather(data);
    } catch (error) {
        console.error('Error fetching current weather:', error);
    }
}

function displayCurrentWeather(data) {
    const card = document.createElement('div');
    card.classList.add('weather-card', 'flex', 'flex-container', 'flex-center', 'm-center');

    const icon = document.createElement('img');
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    icon.alt = data.weather[0].description;

    const temp = document.createElement('p');
    temp.textContent = `${Math.round(data.main.temp)}°C`;

    const description = document.createElement('p');
    description.classList.add('min-text');
    description.textContent = data.weather[0].description;

    const high = document.createElement('p');
    high.innerHTML = `High: <span>${Math.round(data.main.temp_max)}°C</span>`;
    high.classList.add('mt-lg');

    const low = document.createElement('p');
    low.innerHTML = `Low: <span>${Math.round(data.main.temp_min)}°C</span>`;

    const humidity = document.createElement('p');
    humidity.innerHTML = `Humidity: <span>${data.main.humidity}%</span>`;

    card.append(icon, temp, description, high, low, humidity);
    currentWeather.appendChild(card);
}

export async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();

        // Filter for midday entries (~12:00)
        const dailyForecasts = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);

        displayForecast(dailyForecasts);
    } catch (error) {
        console.error('Error fetching forecast:', error);
    }
}

function displayForecast(dailyForecasts) {
    forecast.innerHTML = '';

    dailyForecasts.forEach(day => {
        const card = document.createElement('div');
        card.classList.add('forecast-card', 'flex', 'justify-between', 'px-md', 'mb-md', 'flex-center');

        // Container for day and description
        const textContainer = document.createElement('div');

        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

        const dayLabel = document.createElement('p');
        dayLabel.textContent = dayName;
        dayLabel.classList.add('day');

        const description = document.createElement('p');
        description.classList.add('min-text');
        description.textContent = day.weather[0].description;

        textContainer.append(dayLabel, description);

        // Temperature
        const temp = document.createElement('p');
        temp.classList.add('forecast-temp');
        temp.textContent = `${Math.round(day.main.temp)}°C`;

        card.append(textContainer, temp);

        forecast.appendChild(card);
    });
}
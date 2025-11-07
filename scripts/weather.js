const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');

const key = 'aa3a96b4d7c691fbce41370696d4b99e';
const lat = 49.750265622759436;
const lon = 6.637771879457384;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(await response.text());
        }
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.log('Error fetching data: ', error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.textContent = `${data.main.temp}°C`;
    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.alt = `Current weather icon`;
    caption.textContent = data.weather[0].description;
}
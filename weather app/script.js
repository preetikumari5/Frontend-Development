//event listener to get location input

document.getElementById("location-input").addEventListener('change' , async () => {
    // get location
    const location = document.getElementById("location-input").value;
    
    // fetch the weather data
    const weatherData = await getWeatherData(location);


    // display weather data
    displayWeatherData(weatherData);
});

const getWeatherData = async(location) => {
    if(!location) {
        return{};
    }

    const apiKey = `6a8a4dac3d8620cb7d542ae210de05bb`;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
    const data = await response.json();
    return data;
}

function getBackgroundColor(temp) {
    if(temp<0) {
        return 'lightblue';
    }
    else if(temp<10) {
        return 'lightgreen';
    }
    else if(temp<20) {
        return 'lightyellow';
    }
    else if(temp<30) {
        return 'lightsalmon';
    }
    else {
        return 'lightcoral';
    }
}

const displayWeatherData = (data) => {
    const weatherDataElement = document.getElementById("weather-data");
    if(Object.keys(data).length == 0) {
        weatherDataElement.innerHTML = "Please enter a location.";
    } else {
        const BackgroundColor = getBackgroundColor(Math.floor(data.main.temp - 273.15));
        weatherDataElement.style.backgroundColor = BackgroundColor;

        weatherDataElement.innerHTML =`
            <h3>${data.name}</h3>
            <p>Temperature: ${Math.floor(data.main.temp-273.15) } C</p>
            <p>Humidity: ${data.main.humidity} %</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `
    }
}

window.onload = async () => {
    const weatherData = await getWeatherData();
    displayWeatherData(weatherData);
}
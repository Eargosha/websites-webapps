

const weatherForm = document.querySelector(".wheatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "c56299817f7d97c8f05525f44007ad2d";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }

});

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return await response.json();

}

function displayWeatherInfo(data){
    //используем обьект разрушения {}, чтобы получить доступы к всей инфе обьекта, что приходит в data
    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;
    //city, temp, ... . можно использовать как переменные
    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(2)}°C`;
    humidityDisplay.textContent = `humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("wheatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);

}

function getWeatherEmoji(wheterId){

    switch(true){
        case (wheterId >= 200 && wheterId < 300):
            return "⛈️";
        case (wheterId >= 300 && wheterId < 400):
            return "🌧️";
        case (wheterId >= 500 && wheterId < 600):
            return "🌧️";
        case (wheterId >= 600 && wheterId < 700):
            return "❄️";
        case (wheterId >= 700 && wheterId < 800):
            return "🌫️";
        case (wheterId === 800):
            return "☀️";   
        case (wheterId >= 801 && wheterId < 810):
            return "☁️";   
        default:
            return "❔";
    }

}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}


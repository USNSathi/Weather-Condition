const API_KEY = `a4ec9a1c6a232a5bdb6f185c7c5c6751`;

const searchTemperature = () => {

    const city = document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data));

}

const setInnerText = (id, text) => {

    document.getElementById(id).innerText = text;

}

const displayTemperature = temperature => {

    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    // console.log(temperature);

    // Set Weather Icon

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

}
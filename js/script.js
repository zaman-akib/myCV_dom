function expand(event) {
    event.preventDefault();
    let svg = this.querySelector('svg');
    svg.classList.toggle('transform');
    svg.classList.toggle('rotate-180');
    let details = this.querySelector('.details');
    details.classList.toggle('hidden');
    let italic = this.querySelector('.italic-1');
    italic.classList.toggle('italic')
}

async function getWeatherData(event) {
    event.preventDefault();

    if (this.clicked)
        return;
    this.clicked = true;

    let weather_modal = this.querySelector('.weather-modal');
    weather_modal.classList.toggle('hidden');

    let location = 'Janipur';
    let api_key = '6a1d596bc83a4e7fd7b359d0614c414f';
    let res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + api_key + '&units=metric');
    let text = await res.json();

    let temp = weather_modal.querySelector('.temp');
    let feels = weather_modal.querySelector('.feels');
    let description = weather_modal.querySelector('.description');
    let wind = weather_modal.querySelector('.wind');
    let hum = weather_modal.querySelector('.hum');

    description.innerHTML = text.weather[0].description;
    temp.innerHTML = text.main.temp + ' °C';
    feels.innerHTML = text.main.feels_like + ' °C';
    wind.innerHTML = text.wind.speed + ' m/s'
    hum.innerHTML = text.main.humidity + ' %';

    setTimeout(() => {
        weather_modal.classList.toggle('hidden');
        this.clicked = false;
    }, 5000);

}
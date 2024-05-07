const apiKey = "6905902e99db00b47ca59245cf8064b9";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const content = document.querySelector('.content');
const input = document.querySelector('#input');

const showWeather = async (city) => {
    const response = await fetch(apiUrl + city `&appid=${apiKey}`);

    let data = await response.json();


    let weatherHtml = 
    `
    <div class="weather">
                        <div class="weatherImg">
                            
                        </div>
                        <div class="city">
                            <h2>${data.name}</h2>
                            <h3>${Math.round(data.main.temp)} °C </h3>
                            <p>${data.weather.description}</p>
                        </div>
                    </div>
                    <div class="details">
                      <span>Humidity ${data.main.humidity} %</span>
                      <span>Wind Speed ${data.wind.speed} km/h</span>
                      <span>Pressure ${data.main.pressure}</span>
                      <span>Max.Temp ${data.main.temp_max}</span>
                      <span>Min.Temp ${data.main.temp_min}</span>
                    </div>
    `

   content.insertAdjacentHTML('afterbegin', weatherHtml);


    console.log(data);
}


input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        console.log('key pressed');
        console.log(input.value);
        showWeather(input.value);
    }
})

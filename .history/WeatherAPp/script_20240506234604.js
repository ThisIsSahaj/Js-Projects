const apiKey = "6905902e99db00b47ca59245cf8064b9";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=jaipur";

const content = document.querySelector('.content');

const showWeather = async () => {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);

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
                      <span>Humidity ${data.main.humidity}</span>
                      <span>Wind Speed ${data.wind.speed} km/h</span>
                      <span>Pressure ${data.main.pressure}</span>
                      <span>Max.Temp ${data.main.temp_max}</span>
                      <span>Min.Temp ${data.main.temp_min}</span>
                    </div>
    `




    console.log(data);
}

showWeather();
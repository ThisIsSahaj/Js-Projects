const apiKey = "6905902e99db00b47ca59245cf8064b9";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const content = document.querySelector('.content');
const input = document.querySelector('#input');
const image = document.querySelector('#image');

const showWeather = async (city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {

        input.classList.add('error');
        setTimeout(() => {
            input.classList.remove('error');
        }, 1000);
    }
    else{

    

    let data = await response.json();
    console.log(data);





    let weatherHtml = 
    `
    <div class="weather">
    
                        <div class="city">
                            <h2>${data.name}</h2>
                            <h3>${Math.round(data.main.temp)} °C </h3>
                            <p>${data.weather[0].main}</p>
                        </div>
                    </div>
                    <div class="details">
                      <span>Humidity ${data.main.humidity}%</span>
                      <span>Wind Speed ${data.wind.speed} km/h</span>
                      <span>Pressure ${data.main.pressure}</span>
                      <span>Max.Temp ${data.main.temp_max}</span>
                      <span>Min.Temp ${data.main.temp_min}</span>
                    </div>
    `
 
//    content.insertAdjacentHTML('afterbegin', weatherHtml);

content.innerHTML += weatherHtml;

if (data.weather[0].main == "Clouds") {
    image.src = "/assets/images/weather/clouds.png"
}
else if (data.weather[0].main == "Clear") {
    image.src = "/assets/images/weather/clear.png"
}
else if (data.weather[0].main == "Drizzle") {
    image.src = "/assets/images/weather/drizzle.png"
}
else if (data.weather[0].main == "Mist") {
    image.src = "/assets/images/weather/mist.png"
}
else if (data.weather[0].main == "Rain") {
    image.src = "/assets/images/weather/rain.png"
}
else if (data.weather[0].main == "Snow") {
    image.src = "/assets/images/weather/snow.png"
}
    }


   
    
    

}


// On enter function
input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {

        if (input.value.length>0) {
            
            showWeather(input.value);   
            input.value = '';
        }
        else{
             input.classList.add('error');

            setTimeout(() => {
                input.classList.remove('error');
            }, 1000);
        }
    }
})

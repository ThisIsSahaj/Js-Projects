const apiKey = "6905902e99db00b47ca59245cf8064b9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const apiKey = API_KEY;
// const apiUrl = API_URL;

const content = document.querySelector('.content');
const input = document.querySelector('#input');


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
        <div class="cityName">

            <h2>${data.name}</h2>
        </div>
          <div class="cityCondition">

            <h3>${Math.round(data.main.temp)} °c</h3>
            <p>${data.weather[0].main}</p>
           </div>
         </div>
                    <div class="weatherImg">
                        <img src="" alt="" id="image">
                     
                        </div>
        </div>
        <div class="details">
                      <span><img src="/assets/images/weather/humidity.png" alt=""> <p>${data.main.humidity}%</p>     <h4>Humidity</h4> </span>
                      <span><img src="/assets/images/weather/wind.png" alt=""> <p>${data.wind.speed} km/h</p>     <h4>Wind</h4></span>
                      <span><img src="/assets/images/weather/pressure.png" alt=""> <p>${data.main.pressure} mb</p> <h4>Pressure</h4></span>
        </div>

    `
 
//    content.insertAdjacentHTML('afterbegin', weatherHtml);

// to not append the data, rather replace it
content.innerHTML = weatherHtml;

// accessing img element after it has been created in the html by above 
const image = document.querySelector('#image');


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
else if (data.weather[0].main == "Haze") {
    image.src = "/assets/images/weather/haze.png"
}
else if (data.weather[0].main == "Dust") {
    image.src = "/assets/images/weather/dust.png"
}
else if (data.weather[0].main == "Fog") {
    image.src = "/assets/images/weather/fog.png"
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

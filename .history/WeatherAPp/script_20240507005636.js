const apiKey = "6905902e99db00b47ca59245cf8064b9";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const content = document.querySelector('.content');
const input = document.querySelector('#input');

const showWeather = async (city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        input.classList.add('error');

        input.classList.remove('error');
    }
    else{

    

    let data = await response.json();
    // console.log(data);


    let weatherHtml = 
    `
    <div class="weather">
                        <div class="weatherImg">
                            
                        </div>
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
   content.innerHTML = weatherHtml;
    }

}


input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {

        if (input.value.length>0) {
            
            console.log('key pressed');
            showWeather(input.value);   
            input.value = '';
        }
        else{
            setTimeout(() => {
                
                input.classList.add('error');
            }, 1000);
        }
    }
})

const apiKey = "6905902e99db00b47ca59245cf8064b9";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=jaipur";

const showWeather = async () => {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);

    let data = await response.json();

    console.log(data);
}

showWeather();
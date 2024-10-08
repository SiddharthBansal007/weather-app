const input_box = document.querySelector(".inputbox");
const search_button = document.querySelector("#searchbutton");
const weather_img = document.querySelector(".weatherimg");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const humidity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#windspeed")

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weatherbody');

//function to check weather
async function checkWeather(city) {

    const api_key = "804098f5c493fb29e4166f3d5826afcf";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod == `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";


    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    desc.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "icons/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "icons/clear.png";
            break;
        case 'Rain':
            weather_img.src = "icons/rain.png";
            break;
        case 'Mist':
            weather_img.src = "icons/mist.png";
            break;
        case 'Snow':
            weather_img.src = "icons/snow.png";
            break;
                    
    } 

    console.log(weather_data);

}

search_button.addEventListener('click', ()=> {
    checkWeather(input_box.value);
});
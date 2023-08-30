const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const humidity = document.getElementById('humidity')
const wind_speed = document.getElementById('wind-speed');
const description = document.querySelector('.description');
const temperature= document.querySelector('.temperature');
const location_not_found = document.querySelector('.location-not-found')
const weather_body = document.querySelector('.weather-body')
const video = document.getElementById('video')

// Create an <audio> element and set its attributes
const audioElement = document.createElement('audio');
audioElement.autoplay = true;
audioElement.loop = true;

document.body.appendChild(audioElement);



searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})

async function checkWeather(city){
    const api_key = "b62b6a6cba050c708decc642734edd6c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}` ;

    const weather_data = await fetch(`${url}`).then(response => response.json()) ;

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed} Km/H`;

    switch(weather_data.weather[0].main){

        case 'Clouds' :
             weather_img.src = "./cloud.png";
             video.src = "./Cloudyy.mp4";
             audioElement.src = "./cloudyyyy.mp4";
        break;

        case 'Clear' :
             weather_img.src = "./clear.png";
             video.src = "./clear sky.mp4";
             audioElement.src = "./clear skyyyy.mp4";
        break;

        case 'Rain' : 
             weather_img.src = "./rain.png";
             video.src = "./rainy.mp4";
             audioElement.src= "./rainyy.mp4";
        break;

        case 'Mist' : 
            weather_img.src = "./mist.png";
            video.src = "./misty.mp4";
            audioElement.src = "./mistyy.mp4";
        break;

        case 'Haze' :
             weather_img.src = "./haze.png";
             video.src = "./Hazyy.mp4";
             audioElement.src= "./Hazeyy.mp4";
        break;

        case 'Snow' :
            weather_img.src = "./snow.png";
            video.src = "./Snow.mp4";
            audioElement.src = "./snowyy.mp4";
        break;

        default:
            video.src = "./primary video.mp4"

    }
}

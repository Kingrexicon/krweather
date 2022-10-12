let key = "fbfcdcdd51890c4dd9f73dbd8fe927d9"
let locationInput = document.getElementById("location")
// const endpoint2 = "https://api.github.com/users"
async function tesIt() {
    let userLocation = location.value;
    // const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=ogbomoso&appid=${key}&units=metric`
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=${key}&units=metric`
    let response = await fetch(endpoint)
    let jsonResponse = await response.json()
    console.log(jsonResponse)
    uName.innerHTML = ` ${jsonResponse.name}`;
    uCountry.innerHTML = ` ${jsonResponse.sys.country}`;
    uWeather.innerHTML = ` ${jsonResponse.weather[0].main}`;
    uIcon.innerHTML = `<div id="imageSe"></div>`;
    uDescription.innerHTML = ` ${jsonResponse.weather[0].description}`;
    uTemp.innerHTML = ` ${jsonResponse.main.temp}<sup>o</sup>C`;
    // uFeel.innerHTML =` ${jsonResponse.main.feels_like;
    uLat.innerHTML = ` ${jsonResponse.coord.lat}`;
    uLon.innerHTML = ` ${jsonResponse.coord.lon}`;
    uWind.innerHTML = ` ${jsonResponse.wind.deg}<sup>o</sup> at the speed of ${jsonResponse.wind.speed}m/s`;
    uPressure.innerHTML = `${jsonResponse.main.pressure}hPa`;
    uHumidity.innerHTML = `${jsonResponse.main.humidity}%`;
    uClouds.innerHTML = `${jsonResponse.clouds.all}%`;
    const iconsShow = () => {
        if (jsonResponse.weather[0].icon == '11d') {
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/11d@2x.png" alt="">`
            document.getElementById("containers").style.backgroundImage = "url('./images/thunder.jpg')";
        }
        else if (jsonResponse.weather[0].icon == '04d') {
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/04d@2x.png" alt="">`
            document.getElementById("containers").style.backgroundImage = "url('./images/clear.jpg')";
        }

        else if (jsonResponse.weather[0].icon == '10d') {
            document.getElementById("containers").style.backgroundImage = "url('./images/rainy.jpg')";
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/10d@2x.png" alt="">`
        }

        else if (jsonResponse.weather[0].icon == '09d') {
            document.getElementById("containers").style.backgroundImage = "url('./images/rainy.jpg')";
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/09d@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '13d') {
            document.getElementById("containers").style.backgroundImage = "url('./images/snowy.jpg')";
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/13d@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '50d') {
            document.getElementById("containers").style.backgroundImage = "url('./images/foggy.jpg')";
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/50d@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '01d') {
            document.getElementById("containers").style.backgroundImage = "url('./images/clear.jpg')";
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/01d@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '02d') {
            document.getElementById("containers").style.backgroundImage = "url('./images/warm.jpg')";
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/02d@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '03d') {
            document.getElementById("containers").style.backgroundImage = "url('./images/warm.jpg')";
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/03d@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '11n') {
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/11n@2x.png" alt="">`
            document.getElementById("containers").style.backgroundImage = "url('./images/thunder.jpg')"
        }
        else if (jsonResponse.weather[0].icon == '04n') {
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/04n@2x.png" alt="">`
            document.getElementById("containers").style.backgroundImage = "url('./images/cloudy.jpg')";
        }
        else if (jsonResponse.weather[0].icon == '10n') {
            document.getElementById("containers").style.backgroundImage = "url('./images/rainyn.jpg')";
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/10n@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '09n') {
            document.getElementById("containers").style.backgroundImage = "url('./images/rainyn.jpg')";
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/09n@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '13n') {
            document.getElementById("containers").style.backgroundImage = "url('./images/snowy.jpg')";
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/13n@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '50n') {
            document.getElementById("containers").style.backgroundImage = "url('./images/foggy.jpg')";
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/50n@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '01n') {
            document.getElementById("containers").style.backgroundImage = "url('./images/road.jpg')";
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/01n@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '02n') {
            document.getElementById("containers").style.backgroundImage = "url('./images/road.jpg')";
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/02n@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '03n') {
            document.getElementById("containers").style.backgroundImage = "url('./images/road.jpg')";
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/03n@2x.png" alt="">`
        }
    }
    iconsShow()

    
    // const backGround = () => {
    //     if (jsonResponse.weather[0].icon == '50n' || jsonResponse.weather[0].icon == '50d') {

    //     }
    //     else {
            
    //         document.getElementById("containers").style.backgroundImage = "url('./images/sunny.jpg')";
    //     }
    // }
    //  fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

}
const thyme=()=>{
let date = new Date();
let sec = date.getSeconds()
let min = (date.getMinutes())
let hours = (date.getHours())
let day = (date.getDate())
let month = date.getMonth()
let year = date.getFullYear()

time.innerHTML= `<div class="one mx-2">${hours}:${min}:${sec}</div> <div class="two mt-5 fs-4 text-warning">${day}/${month+1}/${year}</div>`
}
setInterval(thyme,1000)
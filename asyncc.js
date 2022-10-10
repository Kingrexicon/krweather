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
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/11d@2x.png" alt=""
`
        }
        else if (jsonResponse.weather[0].icon == '04d') {
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/04d@2x.png" alt=""
`
        }

        else if (jsonResponse.weather[0].icon == '10d') {

            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/10d@2x.png" alt="">`
        }

        else if (jsonResponse.weather[0].icon == '09d') {

            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/09d@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '13d') {

            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/13d@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '50d') {

            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/50d@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '01d') {

            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/01d@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '02d') {

            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/02d@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '03d') {

            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/03d@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '11n') {
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/11n@2x.png" alt=""
`
        }
        else if (jsonResponse.weather[0].icon == '04n') {
            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""
`
        }

        else if (jsonResponse.weather[0].icon == '10n') {

            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/10n@2x.png" alt="">`
        }

        else if (jsonResponse.weather[0].icon == '09n') {

            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/09n@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '13n') {

            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/13n@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '50n') {

            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/50n@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '01n') {

            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/01n@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '02n') {

            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/02n@2x.png" alt="">`
        }
        else if (jsonResponse.weather[0].icon == '03n') {

            imageSe.innerHTML = `<img src="http://openweathermap.org/img/wn/03n@2x.png" alt="">`
        }
    }
    iconsShow()

    
    const backGround = () => {
        if (jsonResponse.weather[0].icon == '50n' || jsonResponse.weather[0].icon == '50d') {

            containers.innerHTML = `<img src="./images/rainy.jpg" alt="">`
        }
        else {
            
            document.getElementById("containers").style.backgroundImage = "url('./images/sunny.jpg')";
        }
    }
    //  fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    backGround()
}
let key = "fbfcdcdd51890c4dd9f73dbd8fe927d9"
let locationInput = document.getElementById("location")
// const endpoint2 = "https://api.github.com/users"
async function tesIt() {
    let userLocation = location.value;
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=ogbomoso&appid=${key}&units=metric`
    // const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=${key}&units=metric`
    let response = await fetch(endpoint)
    let jsonResponse = await response.json()
    console.log(jsonResponse)
    uName.innerHTML = ` ${jsonResponse.name}`;
    uCountry.innerHTML = ` ${jsonResponse.sys.country}`;
    uWeather.innerHTML = ` ${jsonResponse.weather[0].main}`;
    uIcon.innerHTML= ` ${jsonResponse.weather[0].icon}}`;
    uDescription.innerHTML=` ${jsonResponse.weather[0].description}`;
    uTemp.innerHTML=` ${jsonResponse.main.temp}k`;
    // uFeel.innerHTML =` ${jsonResponse.main.feels_like;
    uLat.innerHTML =` ${jsonResponse.coord.lat}`;
    uLon.innerHTML =` ${jsonResponse.coord.lon}`;
    uWind.innerHTML =` ${jsonResponse.wind.deg}<sup>o</sup> at the speed of ${jsonResponse.wind.speed}m/s`;
    uPressure.innerHTML= `${jsonResponse.main.pressure}hPa`;
    uHumidity.innerHTML =`${jsonResponse.main.humidity}%`;
    uClouds.innerHTML= `${jsonResponse.clouds.all}%`;



}
//  fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
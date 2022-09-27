testi=()=>{let cityName = dar.value


fetch('https://api.openweathermap.org/data/2.5/weather?q=ogbomoso&appid=fbfcdcdd51890c4dd9f73dbd8fe927d9')
.then(response => response.json())
.then(json => console.log(json))}
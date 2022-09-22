
// let myName = "kunle"
// const test = async() => {
//     console.log(myName)
//     delay()
// }

// const delay = () => {
//     setTimeout(() => {
//         myName = "sola"
//     }, 3000
//     )

// }


let myKey = "fbfcdcdd51890c4dd9f73dbd8fe927d9"
const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${myIndex.value}&appid=${myKey}`
const endpoint2 = "https://api.github.com/users"
const test = async()=>{
    let response = await fetch(endpoint)
    let jsonResponse = await response.json()
    // console.log(jsonResponse)
    jsonResponse.map((item)=>{
        disp.innerHTML +=`
        <h1>${item.website}</h1>
        <img src="${item.avatar_url}"/>
        `
        
    })
}
// const getLocation = ()=>{
//     navigator.geolocation.getCurrentPosition((position)=>{
//         console.log(position.coords.latitude)
//         console.log(position.coords.longitude)
//     })
// }

 fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
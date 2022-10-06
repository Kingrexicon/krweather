const test = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': '1fdd67c08cmsh545b6d4eeaa5696p16ae20jsnb0224e11561a',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
	}
};
const tesIt = ()=>{

    fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random/', test)
        .then(res => res.json())
        .then(data => console.log(data))
        // .then(response => disp.innerHTML= response.categories)
        .catch(err => console.log(err));
		// .then((josn) )
	jokes.innerHTML =JSON.stringify( categories.url)
}
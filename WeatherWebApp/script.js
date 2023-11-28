// find the way to find city fetching
// # access key: 76lSVJPvbAXlVHOUl9Pnn4TQmrMWtjqXknZPgpAUEUI

// # secret key: Ed4xGpiKUXC9b_OkWk8oU2o0Oh9kFnlhcUUMo8nRYTY

const form = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const cityNameUI = document.getElementsByClassName('location');
const tempreature = document.getElementsByClassName('temp');

let cityName = '';

const getCityTemp = async (cityName) => {
	const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=45b6d1548d52a466627f72a82cb325e5&units=imperial`);
	const data = await res.json();
	console.log(data.name);
	renderElements(data);
};

form.addEventListener('submit', (event) => {
	event.preventDefault();
	cityName = cityInput.value;
	getCityTemp(cityName);
});

const renderElements = (data) => {
	cityNameUI.innerHTML = data.name;
};

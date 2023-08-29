const apiKey = '3d3fc5f176984a28b6121756232808';
const apiUrl = 'https://api.weatherapi.com/v1/timezone.json?key=3d3fc5f176984a28b6121756232808&q=Delhi';


fetch(apiUrl, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response.location.country);
    });
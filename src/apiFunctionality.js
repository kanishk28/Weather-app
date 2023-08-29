const apiKey = '3d3fc5f176984a28b6121756232808';
const apiUrl = 'https://api.weatherapi.com/v1/timezone.json?key=3d3fc5f176984a28b6121756232808&q=';

fetch('https://api.weatherapi.com/v1/current.json?key=3d3fc5f176984a28b6121756232808&q=new%20delhi', {mode: 'cors'})
    .then(function(response) {
      console.log(response.json());
    });
const apiKey = '3d3fc5f176984a28b6121756232808';
const submitBtn = document.querySelector('.submit-btn');
const condition = document.querySelector('.condition');
const conditionImg = document.querySelector('.condition-img');
const placeName = document.querySelector('.place-name');


export function searchLocation(){

    submitBtn.addEventListener('click', function(){
        const searchLocation = document.querySelector('#search-location');
        let searchValue = searchLocation.value;
        const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=3d3fc5f176984a28b6121756232808&q=' + searchValue;
        console.log(searchValue);
        console.log(apiUrl)
        searchLocation.value = '';
        fetch(apiUrl, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            condition.textContent = response.current.condition.text;
            conditionImg.src = response.current.condition.icon;
            placeName.textContent = response.location.name + ', ' + response.location.country;








            console.log(response.location.name);
            console.log(response.location.country);
            console.log(response.location.lat);
            console.log(response.location.lon);
            console.log(response.location.localtime);
            console.log(response.current.temp_c);
            console.log(response.current.temp_f);


        });
        
    })
}
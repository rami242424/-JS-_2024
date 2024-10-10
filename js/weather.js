const API_KEY = "09ccd72a24f2ae9530ae57fe5dbc6d21";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    // console.log(position, lat, long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        // console.log(data.name, data.weather[0].main);
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${parseInt(data.main.temp)}`
    })
}

function onGeoError(){
    alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
const API_KEY = "09ccd72a24f2ae9530ae57fe5dbc6d21";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("You live it", lat, long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(responese => responese.json())
        .then(data => {
        // console.log(data.name, data.weather[0].main);
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}`;
    });

}

function onGeoError(){
    alert("Can't find you, no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
function onGeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("You live it", lat, long);
}

function onGeoError(){
    alert("Can't find you, no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
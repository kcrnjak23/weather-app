let currentLocation = document.getElementById("currentLocation");
let currentTemp = document.getElementById("degrees");
let currentIcon = document.querySelector(".weather-icon");
let longitude;
let latitude;

window.addEventListener("load", () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;

            const api =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=f8449043b8d5fb524f004b8e5a92ad1c`;
              
            fetch(api)
                .then(response => response.json())
                .then(data => {
                    currentLocation.innerHTML = data.name;
                    currentTemp.innerHTML = Math.round(data.main.temp);
                    const icon = data.weather[0].icon;
                    currentIcon.innerHTML = `<img src="icons/${icon}.png">`;
                });    
        });
    }
});


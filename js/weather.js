const API_KEY = "c182091736112d507fc884a46b15a62a";


function onGeoOk(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=matric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const weather = document.querySelector("#weather span:last-child");
    const city = document.querySelector("#weather span:first-child");
    city.innerText = data.name + ", ";
    weather.innerText = data.weather[0].main;
  });
}

function onGeoErr(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);

const Bucharest = document.querySelector('.bucharest');
const timisoara = document.querySelector('.timisoara');
const Oradea = document.querySelector('.oradea');
const Cluj = document.querySelector('.Cluj-Napoca');
const Vulcan = document.querySelector('.Vulcan');
const Băișoara1 = document.querySelector('.Băișoara');
const Gilău1 = document.querySelector('.Gilău');
const currentCity = document.querySelector('#current-city');
function changeLocation(city) {
    currentCity.innerText = city;
    displayCurrentWeather(city);
    displayWeatherForecast(city);
    localStorage.setItem("city", city);
}

Bucharest.addEventListener('click', () => {
    changeLocation("București");
});
timisoara.addEventListener('click', () => {
    changeLocation("Timișoara");
});
Oradea.addEventListener('click', () => {
    changeLocation("Oradea");
});

Cluj.addEventListener('click', () => {
    changeLocation("Cluj-Napoca");
});

Vulcan.addEventListener('click' , () =>{
    changeLocation("Vulcan");
});

Băișoara1.addEventListener('click', () => {
    changeLocation("Băișoara");
});

Gilău1.addEventListener('click', () => {
    changeLocation("Gilău");
});
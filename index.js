const city = localStorage.getItem('city');

if(city === null)  {
    localStorage.setItem("city", "București");
    displayCurrentWeather("București");
    displayWeatherForecast("București")
                    }
else {
    displayCurrentWeather(city);
    displayWeatherForecast(city);
    currentCity.innerText = city;
}
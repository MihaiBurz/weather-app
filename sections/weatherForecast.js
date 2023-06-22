function displayWeatherForecast(city) {
    const weatherForecastEndpoint = getForecastWeatherEndPoint(city);
    fetch(weatherForecastEndpoint)
        .then((response)=> response.json())
        .then((data) => {
            console.log(data);
            const { list } = data;
            const weatherForecast = document.querySelector('.weather-forecast');
            weatherForecast.innerHTML = '';
            list.forEach((forecast) =>{
                const {dt, main, weather} = forecast;
                const hour = getHours(dt);
                const day = getDay(dt);
                const iconUrl = getIconUrl(weather[0].icon);
                const temperature = Math.round(main.temp);
                const weatherDescription = weather[0].description;
                const realFeel = Math.round(main.feels_like);
                weatherForecast.innerHTML += `
                <div class="d-flex justify-content-between">
                    <p>${day} , ${hour}</p>
                    <img src="${iconUrl}" />
                    <p>${temperature}</p>
                    <p>${weatherDescription}</p>
                    <p> Real Feel: ${realFeel} </p>
                </div>
                `
            })
        })
}
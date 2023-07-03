function displayWeatherForecast(city) {
    const weatherForecastEndpoint = getForecastWeatherEndPoint(city);
    fetch(weatherForecastEndpoint)
        .then((response)=> response.json())
        .then((data) => {
            console.log(data);
            const { list } = data;
            const weatherForecast = document.querySelector('.weather-forecast');
            const days = {};
            weatherForecast.innerHTML += ``;

            list.forEach((forecast) => {
                const { dt } = forecast;
                const day = getDay(dt);
                if(days[day] === undefined) 
                {
                    days[day] = [forecast];
                }
                else {
                    days[day].push(forecast);
                }
            })

            for (const day in days) {
                console.log(day);
                console.log(days[day]);
                weatherForecast.innerHTML += `
                <h2>${day}<h2>
                `;

                const list = days[day];
                list.forEach((forecast) =>{
                        const {dt, main, weather} = forecast;
                        const hour = getHours(dt);
                        const day = getDay(dt);
                        const iconUrl = getIconUrl(weather[0].icon);
                        const temperature = Math.round(main.temp);``
                        const weatherDescription = weather[0].description;
                        const realFeel = Math.round(main.feels_like);
                        weatherForecast.innerHTML += `
                        <div class="weather-forecast-box d-flex justify-content-between border rounded p-3 mb-3 align-items-center">
                            <p>${hour}</p>
                            <div><img src="${iconUrl}" /></div>
                            <p><strong>${temperature}°C</strong></p>
                            <p>${weatherDescription}</p>
                            <p class="real-feel"> Real Feel: <strong> ${realFeel}°C </strong></p>
                        </div>`
                    });

                }
            }
)};
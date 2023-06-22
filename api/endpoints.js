const API_KEY = "a478676fe33bbb1343e70b417bd2326b";

function getCurrentWeatherEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ro`;
}

function getForecastWeatherEndPoint(city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=ro`;
}


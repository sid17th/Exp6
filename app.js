const apiKey = "d595883209eb3de36e12ea69abe04370";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  var data = await response.json();

  console.log(data);

  if (data.cod === '404') {
    alert('City not found');
    return;
  }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

  switch (data.weather[0].main.toLowerCase()) {
    case "clouds":
      weatherIcon.src = "icons/clouds.png";
      break;
    case "clear":
      weatherIcon.src = "icons/clear.png";
      break;
    case "rain":
      weatherIcon.src = "icons/rain.png";
      break;
    case "haze":
      weatherIcon.src = "icons/haze.png";
      break;
    case "drizzle":
      weatherIcon.src = "icons/drizzle.png";
      break;
    case "mist":
      weatherIcon.src = "icons/mist.png";
      break;
    default:
      weatherIcon.src = ""; // default or error image
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }

});
// Check weather for a default city on page load
checkWeather("Delhi");
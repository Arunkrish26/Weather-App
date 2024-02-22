const apiKey = "448931c6717e72f261b000440261c201";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-Icon");

async function checkWheather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".city").style.display = "none";
    document.querySelector(".humidity").style.display = "none";
    document.querySelector(".wind").style.display = "none";
    document.querySelector(".temp").innerHTML = "OOPs something went wrong...";
    document.querySelector(".temp").style.fontSize = "15px";
    document.querySelector(".weather-Icon").src = "images/Monkey.png";
    document.querySelector(".weather-Icon").style.height = "200px";
    // document.querySelector(".details").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".temp").style.display = "block";
    document.querySelector(".temp").style.fontSize = "50px";

    document.querySelector(".city").style.display = "block";
    document.querySelector(".humidity").style.display = "block";
    document.querySelector(".wind").style.display = "block";
  }
  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    WeatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    WeatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Clear") {
    WeatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Mist") {
    WeatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Drizzle") {
    WeatherIcon.src = "images/drizzle.png";
  }
}
function buyValue() {
  checkWheather(searchBox.value);
}

// Execute a function when the user presses a key on the keyboard
addEventListener("keypress", (e) => {
  // If the user presses the "Enter" key on the keyboard
  if (e.key === "Enter") {
    checkWheather(searchBox.value);
  }
});

function displayTemperature(response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#current-city");
    let descriptionElement= document.querySelector("#description");
    let humidityElement= document.querySelector("#humidity");
    let windspeedElement= document.querySelector("#wind-speed");
    let timeElement= document.querySelector("#time");
    let iconElement=document.querySelector("#icon")

    descriptionElement.innerHTML=response.data.condition.description;
    humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
    windspeedElement.innerHTML=`${response.data.wind.speed}km/h`;
    timeElement.innerHTML=formatDate(date);
    iconElement.innerHTML=`<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>`
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = temperature;
  }
  
  function searchCity(city) {
    let apiKey = "ab4d0edb5b9372141t1b46d08bocdf06";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayTemperature);
  }
    function search(event){
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.value;
  
  1
    }
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  let currentDateELement = document.querySelector("#current-date");
  let currentDate = new Date();
  
  currentDateELement.innerHTML = formatDate(currentDate);
  
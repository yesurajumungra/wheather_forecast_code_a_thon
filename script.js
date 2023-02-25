
    
    const fetchWeather = function (city) {


const apikey = "533669aa379940f5aebbe903b6a618e4" ; //generate an api key from openweathermap.org by creating a free account 
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" + apikey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => displayWeather(data));}
    
    const displayWeather = function(data) {
      const name = data.name;
      console.log(name);
      const icon = data.weather[0].icon;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const humidity =data.main.humidity;
      const speed  = data.wind.speed;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    }
    const search = function () {
      fetchWeather(document.querySelector(".search-bar").value);
    }
  
  
  document.querySelector(".search button").addEventListener("click", function () {
    search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        search();
      }
    });
  
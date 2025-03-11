function getWeather( cityID ) {
    var key = '{api key}';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      drawWeather(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  window.onload = function() {
    getWeather( 6167865 );
  }
  
  function drawWeather( d ) {
    var celsius = Math.round(parseFloat(d.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
  
    document.getElementById('cityName').innerHTML = d.name;
    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = fahrenheit + '&deg;F';
    document.getElementById('icon').src = "http://openweathermap.org/img/w/"+d.weather[0].icon+".png";
   }
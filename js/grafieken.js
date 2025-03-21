const tijdVak = document.getElementById("js--tijdVak");

setInterval(function(){
    var d = new Date();

    var uur = d.getHours();
    var minuten = d.getMinutes();

    if(minuten < 10){
      const tijd = uur+":0"+minuten;
      tijdVak.innerText = tijd;
    }
    else{
      const tijd = uur+":"+minuten;
      tijdVak.innerText = tijd;
    }
  }, 1000);

  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');


  function formatDate(date) {
    return date.toISOString().split('T')[0];
}
 
const now = new Date();
 
const apiUrlDay = 'https://api.open-meteo.com/v1/forecast?' +
    'latitude=52.386718' +
    '&longitude=4.846544' +
    '&daily=sunrise,sunset' +
    '&timezone=Europe%2FBerlin' +
    '&start_date=' + formatDate(now) +
    '&end_date=' + formatDate(now);

async function getData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function main() {
    const dataDay = await getData(apiUrlDay);
    if (!dataDay) return;

    // Extract sunrise and sunset times
    const sunrise = dataDay.daily.sunrise[0];
    const sunset = dataDay.daily.sunset[0];
    const simplifiedSunrise = sunrise.split('T')[1]; // Extract time part
    const simplifiedSunset = sunset.split('T')[1]; // Extract time part

    // Update the placeholders in the HTML
    const sunriseH3 = document.getElementById("sunrise");
    const sunsetH3 = document.getElementById("sunset");

    sunriseH3.innerHTML = `Sunrise: ${simplifiedSunrise}`;
    sunsetH3.innerHTML = `Sunset: ${simplifiedSunset}`;
}

fetch('zonnepanelen.json')
  .then(response => response.json())
  .then(data => {
    const displayDiv = document.getElementById('data-display');
    displayDiv.innerHTML = `
      <p>Time: ${data.time}</p>
      <p>Temperature: ${data.temperature}°C</p>
    `;
  })
  .catch(error => console.error('Error loading JSON:', error));
 
main();



//   function setCookie(colorScheme, setScheme, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     let expires = "expires="+ d.toUTCString();
//     document.cookie = colorScheme + "=" + setScheme + ";" + expires + ";path=/";
//   }
  
//   function getCookie(colorScheme) {
//     let name = colorScheme + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }

// function checkCookie() {
//   let user = getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//     user = prompt("Please enter your name:", "");
//     if (user != "" && user != null) {
//       setCookie("username", user, 365);
//     }
//   }
// }
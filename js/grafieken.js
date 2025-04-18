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

  setInterval(() => {
    fetch("https://39323.hosts2.ma-cloud.nl/duurzaamhuis/get.php")
      .then(response => response.json())
      .then(data => {
        console.log("Sensor data:", data);
        document.getElementById("js--temp").innerText = data.temperature + "°C";
        document.getElementById("js--humidity").innerText = data.humidity + "%";
        document.getElementById("js--licht").innerText = data.light;
      })
      .catch(err => console.error("Fout bij ophalen JSON:", err));
  }, 5000);
  

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
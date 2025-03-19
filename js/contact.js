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




document.getElementById("js--contactVerstuur").onclick = function() {
  const contactNaam = document.getElementById("js--contactNaam").value;
  const contactOnderwerp = document.getElementById("js--contactOnderwerp").value;
  const contactToelichting = document.getElementById("js--contactToelichting").value;

  const contactFormulier = contactNaam + " " + contactOnderwerp + " " + contactToelichting;
  if(contactNaam === "" || contactOnderwerp === "" || contactToelichting === ""){
    console.log("vul aub alles in");
    alert("vul aub alles in");
  }
  else{
  console.log(contactFormulier);

  document.getElementById("js--contactNaam").value = "";
  document.getElementById("js--contactOnderwerp").value = "";
  document.getElementById("js--contactToelichting").value = "";
  }
};





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
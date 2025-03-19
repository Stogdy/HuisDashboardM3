const rangeValue = document.getElementById("js--tekstGrootte");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--settingsMain");
slider.value = 3;

slider.oninput = function(){
    body.style.fontSize = slider.value + "rem";
};

slider.oninput();

const pickedColor = document.getElementById("js--colorPicker");
const greenColorButton = document.getElementById("js--greenColorButton");
const redColorButton = document.getElementById("js--redColorButton");
const blueColorButton = document.getElementById("js--blueColorButton");
const orangeColorButton = document.getElementById("js--orangeColorButton");
const camoColorButton = document.getElementById("js--camoColorButton");

var greenColorButtonActive = true;
var redColorButtonActive = false;
var blueColorButtonActive = false;
var orangeColorButtonActive = false;
var camoColorButtonActive = false;
const header = document.getElementById("js--header");
const footer = document.getElementById("js--footer");
const buttons = document.getElementById("js--button");
const activeButton = document.getElementById("js--activeButton");

let r= parseInt(pickedColor.value.substring(1,3), 16);
let g= parseInt(pickedColor.value.substring(3,5), 16);
let b= parseInt(pickedColor.value.substring(5,7), 16);
let headerLighter= rgbToHex(r,g,b);

console.log(headerLighter);


function MakeHexComponentDarker(str,which,amount)
{
    let r= parseInt(str.substring(which,which+2), 16);
    r = Math.round(r*amount);
    return r;

}

greenColorButton.onclick = function(){
  r= 17;
  g= 163;
  b= 37;
  let headerNormal= rgbToHex(r,g,b);
  console.log(r + " " +g + " "+b);

  r= 23;
  g= 184;
  b= 45;
  let headerLighter= rgbToHex(r,g,b);
  console.log(r + " " +g + " "+b);

  r= 66;
  g= 92;
  b= 59;
  let footerDarker= rgbToHex(r,g,b);
  console.log(r + " " +g + " "+b);

  r= 255;
  g= 155;
  b= 0;
  let activeButtonColor= rgbToHex(r,g,b);
  activeButton.style.background = activeButtonColor;
  header.style.background = headerNormal;
  footer.style.background = footerDarker;
  console.log("------------------------");

  for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
  button.style.background = headerLighter;
  }
  greenColorButtonActive = true;
}

redColorButton.onclick = function(){
  r=163;
  g=17;
  b=37;
  let headerNormal= rgbToHex(r,g,b);
  console.log(r + " " +g + " "+b);

  r= 204;
  g= 23;
  b= 45;
  let headerLighter= rgbToHex(r,g,b);
  console.log(r + " " +g + " "+b);

  r= 92;
  g= 46;
  b= 45;
  let footerDarker= rgbToHex(r,g,b);
  console.log(r + " " +g + " "+b);

  r= 255;
  g= 155;
  b= 0;
  let activeButtonColor= rgbToHex(r,g,b);
  activeButton.style.background = activeButtonColor;
  header.style.background = headerNormal;
  footer.style.background = footerDarker;
  console.log("------------------------");

  for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
  button.style.background = headerLighter;
  }
  redColorButtonActive = true;
}

blueColorButton.onclick = function(){
  r=37;
  g=17;
  b=153;
  let headerNormal= rgbToHex(r,g,b);
  console.log(r + " " +g + " "+b);

  r= 65;
  g= 43;
  b= 224;
  let headerLighter= rgbToHex(r,g,b);
  console.log(r + " " +g + " "+b);

  r= 45;
  g= 46;
  b= 92;
  let footerDarker= rgbToHex(r,g,b);
  console.log(r + " " +g + " "+b);
  
  r= 255;
  g= 155;
  b= 0;
  let activeButtonColor= rgbToHex(r,g,b);
  activeButton.style.background = activeButtonColor;
  header.style.background = headerNormal;
  footer.style.background = footerDarker;
  console.log("------------------------");

  for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
  button.style.background = headerLighter;
  }
  blueColorButtonActive = true;

}

orangeColorButton.onclick = function(){
  r=235;
  g=135;
  b=0;
  let headerNormal= rgbToHex(r,g,b);
  console.log(r + " " +g + " "+b);

  r= 255;
  g= 155;
  b= 0;
  let headerLighter= rgbToHex(r,g,b);
  console.log(r + " " +g + " "+b);

  r= 205;
  g= 105;
  b= 0;
  let footerDarker= rgbToHex(r,g,b);
  console.log(r + " " +g + " "+b);

  r= 23; 
  g= 184; 
  b= 45;
  let activeButtonColor= rgbToHex(r,g,b);

  activeButton.style.background = activeButtonColor;
  header.style.background = headerNormal;
  footer.style.background = footerDarker;
  console.log("------------------------");

  for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
  button.style.background = headerLighter;
  }
  setCookie("colorscheme", "rgb(23, 184, 45)", 365);
}

camoColorButton.onclick = function(){
  r=102;
  g=120;
  b=95;
  let headerNormal= rgbToHex(r,g,b);
  console.log(r + " " +g + " "+b);

  r= 215;
  g= 211;
  b= 191;
  let headerLighter= rgbToHex(r,g,b);
  console.log(r + " " +g + " "+b);

  r= 75; 
  g= 89; 
  b= 69;
  let footerDarker= rgbToHex(r,g,b);
  console.log(r + " " +g + " "+b);

  r= 173; 
  g= 157; 
  b= 132;
  let activeButtonColor= rgbToHex(r,g,b);

  activeButton.style.background = activeButtonColor;
  header.style.background = headerNormal;
  footer.style.background = footerDarker;
  console.log("------------------------");

  for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
  button.style.background = headerLighter;
  }
  camoColorButtonActive = true;
  let colors = []
  setCookie("colorscheme", "rgb(255, 255, 255)", 365);
}

// if(greenColorButtonActive === true){
//   document.cookie = "scheme=greenScheme; expires=Fri, 1 Jan 2100 12:00:00 UTC; path=../";
// }
// else if(redColorButtonActive === true){
//   document.cookie = "scheme=redScheme; expires=Fri, 1 Jan 2100 12:00:00 UTC; path=../";
// }
// else if(blueColorButtonActive === true){
//   document.cookie = "scheme=blueScheme; expires=Fri, 1 Jan 2100 12:00:00 UTC; path=../";
// }


// console.log(orangeColorButton.cookie);

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }


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
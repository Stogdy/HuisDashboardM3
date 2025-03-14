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
const buttons = document.getElementsByClassName("js--button");
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
  b=163;
  let headerNormal= rgbToHex(r,g,b);
  console.log(r + " " +g + " "+b);

  r= 45;
  g= 23;
  b= 204;
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
  orangeColorButtonActive = true;

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
// else if(orangeColorButtonActive === true){
//   document.cookie = "scheme=orangeScheme; expires=Fri, 1 Jan 2100 12:00:00 UTC; path=../";
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


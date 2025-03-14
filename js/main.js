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
const header = document.getElementById("js--header");
const footer = document.getElementById("js--footer")
const buttons = document.getElementsByClassName("js--button")


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
// pickedColor.onchange = function(e){
//     console.log(e.target .value);
//     header.style.background = pickedColor.value;

//     let r= MakeHexComponentDarker(pickedColor.value,1,0.6);
//     let g= MakeHexComponentDarker(pickedColor.value,3,0.6);
//     let b= MakeHexComponentDarker(pickedColor.value,5,0.6);

//     console.log(r + " " +g + " "+b);
//     let darker= rgbToHex(r,g,b);
//     footer.style.background = darker;
//     console.log("------------------------");

//     for (let i = 0; i < buttons.length; i++) {
//         const button = buttons[i];
//     button.style.background = darker;
        
//     }

// }
greenColorButton.onclick = function(){
  let r= MakeHexComponentDarker(pickedColor.value,1,0.6);
  let g= MakeHexComponentDarker(pickedColor.value,3,0.6);
  let b= MakeHexComponentDarker(pickedColor.value,5,0.6);
  console.log(r + " " +g + " "+b);

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

  header.style.background = headerNormal;
  footer.style.background = footerDarker;
  console.log("------------------------");

  for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
  button.style.background = headerLighter;
  }
}

redColorButton.onclick = function(){
  let r= MakeHexComponentDarker(pickedColor.value,1,0.6);
  let g= MakeHexComponentDarker(pickedColor.value,3,0.6);
  let b= MakeHexComponentDarker(pickedColor.value,5,0.6);
  console.log(r + " " +g + " "+b);

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

  header.style.background = headerNormal;
  footer.style.background = footerDarker;
  console.log("------------------------");

  for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
  button.style.background = headerLighter;
  }
}

blueColorButton.onclick = function(){
  let r= MakeHexComponentDarker(pickedColor.value,1,0.6);
  let g= MakeHexComponentDarker(pickedColor.value,3,0.6);
  let b= MakeHexComponentDarker(pickedColor.value,5,0.6);
  console.log(r + " " +g + " "+b);

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

  header.style.background = headerNormal;
  footer.style.background = footerDarker;
  console.log("------------------------");

  for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
  button.style.background = headerLighter;
  }
}

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


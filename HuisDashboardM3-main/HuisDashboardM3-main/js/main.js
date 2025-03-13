const rangeValue = document.getElementById("js--tekstGrootte");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--settingsMain");
slider.value = 3;

slider.oninput = function(){
    body.style.fontSize = slider.value + "rem";
};

slider.oninput();

const pickedColor = document.getElementById("js--colorPicker");
const header = document.getElementById("js--header");
const footer = document.getElementById("js--footer")
const buttons = document.getElementsByClassName("js--button")


let r= parseInt(pickedColor.value.substring(1,3), 16);
let g= parseInt(pickedColor.value.substring(3,5), 16);
let b= parseInt(pickedColor.value.substring(5,7), 16);
let lighter= rgbToHex(r,g,b);

console.log(lighter);


function MakeHexComponentDarker(str,which,amount)
{
    let r= parseInt(str.substring(which,which+2), 16);
    r = Math.round(r*amount);
    return r;

}
pickedColor.onchange = function(e){
    console.log(e.target .value);
    header.style.background = pickedColor.value;

    let r= MakeHexComponentDarker(pickedColor.value,1,0.6);
    let g= MakeHexComponentDarker(pickedColor.value,3,0.6);
    let b= MakeHexComponentDarker(pickedColor.value,5,0.6);

    console.log(r + " " +g + " "+b);
    let darker= rgbToHex(r,g,b);
    footer.style.background = darker;
    console.log("------------------------");

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
    button.style.background = darker;
        
    }

}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

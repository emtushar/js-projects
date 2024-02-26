const body = document.querySelector("body");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");

let intervalId;

// Random Color Generating Function which will also assign that color to the body tag /element

const randomColorGenerator = function (){
const hexValue = "0123456789ABCDEF";
let colorValue = "#" ; 

// loop to generate random hexCode
for(let i=0;i<6;i++){
const randomNum = Math.floor(Math.random()*16);
colorValue+= hexValue[randomNum];
}

// it will change the background color of the body
body.style.backgroundColor = colorValue
}

// start function  will change body color every  second 

const startFunc = function (){
    if(!intervalId){
        intervalId = setInterval(function(){
            randomColorGenerator() 
        },1000)
    }

}

// stop function  will stop the start function and clear the setInterval function
const stopFunc = function(){
clearInterval(intervalId);
intervalId = null;
}

// It will trigger start function when start button is clicked
startBtn.addEventListener("click",startFunc);


// It will trigger stop function when stop button is clicked
stopBtn.addEventListener("click",stopFunc);
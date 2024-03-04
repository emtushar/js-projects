const keyHolder = document.querySelector(".key");
const main = document.querySelector("#main")
const keyPanel = document.createElement("div")
keyPanel.setAttribute("class","key-panel")

let tracker = [];

window.addEventListener("keydown",(e)=>{
console.log(e.key);
const keyHolder = document.querySelector(".key")
keyHolder.innerHTML = `"${e.key}"`

if(e.key === "Backspace"){
tracker.pop()
}
else if(e.key === "Shift"){

}
else{
    tracker.push(`${e.key}`);
}


const trackerString = tracker.join('');
keyPanel.innerHTML =trackerString;
// console.log(typeof trackerString)

})
main.appendChild(keyPanel)


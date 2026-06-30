const hourText = document.getElementById("hour-container");
const minuteText = document.getElementById("minute-container");
const amPmContainer = document.getElementById("am-pm-container");
const secondBar = document.getElementById("seconds-bar");
let len = 0;

function updateClock(){
    const currentTime = new Date();
    let amPm = "pm";
    if(currentTime.getHours() < 12){
        amPM = "am";
    }
    let hour = currentTime.getHours() % 12 || 12;
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();

    hourText.textContent = hour;
    minuteText.textContent = min;
    console.log(sec);

    let calculateSec = sec/60*100;

    secondBar.style.width = `${calculateSec}%`;

}

updateClock();
setInterval(updateClock, 1000);
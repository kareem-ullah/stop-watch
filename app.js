var hrs = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hrsheading = document.getElementById("hrs");
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");
var interval;

function timer() {
    msec++
    msecheading.innerHTML = msec;
    if (msec >= 100) {
        sec++
        if (sec <= 9) {
            secheading.innerHTML = '0' + sec;
        } else {
            secheading.innerHTML = sec;
        }
        msec = 0;
        if (sec >= 60) {
            min++
            if (min <= 9) {
                minheading.innerHTML = '0' + min;
            } else {
                minheading.innerHTML = min;
            }
            sec = 0;
            if (min >= 60) {
                hrs++
                if(hrs <= 9){
                    hrsheading.innerHTML = '0' + hrs;
                }else{
                    hrsheading.innerHTML = hrs;
                }
                min = 0;
            }
        }
    }
}
function start() {
    interval = setInterval(timer, 10);
    var startbtn = document.getElementById("start");
    startbtn.disabled = true;

    var stopbtn = document.getElementById("stop");
    stopbtn.disabled = false;
   
    var resetbtn = document.getElementById("reset");
    resetbtn.disabled = false;
    startbtn.innerHTML = "Running..."
}
function stop(text) {
    clearInterval(interval);
    var startbtn = document.getElementById("start");
    startbtn.disabled = false;
    var stopbtn = document.getElementById("stop");
    stopbtn.disabled = true;
    var resetbtn = document.getElementById("reset");
    resetbtn.disabled = false;
    
    startbtn.innerHTML = text;
}
function reset() {
    hrs = '00';
    min = '00';
    sec = '00';
    msec = '00';
    hrsheading.innerHTML = hrs;
    
    minheading.innerHTML = min;
    secheading.innerHTML = sec;
    msecheading.innerHTML = msec;
    stop('Start');
    var stopbtn = document.getElementById("stop");
    stopbtn.disabled = false;
    var resetbtn = document.getElementById("reset");
    resetbtn.disabled = true;
}
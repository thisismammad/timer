
var hour, minutes, second;
var startFun = false;
var stopVar = 0;
function start() {

    hour = parseInt(document.getElementById("in-hour").value);
    minutes = parseInt(document.getElementById("in-minutes").value);
    second = parseInt(document.getElementById("in-second").value);
    if (hour != 0 || second != 0 || minutes != 0) {
        document.getElementById("start").innerText = "Stop";
        startFun = !startFun;
        if (startFun == true) {
            stopVar = setInterval(startTimer, 1000);
        } else {
            document.getElementById("start").innerText = "Start";
            clearInterval(stopVar);
        }
    }
}
function startTimer() {
    if (second > 0) {
        second = second - 1;
        document.getElementById("in-second").value = second;
    } else if (minutes > 0) {
        minutes = minutes - 1;
        document.getElementById("in-minutes").value = minutes;
        second = 59;
        document.getElementById("in-second").value = second;
    } else if (hour > 0) {
        hour = hour - 1;
        document.getElementById("in-hour").value = hour;
        minutes = 59;
        document.getElementById("in-minutes").value = minutes;
        second = 59;
        document.getElementById("in-second").value = second;
    } else {
        clearInterval(stopVar);
    }
}

function reset() {
    clearInterval(stopVar);
    document.getElementById("in-hour").value = "00";
    document.getElementById("in-minutes").value = "00";
    document.getElementById("in-second").value = "00";
    document.getElementById("start").innerText = "Start";
    startFun = false;
    stopVar = 0;
}

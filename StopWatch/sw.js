let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timer = null;

const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");


function updateDisplay() {

    hoursDisplay.textContent = String(hours).padStart(2, "0");

    minutesDisplay.textContent = String(minutes).padStart(2, "0");

    secondsDisplay.textContent = String(seconds).padStart(2, "0");

    millisecondsDisplay.textContent = String(milliseconds).padStart(2, "0");
}


function startStopwatch() {

    if (timer !== null) {
        return;
    }

    timer = setInterval(function () {

        milliseconds++;

        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
        }

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();

    }, 10);
}


function pauseStopwatch() {

    clearInterval(timer);

    timer = null;
}


function resetStopwatch() {

    clearInterval(timer);

    timer = null;

    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    updateDisplay();
}


startBtn.addEventListener("click", startStopwatch);

pauseBtn.addEventListener("click", pauseStopwatch);

resetBtn.addEventListener("click", resetStopwatch);

updateDisplay();


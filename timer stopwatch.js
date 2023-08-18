// Timer
let timerInterval;
let timerSeconds = 0;
let timerInput = document.getElementById("timerInput");
let timerDisplay = document.getElementById("timerDisplay");

function startTimer() {
    let inputTime = timerInput.value.split(":");
    if (inputTime.length === 3) {
        let hours = parseInt(inputTime[0]);
        let minutes = parseInt(inputTime[1]);
        let seconds = parseInt(inputTime[2]);

        timerSeconds = hours * 3600 + minutes * 60 + seconds;
        timerInput.disabled = true;

        timerInterval = setInterval(updateTimer, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerSeconds = 0;
    timerInput.value = "";
    timerInput.disabled = false;
    timerDisplay.textContent = "00:00:00";
}

function updateTimer() {
    timerSeconds--;

    if (timerSeconds < 0) {
        clearInterval(timerInterval);
        timerInput.disabled = false;
        return;
    }

    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;

    const displayValue = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    timerDisplay.textContent = displayValue;
}

// Stopwatch
let stopwatchInterval;
let stopwatchSeconds = 0;
let stopwatchDisplay = document.getElementById("stopwatchDisplay");

function startStopwatch() {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchSeconds = 0;
    stopwatchDisplay.textContent = "00:00:00";
}

function updateStopwatch() {
    stopwatchSeconds++;
    const hours = Math.floor(stopwatchSeconds / 3600);
    const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    const seconds = stopwatchSeconds % 60;

    const displayValue = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    stopwatchDisplay.textContent = displayValue;
}

function pad(value) {
    return value.toString().padStart(2, '0');
}

// Attach event listeners
document.getElementById("startTimer").addEventListener("click", startTimer);
document.getElementById("pauseTimer").addEventListener("click", pauseTimer);
document.getElementById("resetTimer").addEventListener("click", resetTimer);

document.getElementById("startStopwatch").addEventListener("click", startStopwatch);
document.getElementById("pauseStopwatch").addEventListener("click", pauseStopwatch);
document.getElementById("resetStopwatch").addEventListener("click", resetStopwatch);

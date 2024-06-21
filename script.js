let timer;
let isRunning = false;
let timeLeft = 300; // 5 minutes in seconds

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const setTimeButton = document.getElementById('setTimeButton');
const customMinutes = document.getElementById('customMinutes');
const customSeconds = document.getElementById('customSeconds');

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timer);
            isRunning = false;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 300;
    updateTimerDisplay();
    isRunning = false;
}

function setCustomTime() {
    const minutes = parseInt(customMinutes.value) || 0;
    const seconds = parseInt(customSeconds.value) || 0;
    timeLeft = (minutes * 60) + seconds;
    updateTimerDisplay();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
setTimeButton.addEventListener('click', setCustomTime);

// Initial display update
updateTimerDisplay();

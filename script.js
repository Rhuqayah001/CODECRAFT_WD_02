// Get the display and buttons
const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Time variables
let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

// Format time as 2-digit numbers
function formatTime(unit) {
  return unit < 10 ? `0${unit}` : unit;
}

//Upadte the display
function updateDisplay() {
  display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Start the stopwatch
function startTimer() {
  if (timer !== null) return; // Prevent multiple intervals
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000); // every 1 second
}

// Stop the stopwatch
function stopTimer() {
  clearInterval(timer);
  timer = null;
}

// Reset everything
function resetTimer() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  timer = null;
  updateDisplay();
}

// Event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
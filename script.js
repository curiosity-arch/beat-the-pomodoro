// Jam Real Time
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("clock").textContent = time;
}
setInterval(updateClock, 1000); // untuk mengatur delay update antara jam lokal dengan jam produk
updateClock();

// Pomodoro Timer
let duration = 25 * 60; // Timer selama 25 menit, dalam detik
let timer = duration;   // Timer aktif yang akan dihitung mundur
let interval = null;    // Variabel untuk menyimpan ID interval (setInterval)

const timerDisplay = document.getElementById("timer");
const statusDisplay = document.getElementById("status");

function updateTimerDisplay() {
    const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
    const seconds = String(timer % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (interval) return;
    interval = setInterval(() => {
        if (timer > 0) {
            timer--;
            updateTimerDisplay();
        } else {
            clearInterval(interval2);
            interval = null;
            alert("Waktu habis! Istirahat dulu~");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    pauseTimer();
    timer = duration;
    updateTimerDisplay();
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

updateTimerDisplay();
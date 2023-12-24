const timerElement = document.getElementById('timer');
let countdown = parseInt(timerElement.innerHTML);
function startCountdown() {
  countdown--;
  timerElement.innerHTML = countdown;
   if (countdown <= 0) {
    alert('Вы победили в конкурсе!');
    clearInterval(interval);
  }
}
const interval = setInterval(startCountdown, 1000);
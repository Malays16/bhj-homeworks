function getHole(index) {
  return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function() {
    if (this.classList.contains('hole_has-mole')) {
      document.getElementById("dead").textContent = +document.getElementById("dead").textContent + 1;
      if (+document.getElementById("dead").textContent >= 10) {
        alert("Вы победили!");
        resetGame();
      }
    } else {
      document.getElementById("lost").textContent = +document.getElementById("lost").textContent + 1;
      if (+document.getElementById("lost").textContent >= 5) {
        alert("Вы проиграли!");
        resetGame();
      }
    }
  }
}

function resetGame() {
  document.getElementById("dead").textContent = 0;
  document.getElementById("lost").textContent = 0;
}
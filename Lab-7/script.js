let circle = document.getElementById("circle");
let button = document.getElementById("moveBtn");

let duration = 16 * 0.2 + "s";

button.onclick = function () {
    circle.style.animation = "moveCircle " + duration + " ease-in-out infinite";
}

function toggleBackground() {
    document.body.classList.toggle("dark-mode");
  }
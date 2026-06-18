// CET138 ePortfolio - script.js
// Samika Paudel

// --- Counter ---
let count = 0;

function increaseCounter() {
  count++;
  document.getElementById("counter").innerText = count;
}

function resetCounter() {
  count = 0;
  document.getElementById("counter").innerText = count;
}

// --- DOM Greeting Demo ---
function showGreeting() {
  const nameInput = document.getElementById("nameInput");
  const output = document.getElementById("greetingOutput");
  const name = nameInput.value.trim();

  if (name === "") {
    output.style.display = "block";
    output.innerText = "Please enter your name first.";
    output.style.borderLeftColor = "#dc3545";
    output.style.color = "#ff6b6b";
    return;
  }

  output.style.display = "block";
  output.innerText = "Hello, " + name + "! Welcome to the JavaScript section.";
  output.style.borderLeftColor = "#39ff88";
  output.style.color = "#c8ffe0";
}

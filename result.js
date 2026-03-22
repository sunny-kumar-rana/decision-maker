const resultText = document.getElementById("resultText");
const options = JSON.parse(localStorage.getItem("options")) || [];

let index = 0;
let interval;

function shuffleAnimation(finalResult) {
  interval = setInterval(() => {
    resultText.textContent = options[index % options.length];
    index++;
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    resultText.textContent = finalResult;
    saveHistory(finalResult);
  }, 2000);
}

function saveHistory(result) {
  const history = JSON.parse(localStorage.getItem("history")) || [];

  history.push({
    options,
    result,
    time: new Date().toLocaleString()
  });

  localStorage.setItem("history", JSON.stringify(history));
}

function rollAgain() {
  start();
}

function goBack() {
  window.location.href = "index.html";
}

function start() {
  const random = options[Math.floor(Math.random() * options.length)];
  shuffleAnimation(random);
}

start();
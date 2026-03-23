let options = [];

function toggleInput() {
  area.style.display = area.style.display === "none" ? "block" : "none";
}

function addOption() {
  const input = document.getElementById("optionInput");
  const value = input.value.trim();
  
  if (!value) return;
  
  options.push(value);
  input.value = "";
  renderOptions();
}

const area = document.getElementById("inputArea");
area.style.display = "none";

const fab = document.querySelector(".fab");
fab.addEventListener("click", toggleInput);

const rollButton = document.querySelector(".roll-btn");
rollButton.addEventListener("click", roll);

const addOptn = document.getElementById("addOption");
addOptn.addEventListener("click", addOption);


function renderOptions() {
  const container = document.getElementById("optionsContainer");
  container.innerHTML = "";

  options.forEach((opt, index) => {
    const div = document.createElement("div");
    div.className = "option";

    div.innerHTML = `
      ${opt} <span onclick="removeOption(${index})">×</span>
    `;

    container.appendChild(div);
  });
}

function removeOption(index) {
  options.splice(index, 1);
  renderOptions();
}

function roll() {
  if (options.length < 2) {
    alert("Add at least 2 options");
    return;
  }

  localStorage.setItem("options", JSON.stringify(options));
  window.location.href = "result.html";
}
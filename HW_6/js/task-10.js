function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const wrapper = document.querySelector("#boxes");

wrapper.style.width = "auto";
wrapper.style.height = "auto";
wrapper.style.display = "flex";
wrapper.style.flexWrap = "wrap";
wrapper.style.justifyContent = "space-between";
wrapper.style.alignItems = "center";

const createBtn = document.querySelector("[data-create]");

const destroyBtn = document.querySelector("[data-destroy]");

const input = document.querySelector('[type="number"]');

function destroyBoxes() {
  wrapper.innerHTML = "";
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    wrapper.append(box);
    box.style.borderColor = "black";
    box.style.borderStyle = "solid";
    const size = 30 + i * 10;
    box.style.height = `${size}px`;
    box.style.width = size + "px";
    box.style.backgroundColor = getRandomHexColor();
  }
}

createBtn.addEventListener("click", (e) => {
  destroyBoxes();
  createBoxes(input.value);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

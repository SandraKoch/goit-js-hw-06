function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const wrapper = document.querySelector("#boxes");
// console.log(wrapper);
wrapper.style.width = "auto";
wrapper.style.height = "auto";
wrapper.style.display = "flex";
wrapper.style.flexWrap = "wrap";
wrapper.style.justifyContent = "space-between";
wrapper.style.alignItems = "center";

const createBtn = document.querySelector("[data-create]");
// console.log(createBtn);

const destroyBtn = document.querySelector("[data-destroy]");
// console.log(destroyBtn);

const input = document.querySelector('[type="number"]');
// const inputValue = input.target.value;
// console.log(input);

function destroyBoxes() {
  wrapper.innerHTML = "";
}

createBtn.addEventListener("click", (e) => {
  destroyBoxes();

  const inputValue = input.value;
  // console.log("inputValue", inputValue);
  // console.log("innerHTML", e.innerHTML);
  for (let i = 0; i < inputValue; i++) {
    const box = document.createElement("div");

    console.log(box);

    wrapper.append(box);
    box.style.borderColor = "black";
    box.style.borderStyle = "solid";
    const size = 30 + i * 10;
    box.style.height = `${size}px`;
    box.style.width = size + "px";
    box.style.backgroundColor = getRandomHexColor();
  }
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

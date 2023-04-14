function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
// console.log(body);

const button = document.querySelector(".change-color");
// console.log(button);
const span = document.querySelector(".color");
// console.log(span);

button.addEventListener("click", () => {
  const currentColor = getRandomHexColor();

  body.style.backgroundColor = currentColor;
  span.innerHTML = currentColor;
});

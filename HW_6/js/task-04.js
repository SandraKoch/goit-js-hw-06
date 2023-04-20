// const counterValue = document.querySelector("#value");
let counterValue = 0;
// console.log(counterValue);

const counterEl = document.querySelector("#value");

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

incrementButton.addEventListener("click", () => {
  let incrementedValue = (counterValue += 1);
  counterEl.innerHTML = incrementedValue;

  // let incrementedValue = +counterValue.innerHTML; //+ changes string to a number
  // counterValue.innerHTML = incrementedValue += 1;
});

decrementButton.addEventListener("click", () => {
  let decrementedValue = (counterValue -= 1);
  counterEl.innerHTML = decrementedValue;
  // let decrementedValue = Number.parseInt(counterValue.innerHTML);
  // counterValue.innerHTML = decrementedValue -= 1;
});

const counterValue = document.querySelector("#value");
console.log(counterValue);

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

incrementButton.addEventListener("click", () => {
  let incrementedValue = +counterValue.innerHTML; //+ changes string to a number
  counterValue.innerHTML = incrementedValue += 1;
});

decrementButton.addEventListener("click", () => {
  let decrementedValue = Number.parseInt(counterValue.innerHTML);
  counterValue.innerHTML = decrementedValue -= 1;
});

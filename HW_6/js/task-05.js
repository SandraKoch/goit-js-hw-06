const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
console.log(input);
console.log(span);

input.addEventListener("input", (e) => {
  const inputValue = e.target.value;
  span.innerHTML = inputValue !== "" ? inputValue : `Anonymous`;
});

// tertiary operator
// (inputValue !== "") ? span.innerHTML = inputValue : span.innerHTML = `Anonymous`;

// classic if
// if (inputValue !== "") {
//     span.innerHTML = inputValue;
//   } else {
//     span.innerHTML = `Anonymous`;
//   }

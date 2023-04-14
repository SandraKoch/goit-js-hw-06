const input = document.getElementById("font-size-control");
console.log(input);
const span = document.getElementById("text");
console.log(span);

const output = span.innerHTML;
input.addEventListener("input", (e) => {
  span.style.fontSize = e.target.value + "px";
  console.log(e.target.value);
});

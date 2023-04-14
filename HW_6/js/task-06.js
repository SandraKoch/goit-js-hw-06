const input = document.getElementById("validation-input");

input.addEventListener("blur", (e) => {
  const inputData = e.target.value;
  console.log(inputData);
  if (inputData.length >= input.dataset.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});

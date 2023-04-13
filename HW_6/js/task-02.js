const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredientsElement = document.querySelector("#ingredients");
console.log(listOfIngredientsElement);

ingredients.forEach((element) => {
  const listItem = document.createElement("li");

  listItem.classList.add("item");

  listItem.innerHTML = element;
  listOfIngredientsElement.appendChild(listItem);
});

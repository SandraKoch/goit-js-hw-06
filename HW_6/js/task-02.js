const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredientsElement = document.querySelector("#ingredients");
// console.log(listOfIngredientsElement);

const ingridientsElements = ingredients.map((element) => {
  const listItem = document.createElement("li");

  listItem.classList.add("item");
  listItem.innerHTML = element;

  return listItem;
});

// console.log(ingridientsElements);

listOfIngredientsElement.append(...ingridientsElements);

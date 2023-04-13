const categoriesTotal = document.querySelectorAll("li.item");
console.log("Number of categories:", categoriesTotal.length);

const headline = categoriesTotal.forEach((element) => {
  const headlineElement = element.querySelector("h2");
  console.log("Category: ", headlineElement.innerHTML);

  const elementsTotal = element.querySelectorAll("li");
  console.log("Elements: ", elementsTotal.length);
});

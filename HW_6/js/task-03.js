const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryElement = document.querySelector(".gallery");

// ___________version with reduce___________
// let template = "";
// const template = images.reduce((acc, currentValue) => {
//   return (
//     acc +
//     `<li><img src="${currentValue.url}" alt="${currentValue.alt}" class="image"></li>`
//   );
// }, "");

// ___________version with forEach___________
// let template = "";
// images.forEach((element) => {
//   template += `<li><img src="${element.url}" alt="${element.alt}" class="image"></li>`;
// });

let templates = images
  .map(
    (image) =>
      `<li><img src="${image.url}" alt="${image.alt}" class="image"></li>`
  )
  .join("");

console.log(templates);

galleryElement.insertAdjacentHTML("beforeend", templates);

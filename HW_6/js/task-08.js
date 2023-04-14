const form = document.querySelector(".login-form");

const elements = form.elements;

const button = document.querySelector('[type="submit"]');

form.addEventListener("submit", (e) => {
  e.preventDefault(); //how to prevent reload

  const {
    elements: { email, password },
  } = e.currentTarget;
  console.log(email.value);

  if (email.value === "" || password.value === "") {
    console.log("You have to fill both fields");
  } else {
    console.log(
      `Your email address: ${email.value} and password: ${password.value}`
    );
    e.currentTarget.reset();
  }
});

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value.trim() === "" || password.value.trim() === "") {
    window.alert("All the fields must be filled");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    event.currentTarget.reset();

    console.log(data);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const refs = {
//   boxes: document.querySelector("#boxes"),
//   buttonCreate: document.querySelector("[data-create]"),
//   buttonDestroy: document.querySelector("[data-destroy]"),
//   inputField: document.querySelector("input"),
// };

// refs.buttonCreate.addEventListener("click", onClickCreateBoxes);
// refs.buttonDestroy.addEventListener("click", onClickDestroyBoxes);
// refs.inputField.addEventListener('input', onInputChange);

// function onClickCreateBoxes(amount) {

// }

// function onClickDestroyBoxes() {}

// function onInputChange(event) {

// }

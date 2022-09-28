const inputField = document.querySelector("#validation-input");
const lengthInput = Number(inputField.dataset.length);

inputField.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (inputField.value.length === lengthInput) {
    inputField.classList.add("valid");
    if (inputField.classList.contains("invalid")) {
      inputField.classList.remove("invalid");
    }
  } else {
    if (inputField.classList.contains("valid")) {
      inputField.classList.remove("valid");
    }
    inputField.classList.add("invalid");
  }
}

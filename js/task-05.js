const inputField = document.querySelector("#name-input");
const outputNameLabel = document.querySelector("#name-output");

inputField.addEventListener("input", onInputChange);

function onInputChange(event) {
  outputNameLabel.textContent = event.currentTarget.value.trim()
    ? event.currentTarget.value.trim()
    : "Anonymous";
}

// function onInputChange(event) {
//   if (event.currentTarget.value === "") {
//     outputNameLabel.textContent = "Anonymous";
//   } else {
//     outputNameLabel.textContent = event.currentTarget.value.trim();
//   }
// }

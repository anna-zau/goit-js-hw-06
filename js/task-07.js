const inputSlider = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

inputSlider.addEventListener("input", (event) => {
  text.style.fontSize = inputSlider.value + "px";
});

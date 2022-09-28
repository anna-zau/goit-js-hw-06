function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  colorLabel: document.querySelector(".color"),
  buttonChange: document.querySelector(".change-color"),
};

refs.buttonChange.addEventListener("click", onClickButtonColorChange);

function onClickButtonColorChange() {

  refs.body.style.backgroundColor = `${getRandomHexColor()}`;
  refs.colorLabel.textContent = refs.body.style.backgroundColor;
}

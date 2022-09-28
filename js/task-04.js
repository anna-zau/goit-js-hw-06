const refs = {
  increaseButton: document.querySelector('[data-action="increment"]'),
  decreaseButton: document.querySelector('[data-action="decrement"]'),
  valueLabel: document.querySelector("#value"),
};

let counterValue = 0;

refs.increaseButton.addEventListener("click", increaseCounteronClick);
refs.decreaseButton.addEventListener("click", decreaseCounterOnClick);

function increaseCounteronClick() {
  counterValue += 1;
  refs.valueLabel.textContent = counterValue;
}

function decreaseCounterOnClick() {
  counterValue -= 1;
  refs.valueLabel.textContent = counterValue;
}

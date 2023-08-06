const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

refs.decrementBtn.addEventListener("click", decrementValueHandler);
refs.incrementBtn.addEventListener("click", incrementValueHandler);

function decrementValueHandler(event) {
  counterValue--;
  refs.value.textContent = counterValue;
}

function incrementValueHandler(event) {
  counterValue++;
  refs.value.textContent = counterValue;
}

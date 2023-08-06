const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", changeOutputNameHandler);

function changeOutputNameHandler(event) {
  const inputValue = event.currentTarget.value;
  if (inputValue === "") {
    refs.nameOutput.textContent = "Anonymous";
  } else {
    refs.nameOutput.textContent = inputValue;
  }
}

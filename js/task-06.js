const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", inputBlurHandler);

function inputBlurHandler(event) {
  const target = event.currentTarget;
  const neededLength = Number(target.dataset.length);

  target.value.trim().length === neededLength
    ? showValidValidation(target)
    : showInvalidValidation(target);
}

function showValidValidation(target) {
  target.classList.remove("invalid");
  target.classList.add("valid");
}
function showInvalidValidation(target) {
  target.classList.remove("valid");
  target.classList.add("invalid");
}

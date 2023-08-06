const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", inputBlurHandler);

function inputBlurHandler(event) {
  const target = event.currentTarget;
  const neededLength = target.dataset.length;

  if (target.value.length >= neededLength) {
    showValidValidation(target);
  } else {
    showInvalidValidation(target);
  }
}

function showValidValidation(target) {
  if (target.classList.contains("invalid")) {
    target.classList.remove("invalid");
  }
  target.classList.add("valid");
}
function showInvalidValidation(target) {
  if (target.classList.contains("valid")) {
    target.classList.remove("valid");
  }
  target.classList.add("invalid");
}

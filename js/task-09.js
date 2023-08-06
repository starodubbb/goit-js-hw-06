const refs = {
  body: document.querySelector("body"),
  colorText: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
};

refs.changeColorBtn.addEventListener("click", changeColorHandler);

function changeColorHandler(event) {
  const newColor = getRandomHexColor();
  refs.colorText.textContent = newColor;
  refs.body.style.backgroundColor = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

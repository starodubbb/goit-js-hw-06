const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

changeFontSizeHandler();
refs.fontSizeControl.addEventListener("input", changeFontSizeHandler);

function changeFontSizeHandler() {
  refs.text.style.fontSize = `${refs.fontSizeControl.value}px`;
}

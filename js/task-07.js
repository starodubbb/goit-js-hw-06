const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.fontSizeControl.addEventListener("input", changeFontSizeHandler);

function changeFontSizeHandler({ currentTarget }) {
  console.log(currentTarget.value);
  refs.text.style.fontSize = `${currentTarget.value}px`;
}

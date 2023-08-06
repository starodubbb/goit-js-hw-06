const INITIAL_WIDTH = 30;
const INITIAL_HEIGHT = 30;
const INCREMENT_FOR_WIDTH = 10;
const INCREMENT_FOR_HEIGHT = 10;

let currentWidth = INITIAL_WIDTH;
let currentHeight = INITIAL_HEIGHT;

const refs = {
  numberInput: document.querySelector('#controls input[type="number"]'),
  createBoxesBtn: document.querySelector("button[data-create]"),
  destroyBoxesBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.createBoxesBtn.addEventListener("click", createBoxesHandler);
refs.destroyBoxesBtn.addEventListener("click", destroyBoxesHandler);

/**
  |============================
  | HANDLERS
  |============================
*/
function createBoxesHandler(event) {
  const newBoxes = createBoxes(refs.numberInput.value);
  refs.boxes.append(...newBoxes);
}

function destroyBoxesHandler(event) {
  refs.boxes.innerHTML = "";
  currentWidth = INITIAL_WIDTH;
  currentHeight = INITIAL_HEIGHT;
}

/**
  |============================
  | OTHER FUNCTIONS
  |============================
*/
function createBoxes(amount) {
  const newBoxes = [];
  for (let i = 0; i < amount; i++) {
    newBoxes.push(createBox());
  }
  return newBoxes;
}

function createBox() {
  const box = document.createElement("div");
  box.classList.add("boxes-item");
  box.style.width = `${currentWidth}px`;
  box.style.height = `${currentHeight}px`;
  box.style.backgroundColor = getRandomHexColor();

  currentWidth += INCREMENT_FOR_WIDTH;
  currentHeight += INCREMENT_FOR_HEIGHT;

  return box;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

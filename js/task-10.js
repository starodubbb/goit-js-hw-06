const refs = {
  numberInput: document.querySelector('#controls input[type="number"]'),
  createBoxesBtn: document.querySelector("button[data-create]"),
  destroyBoxesBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

const INITIAL_WIDTH = 30;
const INITIAL_HEIGHT = 30;
const INCREMENT_FOR_WIDTH = 10;
const INCREMENT_FOR_HEIGHT = 10;

const min = refs.numberInput.min;
const max = refs.numberInput.max;
const step = refs.numberInput.step;

let currentWidth = INITIAL_WIDTH;
let currentHeight = INITIAL_HEIGHT;

refs.createBoxesBtn.addEventListener("click", createBoxesHandler);
refs.destroyBoxesBtn.addEventListener("click", destroyBoxesHandler);

/**
  |============================
  | HANDLERS
  |============================
*/
function createBoxesHandler() {
  if (!checkInputValidation()) {
    return;
  }
  const newBoxes = createBoxes(refs.numberInput.valueAsNumber);
  refs.boxes.append(...newBoxes);
}

function destroyBoxesHandler() {
  refs.boxes.innerHTML = "";
  refs.numberInput.value = "";
  currentWidth = INITIAL_WIDTH;
  currentHeight = INITIAL_HEIGHT;
}

/**
  |============================
  | OTHER FUNCTIONS
  |============================
*/
function checkInputValidation() {
  const inputValue = refs.numberInput.valueAsNumber;
  console.log(inputValue);
  if (inputValue > max) {
    alert("Your value is greater than allowed");
    return false;
  }
  if (inputValue < min) {
    alert("Your value is less than allowed");
    return false;
  }
  if (inputValue % step !== 0) {
    alert("Use correct step!");
    return false;
  }
  return true;
}

function createBoxes(amount) {
  const newBoxes = [];
  for (let i = 0; i < amount; i++) {
    newBoxes.push(createBox());
  }

  currentWidth = INITIAL_WIDTH;
  currentHeight = INITIAL_HEIGHT;
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

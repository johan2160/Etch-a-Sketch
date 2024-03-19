const container = document.querySelector(".container");
const inputColor = document.querySelector(".pickcolor-btn");
const gridRange = document.querySelector("#grid-selection");
const gridRangeText = document.querySelector("#grid-selection-txt");
const resetBtn = document.querySelector(".reset-btn");
let numberOfSquares = gridRange.value;
let squareColor;

gridRangeText.innerText = `${gridRange.value} x ${gridRange.value}`;

const generateGrid = () => {
  const containerWidth = 550;
  const squarePerimeter = containerWidth / numberOfSquares;

  for (let i = 1; i <= numberOfSquares; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (let j = 1; j <= numberOfSquares; j++) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.style.width = `${squarePerimeter}px`;
      item.style.height = `${squarePerimeter}px`;
      row.appendChild(item);

      item.addEventListener("mouseover", () => {
        item.style.backgroundColor = squareColor;
      });
    }
  }
};

generateGrid();

const deleteCurrentGrid = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const regenerateGrid = () => {
  deleteCurrentGrid();
  numberOfSquares = gridRange.value;
  generateGrid();
};

gridRange.addEventListener("change", () => {
  gridRangeText.innerText = `${gridRange.value} x ${gridRange.value}`;
  regenerateGrid();
});

inputColor.addEventListener("change", () => {
  squareColor = inputColor.value;
});

resetBtn.addEventListener("click", regenerateGrid);

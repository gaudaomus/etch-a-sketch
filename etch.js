const container = document.querySelector(".container");
const clearButton = document.querySelector('button');

clearButton.addEventListener('click', function clear() {
  let child = container.lastElementChild;
  while(child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
  number = prompt("How many grids you want?");
  newGrid(number);
});

function randomColor() {
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);
  return `rgb(${red},${green},${blue})`;
}

function newGrid(number) {
  for (i=0; i<number**2; i++) {
    let newGrid = document.createElement('div');
    newGrid.classList.add('grid');
    const size = 600/number;
    newGrid.setAttribute("style",`width: ${size}px; height: ${size}px;`);
    container.appendChild(newGrid);
  }
  const grids = document.querySelectorAll(".grid");
  grids.forEach(grid => grid.addEventListener('mouseover', () => grid.style.backgroundColor = randomColor()));
}

let number = 16;
newGrid(number);

/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const grid = document.querySelector(".grid");

// highlight entire grid when mouse enters
grid.addEventListener("mouseenter", () => {
  grid.classList.add("highlight-grid");
});

// unhighlight entire grid when mouse exits
grid.addEventListener("mouseleave", () => {
  grid.classList.remove("highlight-grid");
});

const cells = document.querySelectorAll(".cell");

// toggle cell highlight on mouse click
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.classList.toggle("highlight-cell");
  });
});

const middleCell = grid.querySelector(".cell18");
const body = document.querySelector("body");
// add key down event listener
window.addEventListener("keydown", (event) => {
  let keyPressed = event.key;
  console.log(keyPressed);

  // display key pressed in the center cell
  middleCell.classList.add("cell-text");
  middleCell.innerHTML = keyPressed;

  // change page background color if Shift key pressed
  if (keyPressed === "Shift") {
    console.log("Shift pressed!");
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
    }
  }
});

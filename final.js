// Get the click counter element and set initial count to 0
const clickCounter = document.getElementById("count");
let count = 0;

// Increment count and update display on each click
document.addEventListener("click", () => {
  count++;
  clickCounter.textContent = count;
});

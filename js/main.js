// Nikkie: This looks great, I like the comments on each line and the organization of your code. 
// Toggle between light and dark modes
const backgroundModeBtn = document.getElementById("backgroundModeBtn");

backgroundModeBtn.addEventListener("click", event => {
  toggleBackgroundHelper();
});

function toggleLightMode(color) { 
  document.body.style.color = "black"; // change text to black
  document.body.style.backgroundcolor = "lightgrey"; // change background color to lightgrey
  document.body.style.background = "lightgrey"; // change background label to lightgrey
} 

function toggleDarkMode() { 
  document.body.style.color = "white"; // change text to white
  document.body.style.backgroundcolor = "black"; // change background color to black
  document.body.style.background = "black"; // change background label to black
} 
  
function toggleBackgroundHelper() { 
  if(document.body.style.backgroundcolor != "lightgrey") {
    toggleLightMode("lightgrey"); // toggle to light mode if on dark mode
    backgroundModeBtn.innerHTML = "Dark Mode"; // change button text
  } else {
    toggleDarkMode(); // toggle to dark mode if on light mode
    backgroundModeBtn.innerHTML = "Light Mode"; // change button text
  }
}

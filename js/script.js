// Find Street Script

const streetNumberInput = document.getElementById('streetNumberInput');
const streetNameInput = document.getElementById('streetNameInput');
const findStreetBtn = document.getElementById('findStreetBtn');

// Display
const resultDisplay = document.getElementById('resultDisplay');

// Function to Find Street
function findStreet() {

  // Get Inputs
  let streetNumber = streetNumberInput.value;
  let streetName = streetNameInput.value;

  // Construct Address
  let streetAddress = "" + streetNumber + " " + streetName

  // Display Address on Display Element
  resultDisplay.innerText = streetAddress

  return
}

// Connect Button click to Find Street Function
findStreetBtn.onclick = findStreet;
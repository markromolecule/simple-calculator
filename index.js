// Select display element
const display = document.getElementById("display");

// Append input to the display
function appendToDisplay(input) {
    if (display.value === "Error") {
        display.value = ""; // Reset if previous calculation resulted in an error
    }
    display.value += input;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Calculate the expression
function calculate() {
    try {
        display.value = eval(display.value) || "0"; // Prevent empty input
    } catch (error) {
        display.value = "Error";
    }
}

// Handle keyboard input
document.addEventListener("keydown", (event) => {
    const allowedKeys = "0123456789+-*/.=C";
    const key = event.key;

    if (allowedKeys.includes(key)) {
        if (key === "C") {
            clearDisplay();
        } else if (key === "=" || key === "Enter") {
            calculate();
        } else {
            appendToDisplay(key);
        }
    }

    if (key === "Backspace") {
        display.value = display.value.slice(0, -1); // Remove last character
    }
});

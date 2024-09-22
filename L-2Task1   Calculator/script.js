let screen = document.getElementById('screen');

// Function to append clicked buttons to the display
function appendToScreen(value) {
    screen.value += value;
}

// Function to clear the entire screen
function clearScreen() {
    screen.value = '';
}

// Function to delete the last character on the screen
function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        // Use eval for general calculations
        let result = eval(screen.value.replace('^', '**'));  // Replace ^ with ** for exponentiation
        screen.value = result;
    } catch (error) {
        screen.value = 'Error';
    }
}

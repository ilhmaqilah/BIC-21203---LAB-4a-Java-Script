const userInput = document.getElementById("userInput");
const checkButton = document.getElementById("checkBtn");
const resultDisplay = document.getElementById("result");

function checkInput() {
    const rawValue = userInput.value.trim();

    if (rawValue === "") {
        resultDisplay.textContent = "Please enter a valid number!";
        return;
    }

    const numberValue = Number(rawValue);

    if (Number.isNaN(numberValue)) {
        resultDisplay.textContent = "Please enter a valid number!";
    } else if (numberValue < 10) {
        resultDisplay.textContent = "The number is lower than 10";
    } else if (numberValue > 10) {
        resultDisplay.textContent = "The number is higher than 10";   
    } else {
        resultDisplay.textContent = "The number is equal to 10";       
    }
}

checkButton.addEventListener("click", checkInput);
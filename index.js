const dateOfBirth = document.querySelector("#d-o-b");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box")

function valueComparison(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.innerText = ("Your birthday is lucky!");
    } else {
        outputBox.innerText = ("Uh-oh.. Not a lucky birthday.")
    }
}

function luckyBirthCheck() {
    const date = dateOfBirth.value;
    const sum = calculateSum(date);
    if (sum && dateOfBirth)
        valueComparison(sum, luckyNumber.value)
    else
        outputBox.innerText = "Yo! Provide input in both fields.";
}

function calculateSum(date) {
    date = date.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < date.length; index++) {
        sum = sum + date.charAt(index);
    }
    return sum;
}

checkBtn.addEventListener("click", luckyBirthCheck)
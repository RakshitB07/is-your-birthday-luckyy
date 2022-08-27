const dateOfBirth = document.querySelector("#d-o-b");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-number");

checkBtn.addEventListener("click", function getValues() {
    console.log(dateOfBirth.value, luckyNumber.value);
})
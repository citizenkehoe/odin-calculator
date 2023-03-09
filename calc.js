function add(a, b) {
    console.log(a + b);
}

function subtract(a, b) {
    console.log(a - b);
}

function multiply(a, b) {
    console.log(a * b);
}

function divide(a, b) {
    console.log(a / b);
}

function operate(sign, x, y) {
    switch(sign) {
        case "+":
            add(x, y);
            break;
        case "-":
            subtract(x, y);
            break;
        case "*":
            multiply(x, y);
            break;
        case "/":
            divide(x, y);
            break;
    }   
}

let display = document.getElementById('display');
let displayNumArr = [];
let displayNum;

function nextDigit() {
    displayNumArr.push(this.getAttribute('data-num'));
    displayNum = displayNumArr.join("");
    display.textContent = displayNum;
    // return displayNum;
}


let numButtons = document.querySelectorAll('.number');

numButtons.forEach(button => {
    button.addEventListener('click', nextDigit)
});
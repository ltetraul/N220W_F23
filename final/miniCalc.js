let dropD = document.getElementById('operator');
let results = document.getElementById('results');

function calculate() {
    let operation = dropD.options[dropD.selectedIndex].value;
    let choice;
    let firstNum = parseFloat(document.getElementById("firstNum").value);
    let lastNum = parseFloat(document.getElementById("lastNum").value);
    let sign;


    switch(operation) {
        case "add":
            choice = firstNum + lastNum;
            sign = "+";
            break;
        case "subtract":
            choice = firstNum - lastNum;
            sign = "-";
            break;
        case "multiply":
            choice = firstNum * lastNum;
            sign = "*";
            break;
        case "divide":
            choice = firstNum / lastNum;
            sign = "/";
            break;
        default:
            choice = "Which operator do you want to use?";
            return;
    }
    results.textContent = firstNum + sign + lastNum + "=" + choice;
}
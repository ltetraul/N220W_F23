let flips = 0;
let heads = 0;
let tails = 0;
let result;

function table(flip, result) {
    let table = document.getElementById('table')
    let row = table.insertRow();
    row.insertCell().textContent = flip;
    row.insertCell().textContent = result;
}

function ratio() {
    if (result == 'Heads') {
        heads += 1;
    } else if (result == 'Tails') {
        tails += 1;
    }
    let ratio = document.getElementById('ratio');
    ratio.innerText = `Heads: ${heads} Tails: ${tails}`;
}

function flip() {
    let random = Math.floor(Math.random() * 2);
    if (random == 0) {
        result = "Heads";
    } else {
        result = "Tails";
    }
    flips++;
    table(flips, result)
    ratio();
    document.getElementById('coinImg').src = result + '.png';
    document.getElementById('results').innerText = `Result: ${result}`;
}
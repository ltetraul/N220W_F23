function calcInterest() {
    let principle = parseFloat(document.getElementById("principle").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let time = parseFloat(document.getElementById("time").value);
    let interest = principle * (1 + rate/100 * time) - principle;
    let total = interest + principle;
    document.getElementById('answer').innerHTML = "With a beginning principal of $" + principle.toFixed(2) + " and with a growth rate of " + rate.toFixed(2) + "% for " + time + " years, your total interest will be $" + interest.toFixed(2) + " with a grand total of $" + total.toFixed(2) + ".";
}

//
//bank account
let bank = 45.67;
let toy = 45.99;
let buyToy = bank>toy;

if(buyToy) {
    document.getElementById('bank').innerHTML = "Let's go buy it!"
}
else {
    document.getElementById('bank').innerHTML = "Better save up!"
}

//birthday month
let today = new Date();
let thisMonth = today.getMonth()+1;

if(thisMonth == 3) {
    document.getElementById('birthday').innerHTML = "Have a great birthday month!"
}
else {
    document.getElementById('birthday').innerHTML = "No parties for you this month XD"
}

//right to vote
function checkAge() {
    let myAge = document.getElementById('age').value;
    let ageText;

    if(myAge < 18) {
        ageText = "You cannot vote"
    }
    else if(myAge == 18) {
        ageText = "You can finally vote now!"
    }
    else{
        ageText = "You can vote";
    }
    
    document.getElementById('voteAge').innerHTML = ageText;
}
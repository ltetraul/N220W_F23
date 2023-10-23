let cWinnings = 50;
var wText;
function chanceRoll() {
    document.getElementById('cWinnings').innerHTML = "Current Winnings: " + cWinnings;
    let randNum = Math.floor(Math.random() * 6) + 1;
    switch(randNum) {
        case 1:
            winningText = "It is good to be number 1! You doubled your winnings!";
            cWinnings = cWinnings *= 2;
            break;
        case 2:
            winningText = "Second best is not good enough. You lose 20 points.";
            cWinnings = cWinnings -= 20;
            break;
        case 3:
            winningText = "Three is not a lucky number at all. You lose all your winnings!";
            cWinnings = cWinnings -= cWinnings;
            break;
        case 4:
            winningText = "Four is lucky like a four-leafed clover. You won 400 points!";
            cWinnings = cWinnings += 400;
            break;
        case 5:
            winningText = "Five Alive! You are still in the game, but there is no change in your winnings.";
            cWinnings = cWinnings += 0;
            break;
        case 6:
            var userNum = prompt("Enter a number between 1 and 50: ");
            var targetNum = 44;
            if (userNum == targetNum) {
                winningText = "You are lucky indeed! You just multiplied your winnings by your chosen number";
                cWinnings = cWinnings *= targetNum;
            }
            else if (userNum < 25) {
                winningText = "You picked a rather low number, but you win those points.";
                cWinnings = cWinnings += Number(userNum);
            }
            else {
                winningText = "Good choice - but not what I was hoping for.";
                cWinnings = cWinnings -= Number(userNum);
            }
    }
    document.getElementById('wText').innerHTML = "You rolled a " + randNum + "! " + winningText;
    document.getElementById('newWinnings').innerHTML = "New Winnings: " + cWinnings;
}
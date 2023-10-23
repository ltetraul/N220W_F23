//Sports Career

let sport;
function shootUrShot() {
    alert("You make the shot and win the game! Your team lifts you up as the crowd chants MVP!");
}
function pass2Team() {
    alert("Your teammate is not built for these moments. He dribbles around, turns the ball over, and sells the game.");
}
function extraPoint() {
    alert("You make the kick and go to overtime. Your team wins the coin toss and drives down the field to win the game!");
}
function go4Two() {
    alert("The two point conversion is unsuccessful and you lose the game by one point.");
}
function chargeMound() {
    alert("You win the fight but get ejected from the game. The pinch runner that is subbed in for you gets picked off at first.");
}
function takeBase() {
    alert("You calmly go to first and end up scoring the game-winning run!");
}
function enterGame() {
    alert("You enter the game and the crowd goes wild.");
    if(sport.toUpperCase() == "BASKETBALL"){
        alert("You are having the game of your life and have 50 points already. You have the ball with only a few seconds left, down by 2.");
        let bball = prompt("Do you take the 3 yourself or pass it to your teammate?: SHOOT or PASS");
        if(bball. toUpperCase() == "SHOOT") {
            shootUrShot();
        }
        else {
            pass2Team();
        }
    }
    else if (sport.toUpperCase() == "FOOTBALL") {
        alert("You score a touchdown at the last second and are now only down by one point");
        let foot = prompt("Do you kick the extra point or go for 2?: KICK or TWO");
        if(foot. toUpperCase() == "KICK") {
            extraPoint();
        }
        else {
            go4Two();
        }
    }
    else if (sport.toUpperCase() == "BASEBALL") {
        alert("The pitcher hits you with a fastball and you think it was on purpose.");
        let hit = prompt("Do you charge the mound or just take your base?: CHARGE or TAKE");
        if(hit. toUpperCase() == "CHARGE") {
            chargeMound();
        }
        else {
            takeBase();
        }
    }
}

function leaveGame() {
    alert("You go back to the locker room and get cut from the team.");
}

function start() {
    let player = prompt("Welcome to my sports-themed choose-your-own adventure game. Please start by entering your name: ");
    alert("Welcome, " + player + "! Today we are going to be playing sports! Click okay to begin.");
    sport = prompt("To begin your career, you need to choose a sport. Please pick your favorite sport: basketball, football, or baseball");
    let game = prompt("You are walking through the tunnel on your way to play in the first game of your career. You are getting very nervous and start to feel sick to your stomach. Do you ENTER or LEAVE?");

    if(game.toUpperCase() == "ENTER") {
        enterGame();
    }
    else {
        leaveGame();
    }
}
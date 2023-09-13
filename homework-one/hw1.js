//dating
let ticketNum = 3;
let ticketCost = 14;
let ttCost = ticketNum * ticketCost;
document.getElementById("ticketNum").innerHTML += ticketNum;
document.getElementById("ticketCost").innerHTML += ticketCost;
document.getElementById("ttCost").innerHTML += ttCost;


//shopping
let shirt = 35;
let pants = 75;
let shoes = 60;
let bankAcc = 235.87;
let outfit = shirt + pants + shoes;
let bank = bankAcc - outfit;
let jacket = 70;
let addJacket = outfit + jacket <= bank;
document.getElementById("bank").innerHTML += bank;
document.getElementById("addJacket").innerHTML += addJacket;

//pizza
let pizzas = 4;
let slicesPerPizza = 8;
let totalSlices = pizzas * slicesPerPizza;
let studentAppetite = 2.5;
let students = Math.floor(totalSlices / studentAppetite);
let profPizza = totalSlices % studentAppetite;
document.getElementById("students").innerHTML += students;
document.getElementById("profPizza").innerHTML += profPizza;

//monty
let adultPrice = 12;
let childPrice = 6;
let drinkPrice = 1.5;
let numAdults = 2;
let numChildren = 1;
let numDrinks = 3;
let Monty = (adultPrice * numAdults) + (childPrice * numChildren)+ (drinkPrice * numDrinks);
document.getElementById("Monty").innerHTML += Monty;


//tips
let weekOne = 202.45;
let weekTwo = 134.97;
let weekThree = 256.63;
let weekFour = 178.22;
let total = weekOne + weekTwo + weekThree + weekFour;
let tips = total / 4;
document.getElementById("tips").innerHTML += tips;


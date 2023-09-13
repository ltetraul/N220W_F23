function changeTxt() {
    document.getElementById('changeTxt').innerHTML = "This text has been changed. ";
}

changeTxt();

function btmTxt() {
    document.write("This function does not take parameters.")
}

btmTxt();

var greeting = function() {
    console.log("Hello, world!");
}

greeting();

let band = "Nirvana";

function favBand(b) {
    document.getElementById('favBand').innerHTML = "My favorite band is " + b;
}

favBand(band);
favBand("Teddy Swims");

function logit(name) {
    console.log(name);
}
logit("lucas");

var rHeight = 12;
var rWidth = 23;

function recPerm(h,w) {
    let perimeter = (2*h) + (2*w);
    document.getElementById('panswer').innerHTML = perimeter + " feet.";
}

recPerm(rHeight, rWidth);

console.log(recPerm(5,6));  

function calcArea() {
    let h = document.getElementById('height').value;
    let w = document.getElementById('width').value;
    let area = h*w;
    document.getElementById('answer').innerHTML = area + " square feet";
}

function test() {
    return true;
    return false;
}

function recTotal(h,w) {
    let perm = recPerm(h,w);
    let area = h*w;
    let recValues = [perm, area];
    return recValues;
}

document.getElementById('multiAnswer').innerHTML = "<ul><li>Perimeter: "+ recTotal(rHeight, rWidth)[0]+"</li><li>Area: " + recTotal(rHeight, rWidth)[1] +"</li></ul>"

function myFunction() {
    alert("Who goes there?");
    //window.alert
}

function wizard(name, job) {
    document.getElementById('future').innerHTML = "Welcome " + name + ", the " + job +"!";
}

function addItem() {
    let item = prompt("Add Item:");
    console.log(item);
    alert("You added " + item + " to your list.");
}
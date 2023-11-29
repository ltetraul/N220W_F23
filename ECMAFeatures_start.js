//let vs var
let x = 10;
if(x==10) {
    let x = 20;
    document.getElementById('s1').innerHTML = "<p>X where x = 20: " + x + "</p>";
}

document.getElementById('s1').innerHTML += "<p>Default X: " + y + "</p>";
var y = 10;
if(x==10) {
    var y = 20;
    document.getElementById('s1').innerHTML = "<p>Y where y = 20: " + y + "</p>";
}

document.getElementById('s1').innerHTML += "<p>Default Y: " + y + "</p>";

let z = true;

function fnScope() {
    if(z) {
        let z = false;
        console.log(z);
    }
}
fnScope();
console.log(z);

//default parameters
function multiplication(a, b = 2) {
    return a * b;
}

document.getElementById('s2').innerHTML = "<p>" + multiplication(5) + "<br/>" + multiplication(5, 8) + "</p>";

//multiline text
let t1 = `Hello, world!
This is really cool!
JavaScript is awesome!`;

document.getElementById('s8').innerHTML = t1;

//template literals
var firstName = "Gary";
var lastName = "Smith";

document.getElementById('s3').innerHTML = `<p>My name is ${firstName} ${lastName}.</p>`;

//arrow functions

function fullName(f, l) {
    return `${f} ${l}`;
}

document.getElementById('s4').innerHTML = `<p>Traditional Function: ${fullName(firstName, lastName)}</p>`;

//one line function
fullName1 = (f, l) => `${f} ${l}`;

document.getElementById('s4').innerHTML += `<p>One Line Function: ${fullName1(firstName, lastName)}</p>`;

//classes
class Book{
    constructor(title, author, pubDate){
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }
}

const jsBook = new Book("JavaScript and You", "Code Master", 2020);

document.getElementById('s5').innerHTML = `<p>${jsBook.title} by ${jsBook.author} was published in ${jsBook.pubDate}</p>`;

//array destructuring
const course = ["N220", "Intro to JavaScript"];
let [courseNum, courseTitle] = course;

document.getElementById('s7_array').innerHTML = `<p>${courseNum}: ${courseTitle}</p>`;

let [t, fn, ln] = ['Mr', 'Greg', 'Todd', 'Smith', 'Jr'];

document.getElementById('s7_array').innerHTML += `<p>${t} ${fn} ${ln}</p>`;

let g = 4;
let h = 9;
[g,h] = [h, g]
console.log(g, h);

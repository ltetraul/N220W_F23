let aText = document.getElementById('answers');

let grades = [78,86,92,77];
aText.innerHTML = "Array: " + grades;
aText.innerHTML += "<br/>Second Value: " + grades[1];
grades[1]=83;
aText.innerHTML += "<br/>Array: " + grades;
aText.innerHTML += "<br/>Array Length: " + grades.length;
let lastGrade = grades.length-1; //3
let lgValue = ++grades[lastGrade];
aText.innerHTML += "<br/>Last Grade Change: " + lgValue;
aText.innerHTML += "<br/>Array: " + grades;
aText.innerHTML += "<br/>Third Array Value: " + grades[2];
let gradeTotal = grades[0] + grades[1] + grades[2] + grades[3];
aText.innerHTML += "<br/>Array Average: " + (gradeTotal/grades.length);
aText.innerHTML += "<br/>Above Average: " + ((gradeTotal/grades.length)>80);


let exText = document.getElementById('extraAnswers');

let tops = ['tshirts', 'sweater', 'sweatshirt', 'blouse', 'button-down', 'hoodie'];

//adds value to end
tops.push('tank');
exText.innerHTML = "Array Push: " + tops;

//removes last value
tops.pop();
exText.innerHTML += "<br/>>Array Pop: " + tops;

//removes first value
tops.shift();
exText.innerHTML += "<br/> Array Shift: " + tops;

//add value at beginning
tops.unshift("T-shirt");
exText.innerHTML += "<br/>Array Unshift: " + tops;

//add or delete values in the middle
tops.splice(2,1); //delete sweatshirt
exText.innerHTML +=

tops.splice(3,0,"sweatshirt", "tank");
exText.innerHTML +=  "<br/>Add Sweatshirt and Tank" + tops;

let bottoms = ['jeans', 'shorts', 'skirts', 'slacks', 'sweatpants'];

let outfits = [tops, bottoms];

document.write(outfits[0][1] + " " + outfits[1][3]);

//OBJECTS

const friend = {
    fName: "William", lName: "Stevens", age: 27, student: false, fullName: function(){
        return this.fName + " " + this.lName;
    }
}

console.log(friend.fullName()+ " is " + friend.age + " years old.");

const car = {
    year: "1999", make: "Jeep", model: "Cherokee", automatic: true, mpg: 16, efficiency: function(){
        return(this.mpg>40);
    }
}

document.getElementById('car').innerHTML = "I own a " + car.year + " " + car.make + " " + car.model + ".";

document.getElementById('carEff').innerHTML = car.make + " " + " Efficiency: " + car.efficiency();
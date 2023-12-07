function calculate() {
    let userAge = document.getElementById("userAge");
    let age = parseInt(userAge.value);
    let thisYear = new Date().getFullYear();
    let birthYear = thisYear - age;
    let result = document.getElementById("results");
    result.innerHTML = "You were born in " + birthYear + "."

    switch (true) {
        case (birthYear >= 1946 && birthYear <= 1964):
            result.innerHTML += "You are a member of the Baby Boomer Generation!";
            break;
        case (birthYear >= 1965 && birthYear <= 1980):
            result.innerHTML += "You are part of Generation X!";
            break;
        case (birthYear >= 1981 && birthYear <= 1996):
            result.innerHTML += "You belong in the Y Generation!";
            break;
        case (birthYear >= 1997 && birthYear <= 2012):
            result.innerHTML += "Generation Z is your generation!";
            break;
        case (birthYear >= 2013 && birthYear <= 2025):
            result.innerHTML += "You are part of Generation Alpha.";
            break;
        default:
            result.innerHTML += "Sorry - your generation is not listed.";
            break;
    }
}
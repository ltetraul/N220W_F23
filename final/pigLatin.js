function pigLatin() {
    let userFirstName = document.getElementById("firstName").value.trim();
    let userLastName = document.getElementById("lastName").value.trim();
    let results = document.getElementById("results");
    let pigLatinFirst = userFirstName.slice(1) + userFirstName.charAt(0).toLowerCase() + "ay";
    let pigLatinLast = userLastName.slice(1) + userLastName.charAt(0).toLowerCase() + "ay";

    results.textContent = "Your pig latin name is " + pigLatinFirst + " " + pigLatinLast + ".";
}
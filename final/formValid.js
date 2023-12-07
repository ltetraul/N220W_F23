document.getElementsByTagName('form')[0].addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
})

function validateForm() {
    let validForm = true;
    
    let emailVal = document.getElementById("email").value;
    let valEmail = /^[a-zA-Z0-9!#$%.]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,}$/;
    if(!valEmail.test(emailVal)) {
        document.getElementById('emailError').innerText = "must enter a valid email address";
        validForm = false;
    }
    else {
        document.getElementById('emailError').innerText = "";
    }

    let passwordVal = document.getElementById("password").value;
    let valPassword = /^[a-zA-Z0-9]{8,10}$/;
    if(!valPassword.test(passwordVal)) {
        document.getElementById('passwordError').innerText = "must be 8-10 characters";
        validForm = false;
    }
    else {
        document.getElementById('passwordError').innerText = "";
    }

    let verifyPassword = document.getElementById("verify").value;
    if(passwordVal !== verifyPassword) {
        document.getElementById('verifyError').innerText = "passwords do not match";
        validForm = false;
    }
    else {
        document.getElementById('verifyError').innerText = "";
    }

    let state = document.getElementById("state").value;
    if(state.length !== 2) {
        document.getElementById('stateError').innerText = "use 2 character abbreviation";
        validForm = false;
    }
    else {
        document.getElementById('stateError').innerText = "";
    }

    let zipVal = document.getElementById("zip").value;
    let valZip = /^\d{5}$/;
    if(!valZip.test(zipVal)) {
        document.getElementById('zipError').innerText = "must be 5 digits";
        validForm = false;
    }
    else {
        document.getElementById('zipError').innerText = "";
    }

    let phoneVal = document.getElementById('phone').value;
    let valPhone = /^([0-9]{3})-[0-9]{3}-([0-9]{4})$/;
    if(!valPhone.test(phoneVal)) {
        document.getElementById('phoneError').innerText = "Your phone number must be structured like this: 555-555-5555";
        validForm = false;
    }
    else {
        document.getElementById('phoneError').innerText = "";
    }

    let cardVal = document.getElementById('card').value;
    let valCard = /^([0-9]{4})-[0-9]{4}-[0-9]{4}-([0-9]{4})$/;
    if(!valCard.test(cardVal)) {
        document.getElementById('cardError').innerText = "Your card number must be structured like this: 1234-1234-1234-1234";
        validForm = false;
    }
    else {
        document.getElementById('cardError').innerText = "";
    }

    let expVal = document.getElementById('exp').value;
    let valExp = /^(0[1-9]|1[0-2])\/\d{4}$/;
    if(!valExp.test(expVal)) {
        document.getElementById('expError').innerText = "use mm/yyyy format";
        validForm = false;
    }
    else {
        document.getElementById('expError').innerText = "";
    }
}

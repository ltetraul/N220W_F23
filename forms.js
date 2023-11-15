function validateForm() {
    let validForm = true;
    let zipVal = document.getElementById('zip').value;
    let valZip = /^\d{5}$/;
    if(!valZip.test(zipVal)) {
        document.getElementById('zipError').innerText = "Your zip code must be five numbers";
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


    let emailVal = document.getElementById('myEmail').value;
    let valEmail = /^[a-zA-Z0-9!#$%.]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,3}$/;
    if(!valEmail.test(emailVal)) {
        document.getElementById('emailError').innerText = "You must enter a valid email address";
        validForm = false;
    }
    else {
        document.getElementById('emailError').innerText = "";
    }

    let nameVal = document.getElementById('myName').value;
    let addVal = document.getElementById('address').value;
    let cityVal = document.getElementById('city').value;
    if(nameVal == "" || addVal == "" || cityVal == "") {
        validForm = false;
    }

    if(validForm) {
        let items = document.querySelectorAll('ul li');
        items[0].innerText += nameVal;
        items[1].innerText += addVal;
        items[2].innerText += cityVal;
        items[3].innerText += zipVal;
        items[4].innerText += phoneVal;
        items[5].innerText += emailVal;

        document.getElementsByTagName('div')[0].style.display = "block";
    }
}

document.getElementsByTagName('form')[0].addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
})
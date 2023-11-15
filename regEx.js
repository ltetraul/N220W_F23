let stringText = document.getElementById('string');
let zipText = document.getElementById('zip');
let ccText = document.getElementById('cc');
let phoneText = document.getElementById('phone');

//Regular Expression: / /

//string
function validateString() {
    let vs1 = /ralph/i;//case insensitive
    let vs2 = /^(cat)/;//beginning
    let vs3 = /dog$/;//end
    document.getElementById('stringAns').innerText = vs3.test(stringText.value);
}

stringText.addEventListener('blur', validateString);

//zipcode
function validateZip() {
    let vz1 = /^[0-9]{5}$/;
    let vz2 = /^\d{5}$/;//same as above
    let vz3 = /^([0-9]{5})([0-9]{4})?$/;
    document.getElementById('zipAns').innerText = vz3.test(zipText.value);
}

zipText.addEventListener('blur', validateZip);

//credit card
function validateCC() {
    let vc1 = /^(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})$/;
    document.getElementById('ccAns').innerText = vc1.test(ccText.value);
}

ccText.addEventListener('blur', validateCC);

//months (01-12)
let monthRegEx = /0[1-9]|1[012]/;

//date (1-31)
let dateRegEx = /[1-9]|[12][0-9]|3[01]/;

//year (20th or 21st century)
let yearRegEx = /(19|20)\d{2}/;
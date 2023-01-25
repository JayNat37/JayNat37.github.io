const username = document.getElementById("username");
const usernameError = document.getElementById("username-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const fname = document.getElementById("fname");
const fnameError = document.getElementById("fname-error");
const sname = document.getElementById("sname");
const snameError = document.getElementById("sname-error");
const postal = document.getElementById("postal");
const postalError = document.getElementById("postal-error");
const houseno = document.getElementById("houseno");
const housenoError = document.getElementById("houseno-error");
const suffix = document.getElementById("suffix");
const suffixError = document.getElementById("suffix-error");

function formValidate() {
    return true;
}
/*
    Given an input, error and function that evaluates string from input ("" is good output)
    Attaches event listener
*/
const addValidator = (input, error, isStringValid)  => {
    input.addEventListener("keyup", (event) => {
        var output = isStringValid(input.value);
        if(output[0] != "") {
            input.classList.add("input-invalid");
            input.classList.remove("input-valid");
            input.setCustomValidity(output[1]);
            error.textContent = output[0];
        } else {
            input.classList.add("input-valid");
            input.classList.remove("input-invalid");
            input.setCustomValidity("");
            error.textContent = "";
        }
    });
};

addValidator(username, usernameError, (string) => {
    if(string.length < 6) {
        return ["Username needs to be at least 6 characters long.", 
        "Username too short."];
    } else {
        return ["",""];
    }
});
addValidator(password, passwordError, (string) => {
    if(string.length < 8) {
        return ["Password needs to be at least 8 characters long.", 
        "Password too short."];
    } else {
        return ["",""];
    }
})
addValidator(email, emailError, (string) => {
    var atIndex = string.indexOf('@');
    var dotIndex = string.lastIndexOf('.');

    if(atIndex == -1 || dotIndex == -1 
            || atIndex > dotIndex || atIndex == 0 
            || dotIndex == string.length -1) {
        return ["Email needs to be in format joe@mail.com", 
        "Email formated incorrectly"];
    }
    return ["", ""];
});
addValidator(fname, fnameError, (string) => {
    if(string.length < 2) {
        return ["Name needs to be at least 2 characters long.", 
        "Name too short."];
    } else {
        return ["",""];
    }
})

addValidator(sname, snameError, (string) => {
    if(string.length < 2) {
        return ["Name needs to be at least 2 characters long.", 
        "Name too short."];
    } else {
        return ["",""];
    }
})
// no regex means terrible spaghetti code
addValidator(postal, postalError, (string) => {
    if(string.length != 6 || 
        isNaN(string.slice(0,4)) || 
        string.charAt(4).toUpperCase() == string.charAt(4).toLowerCase() ||
        string.charAt(5).toUpperCase() == string.charAt(5).toLowerCase()    ) {
        return ["Correct format: 2628BA"];
    } else {
        return ["",""];
    }
})

addValidator(houseno, housenoError, (string) => {
    if(isNaN(string)) {
        return ["Must be a number"];
    } else {
        return ["",""];
    }
})
addValidator(suffix, suffixError, (string) => {
    if(string.length > 1 || 
        (string.length == 1 &&
            string.charAt(0).toUpperCase() == string.charAt(0).toLowerCase())) {
        return ["Must be a letter"];
    } else {
        return ["",""];
    }
});

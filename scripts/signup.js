const username = document.getElementById("username");
const usernameError = document.getElementById("username-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");


function formValidate() {
    if(!username.checkValidity()) {
        alert("COOCK");
    }
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
    
});
email.addEventListener("keyup", (event) => {
    var emailString = email.value;
    var atIndex = emailString.indexOf('@');
    var dotIndex = emailString.indexOf('.');
    if(at) {
        email.setCustomValidity("Password too short");
    }
});


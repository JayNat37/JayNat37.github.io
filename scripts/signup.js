
// Query form and everything else from the document
const form = document.querySelector("form");

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
const country = document.getElementById("country");
const countryError = document.getElementById("country-error");
const language = document.getElementById("language");
const languageError = document.getElementById("language-error");


// array of functions that validate, to be used on every submit
var validators = [];

// helper functions since no regex
function isLetter(c) {
    var s = true;
    [...c].forEach((c) => {
        s = s && !(c.toUpperCase() == c.toLowerCase());
    })
    return s;
}
function isUpperCase(c) {
    return isLetter(c) && 
        c.toUpperCase() == c;
}

/*
    Given an input, error and function that evaluates string from input (for callback function "" means valid input)
    Attaches event listener
*/
const addValidator = (input, error, isStringValid)  => {
    // steal the function into the validator array
    const c = (event) => {
        // get validity of input value
        var output = isStringValid(input.value);
        // validator outputs multiple values to make last alert
        // easier
        if(output[0] != "") {
            // if invalid display valid stuff
            input.classList.add("input-invalid");
            input.classList.remove("input-valid");
            error.textContent = output[0];
            return [false, input.value, input.id];
        } else {
            // if valid display valid stuff
            input.classList.add("input-valid");
            input.classList.remove("input-invalid");
            error.textContent = "";
            return [true, input.value, input.id];
        }
    };
    // add the event listner
    input.addEventListener("keyup", c);
    // add to validator array
    validators.push(c);
};
/*
* NOW WE HAVE A BUNCH OF VALIDATORS
* CODE IS EXTREMELY REPETITIVE AND SELF
* EXPLANATORY
*/

addValidator(username, usernameError, (string) => {
    if(string.length < 6) {
        return ["Username needs to be at least 6 characters long.", 
        "Username too short."];
    } else if(!isUpperCase(string.charAt(0))) {
        return ["Username needs to begin in upper case.", 
        "Username starts with lowercase."];
    } else if(isLetter(string.charAt(string.length -1))) {
        return ["Username Cannot end with letter", 
        "Username ends with letter."];
    } else {
        return ["",""];
    }
});
addValidator(password, passwordError, (string) => {
    if(string.length < 12) {
        return ["Password needs to be at least 12 characters long.", 
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
addValidator(postal, postalError, (string) => {
    if(string.length != 6 || 
        isNaN(string.slice(0,4)) || 
        !isLetter(string.charAt(5)) ||
        !isLetter(string.charAt(6))) {
        return ["Correct format: 2628BA","incorrect format"];
    } else {
        return ["",""];
    }
})

addValidator(houseno, housenoError, (string) => {
    if(isNaN(string)) {
        return ["Must be a number", "Must be a number"];
    } else {
        return ["",""];
    }
})
addValidator(suffix, suffixError, (string) => {
    if(string.length > 1 || 
        (string.length == 1 &&
            !isLetter(string.charAt(5)))) {
        return ["Must be a letter", "Must be a letter"];
    } else {
        return ["",""];
    }
});

addValidator(country, countryError, (string) => {
    if(string.length < 4) {
        return ["All countries have >4 letters.", "No such country."];
    } else if (!isLetter(string)) {
        return ["All countries names are only letters.", "No such country."];
    } else if (!isUpperCase(string.charAt(0))) {
        return ["All countries names start with capital.", "No such country."];
    } else {
        return ["",""];
    }
});

addValidator(language, countryError, (string) => {
    if(string.length < 2) {
        return ["All Languages have >2 letters.", "No such country."];
    } else if (!isLetter(string)) {
        return ["All countries names are only letters.", "No such country."];
    } else if (!isUpperCase(string.charAt(0))) {
        return ["All countries names start with capital.", "No such country."];
    } else {
        return ["",""];
    }
});
/* END OF VALIDATORS*/


// Since form has no-validate it is up to us to validate it
form.addEventListener("submit", (event) => {
    // add outputs to string
    // check if any input breaks validator
    var validated = true;
    var output = "";

    validators.forEach((validator) => {
        var x = validator(null);
        validated = validated && x[0];
        // format string "input name: input text"
        output += x[2] + ": " + x[1] + "\n";
    });
    if(!validated) {
        // not validated, just prevent default
        console.log("lol");
        event.preventDefault();
    } else {
        // validated, manually add last unvalidated things to text
        output+="Sex: " + document.getElementById("sex").value;
        output+="\nAbout: " + document.getElementById("about").value;
        // alert output
        alert(output); 
        // this would not be here normally but since this page doesnt
        // have any backend 
        event.preventDefault();
        
    }

})
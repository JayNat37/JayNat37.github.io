const username = document.getElementById("username");
const password = document.getElementById("password");

function formValidate() {
    var goodSubmit = true;

    if(username.value.length < 5) {
        username.classList.add("input-invalid");
        goodSubmit = false;
    }   

    return goodSubmit;
    
    
}
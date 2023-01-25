// global vars to mantain count
var clickCount = 0;
var seconds = 0;
var totalPresses = 0;

// get all nessecary types of fields to track
var fields = document.querySelectorAll('input[type=text], input[type=password]');
// track the number of characters in every fields
var fieldsTyped = Array(fields.length).fill(0);
// apparently there can be problems with dom rendering for adding 
// a listner to the vody, so we wait for onload to call this
function initializeTracker() {
    // add a listner for click, increments on every click and displays in text
    document.body.addEventListener("click", (event) => {
        clickCount += 1;
        document.getElementById("clicks").textContent = clickCount;
    });
    // every second increment seconds and display time based on
    // simple arithmetic operations
    setInterval(() => {
        document.getElementById("time").textContent = 
            "" + Math.floor(seconds/60) + " mins " + seconds % 60 + " s";
        seconds+=1;
        
        
    }, 1000);
    // add an event listener to every field, such that it updates the total
    // key presses and its character count in the count array.
    // display the total key presses, and the sum of all current characters
    fields.forEach((field, i) => {
        field.addEventListener("keyup", (event) => {
            totalPresses++;
            document.getElementById("presses").textContent = totalPresses;
            fieldsTyped[i] = field.value.length;
            document.getElementById("chars").textContent = 
                fieldsTyped.reduce((x, y) => x + y, 0);
        })
    });

    
}
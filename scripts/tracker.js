var clickCount = 0;
var seconds = 0;
var totalPresses = 0;

var fields = document.querySelectorAll('input[type=text], input[type=password]');

var fieldsTyped = Array(fields.length).fill(0);

function initializeTracker() {
    document.body.addEventListener("click", (event) => {
        clickCount += 1;
        document.getElementById("clicks").textContent = clickCount;
    });
    setInterval(() => {
        document.getElementById("time").textContent = 
            "" + Math.floor(seconds/60) + " mins " + seconds % 60 + " s";
        seconds+=1;
        
        
    }, 1000);

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
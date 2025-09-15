// Wait for the DOM to finish loading before running the game
// Get button elements and add event listeners to them




document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("Submitted!");
                console.log("You clicked the Submit button");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked the ${gameType} button`);
            }
        })
    }
    
})




/** 
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    //Create two random numbers between 1 and 25
    number1 = Math.floor(Math.random() * 25) + 1;
    number2 = Math.floor(Math.random() * 25) + 1;

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}   


runGame();
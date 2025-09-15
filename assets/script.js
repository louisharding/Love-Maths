// Wait for the DOM to finish loading before running the game
// Get button elements and add event listeners to them




document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
                console.log("You clicked the Submit button");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame("addition");   
});



/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    //Create two random numbers between 1 and 25
    number1 = Math.floor(Math.random() * 25) + 1;
    number2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(number1, number2);
    } else{
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * Checks the user's answer for correctness.
 * Implement logic to validate the user's input and provide feedback.
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = parseInt( calculateCorrectAnswer(0));
    let isCorrect = userAnswer === calculatedAnswer;//calculateCorrectAnswer();

    if (isCorrect){
        alert("Correct!");
    } else {
        alert(`Incorrect: ${userAnswer}.Correct answer: ${calculatedAnswer[0]}!`);
    }

    runGame(calculatedAnswer[0]);
}

/**
 * Gets the operands and the operator 
 * directly from the DOM and returns answer
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

function incrementScore(){

}

function incrementWrongAnswer(){

}


function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').innerText = operand1;
    document.getElementById('operand2').innerText = operand2;
    document.getElementById('operator').innerText = "+";
}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

//Global Variables
var winsCounter = 0;
var lossesCounter = 0;
var scoreCounter = 0;
var randomNumber;
var dOneRandNum;
var dTwoRandNum;
var dThreeRandNum;
var dFourRandNum;


//Generate a random number between 19-120
function generateRandomNumber(){
    randomNumber = Math.floor(Math.random() * 102) + 19;
    $("#randomNum").html(randomNumber);
}

//Assign a random value to the 4 crystal pictures between 1-12
function diamondRandomNumber(){
    dOneRandNum = Math.floor(Math.random() * 12) + 1;
    dTwoRandNum = Math.floor(Math.random() * 12) + 1;
    dThreeRandNum = Math.floor(Math.random() * 12) + 1;
    dFourRandNum = Math.floor(Math.random() * 12) + 1;
}

//If the total score equals the random number between 19-120, the user wins, one is added to wins, and the game restarts
//if the total score exceeds the random number between 19-120, the user loses, one is added to losses, and the game restarts
function winLose() {
    if (scoreCounter == randomNumber) {
        alert("You Win!");
        winsCounter++;
        $("#wins").html(winsCounter); 
        reset();
    } else if (scoreCounter > randomNumber) {
        alert("You Lose!");
        lossesCounter++;
        $("#losses").html(lossesCounter);
        reset();
    }
}

//When the user clicks on the crystals, the total score increases by the random number generated fo reach crystal
function diamondClicks(){
    $("#diamondOne").click(function() {
        scoreCounter = scoreCounter + dOneRandNum;
        $("#score").html(scoreCounter);
        winLose();
    });
    $("#diamondTwo").click(function() {
        scoreCounter = scoreCounter + dTwoRandNum;
        $("#score").html(scoreCounter);
        winLose();
    });
    $("#diamondThree").click(function() {
        scoreCounter = scoreCounter + dThreeRandNum;
        $("#score").html(scoreCounter);
        winLose();
    });
    $("#diamondFour").click(function() {
        scoreCounter = scoreCounter + dFourRandNum;
        $("#score").html(scoreCounter);
        winLose();
    });
}

function reset() {
    scoreCounter = 0;
    $("#score").html(scoreCounter);
    generateRandomNumber();
    diamondRandomNumber();

}

//Start the game
$(document).ready(function(){
    reset();
    generateRandomNumber();
    diamondRandomNumber();
    diamondClicks();
});







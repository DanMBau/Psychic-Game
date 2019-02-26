//setting up global variables
var wins = 0
var losses = 0
var guessesLeft = 10
var guesses = [];

// links variables to html IDs
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var guessesText = document.getElementById("guesses");

//alphabet 
var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");
console.log("comp choices"+computerChoices);

//after user releases key function starts
document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guesses.push(userGuess);
    console.log("compu guess: "+computerGuess+ " user guess: "+userGuess);

    // function runs until user runs out of "guessesLeft", evertime the user guesses the right letter "guessesLeft" goes back up to 10
        if (userGuess == computerGuess) {
            wins++; 
            console.log("Wins: "+wins);
            winsText.textContent = wins;
            guessesLeft = 10;
            guesses = [];
            guessesLeftText.textContent = guessesLeft;
        }
        else {
            guessesLeft--; 
            if(guessesLeft === 0){
                losses++;
                guessesLeft = 10; 
                guesses = [];
                lossesText.textContent = losses;
                guessesText.textContent = guesses;
            }
            guessesLeftText.textContent = guessesLeft;
            document.getElementById('guesses').innerHTML = guesses;
        }
    }

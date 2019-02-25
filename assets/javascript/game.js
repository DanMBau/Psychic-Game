//setting up global variables
var wins = 0
var losses = 0
var guessesLeft = 10
var guesses = 0

// links variables to html IDs
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var guessesText = document.getElementById("guesses");

//alphabet 
var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");

//after user releases key function starts
document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // function runs until user runs out of "guessesLeft", evertime the user guesses the right letter "guessesLeft" goes back up to 10
    if ((guessesLeft) > (0)) {
        if ((userGuess) === (computerGuess)) {
            wins++; guessesLeft--; guesses++; guessesLeft = 10
        }
        else { losses++; guessesLeft--; guesses++; }
    }
    else { wins = 0; losses = 0; guessesLeft = 10; guesses = 0 }


    // insert values into html
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    guessesText.textContent = guesses;
}

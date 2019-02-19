// create random alphabet letter


// create user input

// var for wins, losses, no of guesses


var wins = 0
var losses = 0
var guessesLeft = 10
var guesses = 0


var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var guessesText = document.getElementById("guesses");


var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");

// for (var i = 1; i >= guessesLeft; ) {


document.onkeyup = function (event) {


    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if ((guessesLeft) > (0)) {
        if ((userGuess) === (computerGuess)) {
            wins++; guessesLeft--; guesses++
        }
        else { losses++; guessesLeft--; guesses++; }
    }
    else {wins = 0; losses = 0; guessesLeft = 10; guesses = 0 }



    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    guessesText.textContent = guesses;
}









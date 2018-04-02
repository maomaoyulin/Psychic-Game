
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghijklmnopqrstuvwxyz";
var computerGuessOptions = chars.split('');

console.log(computerGuessOptions);

var wins = 0;
var losses = 0;
var guessesLeft = 9;

    // Whenever a key is pressed, alert "pressed a button".
document.onkeyup = function(event) {
      // Get a randomly selected value from computer guess options as the Computer Guess
    var computerGuess = computerGuessOptions[Math.floor(Math.random() * computerGuessOptions.length)];
    console.log(computerGuess);

      // Put game logic here
    var userGuess = event.key;
    console.log(userGuess);

    if(chars.indexOf(userGuess) !== -1) {
        if(userGuess !== computerGuess) {
            if(guessesLeft !== 1) {
                guessesLeft--;
            }else {
                guessesLeft = 9;
                losses++;
            }

        }else {
            wins++;
            guessesLeft = 9;
        }

        var html = "<p>You Chose:  " + userGuess + "</p>" +
        "<p>The computer chose: " + computerGuess + "</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guess Left: " + guessesLeft + "</p>";

        document.getElementById("game").innerHTML = html;

    }else {
        alert("Please pick a valid key to play");
    }

}

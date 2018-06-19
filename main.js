//generating a random number
var randomNumber = Math.floor(Math.random()*100)+1;

//fetching all the required fields
var guessfield = document.getElementById('guessfield');
var submitGuess = document.getElementById('submitGuess');

var guesses = document.querySelector('guesses');
var lastresult = document.querySelector('lastresult');
var lowOrhigh = document.querySelector('lowOrhigh');

var guessCount = 0;
var resetButton;

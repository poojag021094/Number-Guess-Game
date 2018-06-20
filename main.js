//generating a random number
var randomNumber = Math.floor(Math.random()*100)+1;

//fetching all the required fields
var guessfield = document.getElementById('guessfield');
var submitGuess = document.getElementById('submitGuess');

var guesses = document.querySelector('.guesses');
var lastresult = document.querySelector('.lastresult');
var lowOrhigh = document.querySelector('.lowOrhigh');

var guessCount = 1;
var resetButton;

submitGuess.addEventListener('click',checkGuess);

function checkGuess(){
  var userGuess = Number(guessfield.value);

  console.log(userGuess);

   if(guessCount===1) {
    guesses.textContent = 'Previous Count: ';
  }
  guesses.textContent += userGuess + ' ';

  if(userGuess === randomNumber){
    lastresult.textContent = 'Congratulations! You got it right!';
    lastresult.style.backgroundColor = 'green';
    lowOrhigh.textContent = ' ';
    setGameOver();
  }else if (guessCount ===10) {
    lastresult.textContent = 'Game Over';
    setGameOver();
  }
  else{
    lastresult.textContent = 'Wrong!';
    lastresult.style.backgroundColor = 'red';
    if(userGuess < randomNumber)
    {
      lowOrhigh.textContent = 'Guess was low';
    }else {
      lowOrhigh.textContent = 'Guess was High';
    }
  }
  guessCount++;
  guessfield.value = ' ';

}

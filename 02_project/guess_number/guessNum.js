let random_num = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const prev_guesses = document.querySelector('.guesses');
const remaining_guesses = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')
let prevGuess = [];
let numGuess = 0; 
let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1 || guess > 100) {
    alert('Please enter a number between 1 and 100');
  } else {
    prevGuess.push(guess);
    numGuess++;                
    displayGuess(guess);

    if (numGuess === 10) {
      displayMessage(`Game Over. Random number was ${random_num}`);
      endGame();
    } else {
      checkEquality(guess);
    }
  }
}


function checkEquality(guess){
  if(guess === random_num){
    displayMessage("You guessed it right!!");
    endGame()
  }
  else if(guess<random_num){
    displayMessage("Number is too low")

  }
  else if(guess>random_num){
    displayMessage("Number is too high")
  }
}

function displayMessage(message){
 lowOrhi.innerHTML = `<h2>${message}</h2>`
}


  function displayGuess(guess) {
    userInput.value = '';
    prev_guesses.innerHTML += `${guess}, `;
    remaining_guesses.innerHTML = `${10 - numGuess}`;  
}



  function newGame() {
    const newGamebutton = document.querySelector('#newGame');
    newGamebutton.addEventListener('click', function (e) {
      random_num = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 0;                                 
      prev_guesses.innerHTML = '';
      remaining_guesses.innerHTML = `${10 - numGuess}`;
      userInput.removeAttribute('disabled');
      playGame = true;
      startOver.removeChild(p);
    });
  }
  


function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

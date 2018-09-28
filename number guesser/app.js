/*
GAME FUNCTION:
- Player must guess a number between 1 and 10
- Player gets a certain number of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if L
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max);
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and Max
minNum.textContent = min;
maxNum.textContent = max;

// play again evetn listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validate
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if (guess === winningNum) {
        // game over - won
        gameOver(true, `${winningNum} is correct, you win!`);
    } else {
        // wrong number 
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // game over - lost
            gameOver(false, `Game over, you lost! The correct number was ${winningNum}`);

        } else {
            // game continues - answer wrong
            
            // change border color
            guessInput.style.borderColor = 'red';
            // clear input
            guessInput.value = '';
            // set message color
            message.style.color = 'red';
            // set message
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);
        }
    };
});

// game over
function gameOver(won, msg){
let color;
won === true ? color = 'green' : color = 'red';

     // disable input
     guessInput.disabled = true;
     // change border color
     guessInput.style.borderColor = color;
     // set text color
     message.style.color = color;
     // set message
     setMessage(msg);

     // play again
     guessBtn.value = 'Play Again';
     guessBtn.className += 'play-again';
}

// get winning number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
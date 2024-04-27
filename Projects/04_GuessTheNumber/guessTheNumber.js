let randomNumber = Math.floor(Math.random() * 100 + 1);
// console.log(randomNumber);

const guessField = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let prevGuess = [];
let guessCount = 0;
let p = document.createElement('p');
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(guessField.value);
        // console.log(guess);
        if(isNaN(guess)){
            guessField.value = ''
            alert("Please Enter a Number");
            
        }else{
            if(guessCount > 10){
                endGame();
            }else{
                validateGuess(guess);
                 guesses.innerHTML += `${guess}, `
                 guessField.value = '';
                 guessCount ++;
                 lastResult.innerHTML = `${10 - guessCount}`
            }
            
        }
    })
    
}

function validateGuess(guess){
    if(guess <=0){
        lowOrHi.innerHTML = `Your Entered Number is too Low`;
        prevGuess.push(guess);
    }else if(guess > 100){
        lowOrHi.innerHTML = `Your Entered Number is more than 100`;
        prevGuess.push(guess);
    }else{
        checkGuess(guess);
    }
    

}

function checkGuess(guess){
    if(guess == randomNumber){
        lowOrHi.innerHTML = `Congrats... You won it`;
        endGame();
    }else{
        
    }
}

function endGame(){
    guessField.setAttribute('disabled', '');
    guessField.value = '';
    p.classList.add("button");
    p.innerHTML = '<h2 id="newGame">Start The Game Again</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    let newGame = document.querySelector("#newGame");
    newGame.addEventListener('click', function(e){
        randomNumber = Math.round(Math.random() * 100 + 1);
        prevGuess = [];
        guessCount = 0;
        guesses.innerHTML = '';
        lastResult.innerHTML = `${10 - guessCount}` ;
        guessField.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
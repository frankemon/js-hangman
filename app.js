const wordBank = [ // An array of available words
    'admission', 'asymmetric', 'abnormal', 'anomaly', 'breakfast', 'brainstorm', 'basket', 'ballistrade', 'chemistry', 'chimpanzee', 'castle', 'curtain', 'delicate', 'discreet', 'divorce', 'drain', 'bee', 'dog', 'cat', 'computer', 'screen', 'car', 'zoo', 'yellow', 'pipe', 'van', 'bat', 'cow', 'fish', 'folder', 'surf', 'wave', 'skate', 'code', 'ball', 'tennis', 'drive', 'xylophone', 'bread', 'pasta', 'hamburger', 'sorbet', 'rice', 'round', 'square'
];

const alphabet = // All letters in the alphabet put to uppercase
    'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

const imgs = ['img/hangman-0.svg', 'img/hangman-1.svg', 'img/hangman-2.svg', 'img/hangman-3.svg', 'img/hangman-4.svg', 'img/hangman-5.svg', 'img/hangman-6.svg'];

let guesses = 0;        // Guesses starting on 0
let guessesLeft = 6;    // Max guesses remaining
let blanks = [];        // picked word gets replaced with blanks
let generatedWord;
let clickedButton;

// Pick a random word from wordBank and change to uppercase
function wordPicker() {
    let position = Math.random();
    position = position * (wordBank.length - 1);
    position = Math.floor(position);
    generatedWord = wordBank[position].toUpperCase();
    console.log(generatedWord);
    return generatedWord;
    
}

// create alphabet as buttons 
function generateKeyboard() {
    for (let index = 0; index < alphabet.length; index++) {
        let keyboard = document.createElement('button');
        keyboard.innerHTML = alphabet[index];
        keyboard.className = "keyboard-button";
        keyboard.id = alphabet[index];
        keyboard.value = alphabet[index];
        keyboard.onclick = function () {
            getGuess(alphabet[index]);
        }

        document.querySelector('.keyboard').appendChild(keyboard);

    }
    document.getElementById("button-try-again").removeAttribute("hidden");
    
}

// Replace generatedWord with underscores         
function blankSpaces(string) {
    for (let index = 0; index < string.length; index++) {
        blanks.push('_');
       
    }
    updateDOM();
}

// Guess letter with onclick, general gameplay
function testGuess(e) {
    if (e.target.tagName !=='BUTTON') {
        return;
    }
    // checkGameState();
    console.log(e.target.value);
    let guessedLetter = e.target.value;
    
    // First check for letter
    const indexOfFirst = generatedWord.indexOf(clickedButton.value); 
    // console.log("first occurence at ", indexOfFirst);
    if (indexOfFirst < 0 ) {
        guesses = guesses + 1;
        guessesLeft = guessesLeft - 1;
        document.getElementById('hangman').src = imgs[guesses];
        
        if (guessesLeft === 0) { 
            
            // when the game is over
            document.getElementById('keyboard').style.display = 'none';
            
            // if the user lost the game
            let gameLostMessage = document.createElement('div');
            gameLostMessage.innerHTML = `You lost. The correct word was ${generatedWord}`; // 
            gameLostMessage.classList = "message";
            document.body.appendChild(gameLostMessage);
            // if the user won the game
        } 
        return; 
   
    } else {
        for (let index = 0; index < generatedWord.length; index++) {
            const letter = generatedWord[index];
            if (letter === guessedLetter) {
                blanks[index] = guessedLetter;
            }
            
        }
        if (blanks.join("") === generatedWord) { 
            document.getElementById('keyboard').style.display = 'none';
            let gameWonMessage = document.createElement('div');
            gameWonMessage.innerHTML = "You win! Click try again to play more."; // 
            gameWonMessage.classList = "message";
            document.body.appendChild(gameWonMessage);
        
        }
        updateDOM(); 

        
    }
    
    
}

// Hide start game button
function hideStartGame() {
    const hideStart = document.getElementById("button-start-game");
    if (hideStart.style.display === "none") {
      hideStart.style.display = "block";
    } else {
      hideStart.style.display = "none";
    }
  }

// Disable guessed letter
function getGuess(letter) {
    // console.log(letter);
    clickedButton = document.querySelector('#' + letter);
    // console.log('getGuess: ', clickedButton);
    clickedButton.disabled = true;
}

// Update DOM and create blank spaces
function updateDOM() {
    document.querySelector('#hiddenWord').textContent = blanks.join(' ');
}

keyboard.addEventListener('click', testGuess);  


// Start game function

function startGame() {
    generateKeyboard();
    const answer = wordPicker();
    blankSpaces(answer);
    startGameButtonEl.disabled = true;   
}

// function checkGameState() {
//     if (hangman.src.slice(-12) == '5.svg')
//     console.log("game over")
// }

function reload () {
    window.location.reload(true);
}

let startGameButtonEl = document.querySelector('#button-start-game');
startGameButtonEl.addEventListener('click', startGame);
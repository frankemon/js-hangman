const wordBank = [ // An array of available words
    'admission', 'asymmetric', 'abnormal', 'anomaly', 'breakfast', 'brainstorm', 'basket', 'ballistrade', 'chemistry', 'chimpanzee', 'castle', 'curtain', 'delicate', 'discreet', 'divorce', 'drain', 'bee', 'dog', 'cat', 'computer', 'screen', 'car', 'zoo', 'yellow', 'pipe', 'van', 'bat', 'cow', 'fish', 'folder', 'surf', 'wave', 'skate', 'code'
];

const alphabet = // All letters in the alphabet put to uppercase
    'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

const imgs = ['img/hangman-0.svg', 'img/hangman-1.svg', 'img/hangman-2.svg', 'img/hangman-3.svg', 'img/hangman-4.svg', 'img/hangman-5.svg', 'img/hangman-6.svg'];

let guesses = 0;        // Guesses starting on 0
let guessesLeft = 6;    // Max guesses remaining
let hangmanImg;         // Hangman images
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

// secretWord function holds the generatedWord
// function secretArray(generatedWord) {
//     secretWord = generatedWord.split('');
//     console.log(secretWord);
// }

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
}

// Replace generatedWord with underscores         
function blankSpaces(string) {
    for (let index = 0; index < string.length; index++) {
        blanks.push('_');
       
    }
    updateDOM();
}

// Guess letter with onclick
function testGuess(e) {
    if (e.target.tagName !=='BUTTON') {
        return;
    }
    console.log(e.target.value);
    let guessedLetter = e.target.value;

    // First check for letter
    const indexOfFirst = generatedWord.indexOf(clickedButton.value); 
    console.log("first occurence at ", indexOfFirst);
    if (indexOfFirst < 0 ) {
        guesses = guesses + 1;
            guessesLeft = guessesLeft - 1;
            document.getElementById('hangman').src = imgs[guesses];

            if (guessesLeft === 0) {
                
                document.getElementById('keyboard').style.display = 'none';
            }
            return; 
    } else {
        blanks[indexOfFirst] = guessedLetter;
        updateDOM(); 

    }
    
    // Second check for letter
    const indexOfSecond = generatedWord.indexOf(clickedButton.value, indexOfFirst + 1);
    console.log("second occurence at ", indexOfSecond);
    if (indexOfSecond < 0 ) {
        return;
    } else {
        blanks[indexOfSecond] = guessedLetter;
        
        updateDOM(); 
    }
    
    // updateDOM();
}



////////////////////////// for 3 or more letters
// secretWord.forEach((letter, i) => {
//     if (letter === guessedLetter) {
//         blanks[i] = guessedLetter;
//     }
// });
///////////////////////////



// Disable guessed letter
function getGuess(letter) {
    console.log(letter);
    clickedButton = document.querySelector('#' + letter);
    console.log('getGuess: ', clickedButton);
    clickedButton.disabled = true;
}
// getGuess();

// Update DOM and create blank spaces
function updateDOM() {
    document.querySelector('#hiddenWord').textContent = blanks.join(' ');
}

// Event listeners
keyboard.addEventListener('click', testGuess);  

///////////////////////////////////////
// Initiate game as new game button //
/////////////////////////////////////
function startGame() {

    generateKeyboard();


    const answer = wordPicker();
    blankSpaces(answer);
    startGameButtonEl.disabled = true;   
}
let startGameButtonEl = document.querySelector('#button-start-game');
startGameButtonEl.addEventListener('click', startGame);

// e.target.value on click needs to store the vale in a new variable
// run indexOf function on secretArray using new variable as param to indexOf secretArray.indexOf('X');
// -1 or we gottem boys, saves in guesses
// correctGuess = displaying pictures

// disable start game button on click, create new button for new game



    
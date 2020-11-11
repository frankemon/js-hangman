const wordBank = [
    'admission', 'asymmetric', 'abnormal', 'anomaly', 'beehive', 'breakfast', 'brainstorm', 'basket', 'ballistrade', 'chemistry', 'chimpanzee', 'castle', 'curtain', 'delicate', 'discreet', 'divorce', 'drain'
];

const alphabet =
    'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
console.log(alphabet); //can remove

// const imgs = ['img/hangman-0.svg', 'img/hangman-1.svg', 'img/hangman-2.svg', 'img/hangman-3.svg', 'img/hangman-4.svg', 'img/hangman-5.svg'];

let guesses = 0;
let guessesLeft = 6;
let hangmanImg;
let blanks = [];


// let newGameButtonEl = document.querySelector('#new-game-button');

// newGameButtonEl = addEventListener('click', startGame);



// create alphabet as buttons MAYBE REWRITE TO NORMAL FUNCTION
function generateKeyboard() {
    for (let index = 0; index < alphabet.length; index++) {
        let keyboard = document.createElement('button');
        keyboard.innerHTML = alphabet[index];
        keyboard.id = alphabet[index];
        keyboard.value = alphabet[index];
        keyboard.onclick = function () {
            getGuess(alphabet[index]);
        }

        document.querySelector('.keyboardtwo').appendChild(keyboard);

    }
}

function getGuess(letter) {
    console.log(letter);
    let clickedButton = document.querySelector('#' + letter);
    console.log('getGuess: ' + clickedButton);
    // clickedButton.disabled = true;
}
getGuess();

// Pick a random word from wordBank
function wordPicker() {
    let position = Math.random();
    position = position * (wordBank.length - 1);
    position = Math.floor(position);
    let generatedWord = wordBank[position];
    console.log(position + ' ' + generatedWord);
    return generatedWord;
}


// console.log(wordBank); //can remove

// Replace generatedWord with underscores
function blankSpaces(string) {
    for (let index = 0; index < string.length; index++) {
        blanks.push('_');
        // console.log('test' + ' ' + index);
        // console.log(blanks)

    }
    updateDOM(); // ??????????????
}

function updateDOM() {
    document.querySelector('#hidden-word').textContent = blanks.join(' ');
}

// function that disables used buttons
function disableButton() {
    // let disabledButton = document.getElementById("keyboard");
    // disabledButton.classList.add('disabled');
    // document.getElementbyId("kbButton").addEventListener("click", disableButton);
    ///////////////////////////////////////////////////////
    // disableButton();  // move this out 
}


///////////////////////////////////////
// Initiate game as new game button
///////////////////////////////////////
function startGame() {


}
generateKeyboard();
const answer = wordPicker();
blankSpaces(answer);
// keyboardButtons();





    // function createKeyboard(letter) {
    // let 
    // let button = document.createElement("keyboard-button");
    // button = document.createElement('button');
    // button.innerHTML = letter.toUpperCase();
    // button.id = "button-" + letter;

    // };
    // for (var i = 0; i < alphabet.length; i++) {
    //     var buttonElement = createKeyboard(alphabet[i]);
    //     document.getElementById("#keyboard").appendChild(buttonElement);
    // }

    // createKeyboard();
// alert(answer);
const wordBank = [
    'admission', 'asymmetric', 'abnormal', 'anomaly', 'beehive', 'breakfast', 'brainstorm', 'basket', 'ballistrade', 'chemistry', 'chimpanzee', 'castle', 'curtain', 'delicate', 'discreet', 'divorce', 'drain'
];

const alphabet =
    'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(alphabet);

let blanks = [];

function wordPicker() {
    let position = Math.random();
    position = position * (wordBank.length - 1);
    position = Math.floor(position);
    let generatedWord = wordBank[position];
    console.log(position + ' ' + generatedWord);
    return generatedWord;
}


console.log(wordBank);
function blankSpaces(string) {
    for (let index = 0; index < string.length; index++) {
        blanks.push('_');
        console.log('test' + ' ' + index);
        console.log(blanks)

    }
    updateDOM();
}

function updateDOM() {
    document.querySelector('#hidden-word').textContent = blanks.join(' ');
}
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

const answer = wordPicker();

blankSpaces(answer);
// alert(answer);
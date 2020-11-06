const wordBank = [
    'admission', 'asymmetric', 'abnormal', 'anomaly', 'beehive', 'breakfast', 'brainstorm', 'basket', 'ballistrade', 'chemistry', 'chimpanzee', 'castle', 'curtain', 'delicate', 'discreet', 'divorce', 'drain'
];

const alphabet =
    'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(alphabet);

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
        // const element = array[index];
        console.log('test' + ' ' + index);
        let element = document.querySelector('#hidden-word');
        document.createElement('X');

    }

}

function createKeyboard() {
    let button = document.createElement("keyboard-button");
    button = document.createElement('button');
    button.innerHTML = letter.toUpperCase();
    button.id = "button-" + letter;


};
// createKeyboard();


const answer = wordPicker();

blankSpaces(answer);
// alert(answer);
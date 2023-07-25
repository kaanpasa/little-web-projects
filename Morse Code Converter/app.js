const generator = document.querySelector(".generator");
const convertBtn = document.querySelector("#convert");
const generateBtn = document.querySelector("#generate");
const currentMorse = document.querySelector(".currentMorse");

convertBtn.addEventListener("click", convertToMorse);
function convertToMorse() {
    const inputText = document.getElementById('inputText').value;

    const morseCodeMap = {
        A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.',
        H: '....', I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.',
        O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-',
        V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
        '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--',
        '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
        ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-',
        '"': '.-..-.', '$': '...-..-', '@': '.--.-.', ' ': '/'
    };

    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i].toUpperCase();

        if (morseCodeMap.hasOwnProperty(char)) {
            outputText += morseCodeMap[char] + ' ';
        } else {
            outputText += char;
        }
    }

    document.getElementById('outputText').value = outputText.trim();

}

generateBtn.addEventListener("click", () => {
    const outputText = document.getElementById('outputText').value;
    generateMorse(outputText);
});
function generateMorse(outputText) {
    let currentIndex = 0;
    console.log(outputText);
    setInterval(() => {

        const morseChar = outputText[currentIndex];

        currentMorse.innerText = morseChar;
        currentMorse.style.color = "#fff";
        if (morseChar === ".") {
            generator.style.backgroundColor = "white";

            setTimeout(() => {
                generator.style.backgroundColor = "#111";
            }, 250);
        } else if (morseChar === "-") {
            generator.style.backgroundColor = "white";
            setTimeout(() => {
                generator.style.backgroundColor = "#111";
            }, 750);
        } else if (morseChar === "/") {
            generator.style.backgroundColor = "white";
            setTimeout(() => {
                generator.style.backgroundColor = "#111";
            }, 1250);
        }
        currentIndex++;
        if (currentIndex >= outputText.length) {
            currentIndex = 0;
        }
    }, 1000);
}
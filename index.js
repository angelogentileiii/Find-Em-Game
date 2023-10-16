const gameBoardArea = document.getElementById('game-board-area');
const characterSearchInput = document.getElementById('character-id-input');
const characterSearchForm = document.getElementById('search-bar-form');
const characterImageSpanElement = document.getElementById('character-image');

let desiredCharacter;
let allAvailableCharacters;
let newCharacterImageElement;

//counter variable
let currentNumber = 30;
let counterStart;

fetch('http://localhost:3000/results')
  .then(response => response.json())
  .then(results => {
    allAvailableCharacters = results

    console.log(allAvailableCharacters)
});

characterSearchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    allAvailableCharacters.map(character => {
        if (Number(character.id) === Number(characterSearchInput.value) && (document.querySelector('span#character-image img'))) {
            let characterImage = document.getElementById('desired-character-image');
            characterImage.src = character.url;

        } else if (Number(character.id) === Number(characterSearchInput.value)) {
            const newLineBreak = document.createElement('br');
            const newCharacterImageElement = document.createElement('img');
            newCharacterImageElement.id = 'desired-character-image'
            newCharacterImageElement.src = character.url;
            characterImageSpanElement.appendChild(newLineBreak);
            characterImageSpanElement.appendChild(newCharacterImageElement);
            
        } else {
            console.log('Oh crap')
        }
    })
    characterSearchForm.reset();
})

const counterClock = document.getElementById('counter-element');
const startGameButtonElement = document.getElementById('start-game-button');


startGameButtonElement.addEventListener('click', startCounterClock)

function startCounterClock(){
    let gameTimer = setInterval(function() {
        counterClock.textContent = currentNumber--
        
        if (currentNumber < 0) {
            clearInterval(gameTimer);
        }
    }, 1000)
 };

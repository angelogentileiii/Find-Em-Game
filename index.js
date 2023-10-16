const gameBoardArea = document.getElementById('game-board-area');
const characterSearchInput = document.getElementById('character-id-input');
const characterSearchForm = document.getElementById('search-bar-form');
const characterImageSpanElement = document.getElementById('character-image');

let desiredCharacter;
let allAvailableCharacters;

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
            characterImage.src = character.url

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
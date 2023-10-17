const gameBoardArea = document.getElementById('game-board-area');
const characterSearchInput = document.getElementById('character-id-input');
const characterSearchForm = document.getElementById('search-bar-form');
const characterImageSpanElement = document.getElementById('character-image');
const counterClock = document.getElementById('counter-element');
// const startGameButtonElement = document.getElementById('start-game-button');

const playAgainButtonElement = document.createElement('button');

let desiredCharacter;
let allAvailableCharacters;
let newCharacterImageElement;
let highScoreCounter = 0;
let betterLuckNextTimeMessage;
let startGameButtonElement;

//local json fetch
fetch('http://localhost:3000/results')
  .then(response => response.json())
  .then(results => {
    allAvailableCharacters = results

    //console.log(allAvailableCharacters)
});

function defaultPageLoad() {

}

//create find me/start game button
function createFindMe(){
    startGameButtonElement = document.createElement('button');
    startGameButtonElement.id = 'start-game-button';
    startGameButtonElement.textContent = `Find Me!`;
    startButtonArea.appendChild(startGameButtonElement);

    startGameButtonElement.addEventListener('click', () => {
        counterElementLabel.textContent = `Time Remaining: `
        currentScoreElement.textContent = `Current Score: ${scoreCounter}`
    
        fillGrid();
        startCounterClock();
        startGameButtonElement.remove();
    
    })
}


//character search bar
characterSearchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    allAvailableCharacters.map(character => {
        if (Number(character.id) === Number(characterSearchInput.value) && (document.querySelector('span#character-image img'))) {
            let characterImage = document.getElementById('desired-character-image');
            characterImage.src = character.url;

        } else if (Number(character.id) === Number(characterSearchInput.value)) {
            const newLineBreak = document.createElement('br');
            const newCharacterImageElement = document.createElement('img')
            newCharacterImageElement.style
            newCharacterImageElement.id = 'desired-character-image'
            newCharacterImageElement.src = character.url;
            characterImageSpanElement.appendChild(newLineBreak);
            characterImageSpanElement.appendChild(newCharacterImageElement);
        } 
        
    })

    createFindMe();

    characterSearchForm.reset();
})


//counter variable
let currentNumber = 3000;
let counterStart;

//game time clock from 30
//startGameButtonElement.addEventListener('click', startCounterClock)

function startCounterClock(){
    let gameTimer = setInterval(function() {
        counterClock.textContent = currentNumber-- / 100;
        
        if (currentNumber < 0) {

            pictureTable.innerHTML = "";
            clearInterval(gameTimer);
            counterClock.innerHTML = ""
            counterElementLabel.innerHTML = ""
            createPlayAgainButton();
            gameScoreFunction();

        }
    }, 1)
 };


 //play again button - populates after game ends
 function createPlayAgainButton(){
    playAgainButtonElement.textContent = 'Play Again?'
    counterClock.appendChild(playAgainButtonElement)
}

playAgainButtonElement.addEventListener('click', () => {
    playAgainButtonElement.remove();
    scoreCounter = 0
    currentScoreElement.textContent = `Current Score: ${scoreCounter}`;
    counterClock.appendChild(startGameButtonElement);
    currentNumber = 3000;
    betterLuckNextTimeMessage.remove();
})


//updates high schore after game ends
function gameScoreFunction(){
    if (Number(scoreCounter >= Number(highScoreCounter))) {
        highScoreCounter = scoreCounter
        highScoreElement.textContent = `High Score: ${highScoreCounter}`
    } else {
        betterLuckNextTimeMessage = document.createElement('h3');
        const parentDiv = document.getElementById('time-counter').parentNode;
        betterLuckNextTimeMessage.textContent = `Aww, you couldn't find me! Let's play again!`
        parentDiv.insertBefore(betterLuckNextTimeMessage, startButtonArea)
    }
}


//find me/start game button
// startGameButtonElement.addEventListener('click', () => {
//     counterElementLabel.textContent = `Time Remaining: `
//     currentScoreElement.textContent = `Current Score: ${scoreCounter}`

//     fillGrid();
//     startCounterClock();
//     startGameButtonElement.remove();

// })
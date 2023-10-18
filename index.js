const gameBoardArea = document.getElementById('game-board-area');
const characterSearchInput = document.getElementById('character-id-input');
const characterSearchForm = document.getElementById('search-bar-form');
const characterImageSpanElement = document.getElementById('character-image');
const counterClock = document.getElementById('counter-element');
const defaultLoadArea = document.getElementById('default-load-area');
const documentBody = document.querySelector('body');

const playAgainButtonElement = document.createElement('button');

let startGameButtonElement;
let desiredCharacter;
let allAvailableCharacters;
let newCharacterImageElement;
let highScoreCounter = [null, null, null];
let highScoreIndex = 0;
let betterLuckNextTimeMessage;
let randomImage;
let defaultImageOnLoad;

let inputLimitArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const difficultButton = document.getElementById('diff-dropdown')

//local json fetch
fetch('http://localhost:3000/results')
  .then(response => response.json())
  .then(results => {
    allAvailableCharacters = results

    imageLoad();
});


//default page image load
function imageLoad() {
    defaultImageOnLoad = document.createElement('img');

    randomImage = Math.floor(20 * Math.random())

    defaultImageOnLoad.src = 'https://media.giphy.com/media/VGjM9wsHH0JMyneWB6/giphy.gif';
    defaultImageOnLoad.id = 'page-load-image';
    defaultLoadArea.appendChild(defaultImageOnLoad);
};

//create startButton
function createStartButton(){
    startGameButtonElement = document.createElement('button');
    startGameButtonElement.id = 'start-game-button';
    startGameButtonElement.textContent = 'Find Me!'
    characterImageSpanElement.appendChild(startGameButtonElement)

    startGameButtonElement.addEventListener('click', () => {
        counterElementLabel.textContent = `Time Remaining: `
        currentScoreElement.textContent = `Current Score: ${scoreCounter}`
        
        if (difficultButton.value === 'Easy') {
            highScoreIndex = 0
        } else if (difficultButton.value === 'Medium') {
            highScoreIndex = 1
        } else {
            highScoreIndex = 2
        }

        if (highScoreCounter[highScoreIndex] !== null) {
            highScoreElement.textContent = `High Score: ${highScoreCounter[highScoreIndex]}`
        }
    
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
            newCharacterImageElement = document.createElement('img')
            newCharacterImageElement.id = 'desired-character-image';
            newCharacterImageElement.className = 'zoom';
            newCharacterImageElement.src = character.url;

            // newCharacterImageElement.addEventListener('mouseover', (event) => {
            //     newCharacterImageElement.style.width = '350px';
            //     newCharacterImageElement.style.display = 'block';
            // })
            
            // newCharacterImageElement.addEventListener('mouseout', (event) => {
            //     newCharacterImageElement.style.width = '150px';
            // })

            characterImageSpanElement.appendChild(newCharacterImageElement);

        } else if (!inputLimitArray.includes(Number(characterSearchInput.value))){
            newCharacterImageElement.remove();
            startGameButtonElement.remove();
        }
    })

    defaultImageOnLoad.remove();


    if (inputLimitArray.includes(Number(characterSearchInput.value)) && !document.getElementById('start-game-button') && !document.getElementById('play-again')) {
        createStartButton();
    } else if (!inputLimitArray.includes(Number(characterSearchInput.value))) {
        defaultPageLoad();
    }

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
    }, 5)
 };


 //play again button - populates after game ends
 function createPlayAgainButton(){
    playAgainButtonElement.textContent = 'Play Again?';
    playAgainButtonElement.id = 'play-again';
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
    if (difficultButton.value === 'Easy') {
        highScoreIndex = 0
    } else if (difficultButton.value === 'Medium') {
        highScoreIndex = 1
    } else {
        highScoreIndex = 2
    }

    if (Number(scoreCounter >= Number(highScoreCounter[highScoreIndex]))) {
        highScoreCounter[highScoreIndex] = scoreCounter
        highScoreElement.textContent = `High Score: ${highScoreCounter[highScoreIndex]}`
    } else {
        betterLuckNextTimeMessage = document.createElement('h3');
        betterLuckNextTimeMessage.id = "better-luck-message";
        const parentDiv = document.getElementById('time-counter').parentNode;
        betterLuckNextTimeMessage.textContent = `Aww, you couldn't find me! Let's play again!`
        parentDiv.insertBefore(betterLuckNextTimeMessage, startButtonArea)
    }
}
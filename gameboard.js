const currentScoreElement = document.getElementById('current-score-tracker');
const highScoreElement = document.getElementById('high-score-tracker');
const counterElementLabel = document.getElementById('counter-element-label');
const startButtonArea = document.getElementById('time-counter');

// const playAgainButtonElement = document.createElement('button');

let picturesArray = []

let targetPicture;
let body = document.querySelector('body')


fetch('http://localhost:3000/results')
.then(results => results.json())
.then(character => character.forEach( character => {
    picturesArray.push(character)
}))

let boardSize = 5
let targetRow
let targetColumn

let correctPictureSource
let pictureTable = document.createElement('table')
pictureTable.id = 'gameboard';


gameBoardArea.append(pictureTable)

// targetRow = Math.floor(boardSize * Math.random())
// targetColumn = Math.floor(boardSize * Math.random())

function fillGrid() {

    targetRow = Math.ceil(4 * Math.random())
    targetColumn = Math.floor(boardSize * Math.random())

    pictureTable.innerHTML = ''
    correctPictureSource = document.getElementById('desired-character-image').src

    for (row = 1; row < 5; row++) {
    
        const newRow = document.createElement('tr')
        pictureTable.appendChild(newRow)
        for(column = 0; column < boardSize; column++) {
            const cell = document.createElement('td')
            
            let randomNumber = Math.floor(20 * Math.random())
    
            const newPicture = document.createElement('img')
            newPicture.className = 'grid-img'
            newPicture.id = `r${row}c${column}`
            newPicture.src = picturesArray[randomNumber].url
            
            if (correctPictureSource === newPicture.src) {
                randomNumber = Math.floor(19 * Math.random()) + randomNumber
                if (randomNumber > 19) {
                    randomNumber = randomNumber - 20
                }

                newPicture.src = picturesArray[randomNumber].url

            } 

            newRow.appendChild(cell)
            cell.append(newPicture)
    
        }
        
    }
    
    targetPicture = document.getElementById(`r${targetRow}c${targetColumn}`)
    targetPicture.src = correctPictureSource

    targetPicture.addEventListener('click', handleFound)
}

let scoreCounter = 0
let highScoreCounter = 0

function handleFound() {
    // console.log('Found It!')
    currentScoreElement.textContent = `Current Score: ${Number(1 + scoreCounter++)}`
    targetPicture.removeEventListener('click', handleFound);
    pictureTable.innerHTML = "";
    fillGrid();
}

startGameButtonElement.addEventListener('click', () => {
    counterElementLabel.textContent = `Time Remaining: `
    currentScoreElement.textContent = `Current Score: ${scoreCounter}`

    fillGrid();
    startCounterClock();
    startGameButtonElement.remove();

})